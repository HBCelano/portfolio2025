import { type NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { promises as fs } from 'fs';

export async function GET(request: NextRequest) {
    const type = request.nextUrl.searchParams.get('type');
    const file = request.nextUrl.searchParams.get('file');
    if (type === 'downloadPDF') {
        try {
            const filePath = join(process.cwd(), `public/pdfs/cv/${file}.pdf`);
            const fileBuffer = await fs.readFile(filePath);
            return new NextResponse(fileBuffer, {
                status: 200,
                headers: {
                    'Content-Type': 'application/pdf',
                    'Content-Disposition': 'attachment; filename="Homero Celano - CV.pdf"',
                }
            });
        } catch (error) {
            console.error(error);
            return new NextResponse(null, { status: 404 });
        };
    } else {
        return new NextResponse(undefined, { status: 400 });
    };
};
