import { type NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';
import nodemailer from 'nodemailer';
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
                from: process.env.EMAIL_ADDRESS_SECRET,
                to: process.env.EMAIL_ADDRESS_TO_SECRET,
                subject: `Nuevo mensaje de ${formData.get('name')}`,
                html: `
                    <div style="width: 100%; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); overflow: hidden;">
                        <div style="display: flex; align-items: center; background-color: #3498db; color: white; padding: 20px;">
                            <img src="https://hbcelano.vercel.app/img/hc-light.svg" alt="Logo" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 15px;">
                            <h1 style="font-size: 24px; margin: 0;">HBCelano</h1>
                        </div>
                        <div style="padding: 20px;">
                            <h2 style="font-size: 18px; margin-bottom: 10px;">Datos del Usuario:</h2>
                            <ul style="list-style-type: none; padding: 0;">
                            <li style="background-color: #f9f9f9; margin-bottom: 10px; padding: 10px; border-radius: 5px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">
                                <p style="margin: 0;"><strong>Nombre: </strong>${formData.get('name')}</p>
                            </li>
                            <li style="background-color: #f9f9f9; margin-bottom: 10px; padding: 10px; border-radius: 5px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">
                                <p style="margin: 0;"><strong>E-mail: </strong>${formData.get('email')}</p>
                            </li>
                            <li style="background-color: #f9f9f9; margin-bottom: 10px; padding: 10px; border-radius: 5px; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);">
                                <p style="margin: 0;"><strong>Mensaje: </strong>${formData.get('message')}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            `,
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
