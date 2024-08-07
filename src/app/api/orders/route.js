// app/api/orders/route.js

import { woocommerce } from "../utils";

export async function POST(req) {
  const { productId, customer } = await req.json();

  try {
    const response = await woocommerce.post('orders', {
      payment_method: 'bacs',
      payment_method_title: 'Direct Bank Transfer',
      set_paid: false,
      billing: customer.billing,
      shipping: customer.shipping,
      line_items: [
        {
          product_id: productId,
          quantity: 1,
        },
      ],
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return new Response(JSON.stringify({ error: 'Failed to create order' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
