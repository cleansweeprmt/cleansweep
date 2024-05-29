import { NextResponse } from 'next/server';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
    url: "https://hrfleek.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});


export async function POST(req) {
    try {
        const { productId } = await req.json();
        console.log('Adding product to cart:', productId);

        const response = await api.post("cart", {
            id: productId,
            quantity: 1
        });

        console.log('Response from WooCommerce:', response);
        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error adding product to cart:', error);
        return NextResponse.error(new Error(error.message));
    }
}
