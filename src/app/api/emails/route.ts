import { type NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
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
            const response = await axios.post(
                `https://formsubmit.co/ajax/${atob(process.env.EMAIL_SECRET as string)}`,
                formData
                // Object.fromEntries(formData.entries()),
                // {
                //     headers: {
                //         ...axios.defaults.headers.post,
                //         "Content-Type": 'application/json'
                //     }
                // }
            );
            return new NextResponse(undefined, { status: response.status });
        } catch (error) {
            console.error('Error: ', error);
            return new NextResponse(undefined, { status: 400 });
        };
    } else {
        return new NextResponse(undefined, { status: 400 });
    };
};
