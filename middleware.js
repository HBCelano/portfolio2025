import { NextResponse } from 'next/server';

export function middleware(req) {
  // Comprobar la cabecera de autenticación
  const auth = req.headers.get('authorization');
  
  // Definir las credenciales válidas
  const validAuth = 'Basic ' + Buffer.from('user:password').toString('base64');

  // Si la autenticación es incorrecta, devolver 401
  if (auth !== validAuth) {
    const response = new NextResponse('Unauthorized', { status: 401 });
    response.headers.set('WWW-Authenticate', 'Basic realm="Protected Area"');
    return response;
  }

  // Si la autenticación es correcta, continuar con la solicitud
  return NextResponse.next();
}
