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
            const date = new Date().getFullYear();
            const mailOptions = {
                from: process.env.EMAIL_ADDRESS_SECRET,
                to: process.env.EMAIL_ADDRESS_TO_SECRET,
                subject: `Nuevo mensaje de ${formData.get('name')}`,
                html: `
                    <!DOCTYPE html>
                    <html lang="es">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Email</title>
                        </head>
                        <body>
                            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; max-width: 600px; border: none; border-radius: 15px; margin: 40px auto; background-color: #90caf9;">
                                <thead>
                                    <tr>
                                        <th valign="middle" align="left" style="vertical-align: middle; text-align: left; padding: 20px;">
                                            <table cellpadding="0" cellspacing="0" border="0" style="border: none;">
                                                <thead>
                                                    <tr>
                                                        <th valign="middle" style="vertical-align: middle;">
                                                            <img src="https://hbcelano.vercel.app/img/hc-light.png" alt="Logo" width="50" height="50" style="display: block; border-radius: 50%;">
                                                        </th>
                                                        <th width="8"></th>
                                                        <th valign="middle" style="vertical-align: middle;">
                                                            <h1 style="font-family: Arial,Helvetica,sans-serif; font-size: 1.8rem; font-weight: 400; color: black; margin: 0;">HBCelano</h1>
                                                        </th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody style="background-color: #272727;">
                                    <tr>
                                        <td valign="middle" colspan="100%" style="vertical-align: middle;">
                                            <h2 style="font-family: Arial,Helvetica,sans-serif; font-size: 1.4rem; font-weight: 300; text-align: center; color: white; padding: .8rem;">DATOS DEL USUARIO</h2>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" style="vertical-align: middle; font-family: Arial,Helvetica,sans-serif; font-size: 1rem; color: white; padding: .6rem 1.5rem;"><strong>🙋‍♂️ NOMBRE: </strong>${formData.get('name')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" style="vertical-align: middle; font-family: Arial,Helvetica,sans-serif; font-size: 1rem; color: white; padding: .6rem 1.5rem;"><strong>📌 E-MAIL: </strong>${formData.get('email')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td valign="middle" style="vertical-align: middle; font-family: Arial,Helvetica,sans-serif; font-size: 1rem; color: white; padding: .6rem 1.5rem; padding-bottom: 3rem;"><strong>📧 MENSAJE: </strong>${formData.get('message')}
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot style="background-color: #121212; border-bottom-left-radius: 15px;border-bottom-right-radius: 15px;">
                                    <tr style="border-bottom-left-radius: inherit; border-bottom-right-radius:inherit;">
                                        <td valign="middle" colspan="100%" style="vertical-align: middle;border-bottom-left-radius: inherit; border-bottom-right-radius: inherit;">
                                            <h5 style="font-family: Arial,Helvetica,sans-serif; font-size: 1rem;font-weight: 300; text-align: center; color: white; margin: .8rem;">
                                                <span>
                                                    ${date} &copy; HBCelano
                                                </span>
                                            </h5>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </body>
                    </html>                        
                `
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
