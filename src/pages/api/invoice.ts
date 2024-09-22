// src/pages/api/invoice.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get('name');
  const address = data.get('address');
  const email = data.get('email');
  const product = data.get('product');
  const quantity = data.get('quantity');
  const price = data.get('price');
  const total = data.get('total');

  return new Response(JSON.stringify({ message: 'Faktura registrert!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
