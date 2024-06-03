// app/api/categories/route.js
import { woocommerce } from '../utils';
import { NextResponse } from 'next/server';

async function fetchCategories(page = 1, categories = []) {
  try {
    const response = await woocommerce.get('products/categories', {
      per_page: 50,  // Fetch up to 50 categories per page
      page,          // Current page
    });

    const newCategories = response.data;
    const allCategories = categories.concat(newCategories);

    if (newCategories.length === 50) {
      // If we received 50 categories, there might be more. Fetch next page.
      return fetchCategories(page + 1, allCategories);
    }

    // Filter out duplicates by 'id'
    const uniqueCategories = allCategories.reduce((acc, category) => {
      if (!acc.find(item => item.name === category.name)) {
        acc.push(category);
      }
      return acc;
    }, []);

    return uniqueCategories;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function GET() {
  try {
    const categories = await fetchCategories();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.error(new Error(error.message));
  }
}

