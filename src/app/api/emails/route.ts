import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    console.log(request.body);
    // if (type === 'email') {
    //     try {
    //         const filePath = join(process.cwd(), `public/pdfs/cv/${file}.pdf`);
    //         const fileBuffer = await fs.readFile(filePath);
    //         return new NextResponse(fileBuffer, {
    //             status: 200,
    //             headers: {
    //                 'Content-Type': 'application/pdf',
    //                 'Content-Disposition': 'attachment; filename="Homero Celano - CV.pdf"',
    //             }
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         return new NextResponse(null, { status: 404 });
    //     };
    // } else {
    //     return new NextResponse(undefined, { status: 400 });
    // };
};
