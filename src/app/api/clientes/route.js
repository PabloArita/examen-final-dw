import db from '../../../../models';

export async function POST(req) {
  const body = await req.json(); // Leer datos enviados en el cuerpo
  const { nombres, apellidos, genero, fechaNacimiento, estado } = body;

  try {
    const cliente = await db.Cliente.create({ nombres, apellidos, genero, fechaNacimiento, estado });
    return new Response(JSON.stringify(cliente), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

export async function GET() {
  try {
    const clientes = await db.Cliente.findAll();
    return new Response(JSON.stringify(clientes), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
