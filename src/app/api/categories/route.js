import { NextResponse } from 'next/server';
import {woocommerce} from '../utils'


export async function GET() {
    try {
        const response = await woocommerce.get("products/categories", {
            per_page: 100, // Adjust the number of categories to fetch
        });
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.error(new Error(error.message));
    }
}