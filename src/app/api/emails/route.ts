import { type NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';
import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { validateInputs } from '@/assets/utilities/ts/validateInputs';

// type DataType = {
//     type: FormDataEntryValue;
//     name: FormDataEntryValue;
//     email: FormDataEntryValue;
//     message: FormDataEntryValue;
// };

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    // const data: DataType = Object.fromEntries(formData.entries()) as DataType;
    // if (data.type === 'email' && !validateInputs(data.name, data.email, data.message)) {
    if (formData.get('type') === 'email' && !validateInputs(formData.get('name'), formData.get('email'), formData.get('message'))) {
        // formData.append('_autoresponse', 'Tu mensaje fue recibido, gracias por visitar mi sitio. Te contactaré pronto.');
        try {
            // axios.defaults.headers.post['Content-Type'] = 'application/json';
            // const response = await axios.post(
            //     `https://formsubmit.co/ajax/${atob(process.env.EMAIL_SECRET as string)}`,
            //     formData
            //     // Object.fromEntries(formData.entries()),
            //     // {
            //     //     headers: {
            //     //         ...axios.defaults.headers.post,
            //     //         "Content-Type": 'application/json'
            //     //     }
            //     // }
            // );
            // return new NextResponse(undefined, { status: response.status });
            // return NextResponse.json({ ...response.data, env: atob(process.env.EMAIL_SECRET as string) });

            const html = readFileSync(join(process.cwd(), 'src/app/api/emails/templates/email.html'), 'utf-8')
                .replace('{{name}}', formData.get('name') as string)
                .replace('{{email}}', formData.get('email') as string)
                .replace('{{message}}', formData.get('message') as string)
                .replace('{{date}}', String(new Date().getFullYear()));

            const transporter = nodemailer.createTransport({
                // host: 'smtp.gmail.com',  // Host SMTP de Gmail
                // port: 587,  // Puerto TLS para Gmail
                // secure: false,  // Establecer en 'true' si usas SSL en lugar de TLS
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_ADDRESS_SECRET,
                    pass: process.env.EMAIL_PASSWORD_SECRET
                }
            });
            const mailOptions = {
                from: {
                    name: 'Homero Celano - Portfolio Web',
                    address: process.env.EMAIL_ADDRESS_SECRET as string
                },
                to: process.env.EMAIL_ADDRESS_TO_SECRET,
                subject: `Nuevo mensaje de ${formData.get('name')}`,
                html
            };
            await transporter.sendMail(mailOptions);
            return new NextResponse(undefined, { status: 200 });
        } catch (error) {
            console.error('Error: ', error);
            return new NextResponse(undefined, { status: 500 });
        };
    } else {
        return new NextResponse(undefined, { status: 500 });
    };
};
