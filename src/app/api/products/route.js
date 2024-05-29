import { NextResponse } from 'next/server';
import {woocommerce} from '../utils'

export async function GET() {
    try {
        const response = await woocommerce.get("products", {
            per_page: 40, // Adjust the number of products to fetch
        });
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.error(new Error(error.message));
    }
}
