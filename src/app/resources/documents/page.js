"use client";
import { useEffect, useState } from "react";
import PageHeader from "../../(components)/header";

async function fetchCategories() {
  const response = await fetch('/api/categories');
  if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCategories() {
        try {
            const categoriesData = await fetchCategories();
            setCategories(categoriesData);
            if (categoriesData.length > 0) {
                setActiveCategory(categoriesData[0].id);
            }
        } catch (err) {
            setError(err.message);
        }
    }

    loadCategories();
}, []);

useEffect(() => {
    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetch(`/api/products?category=${activeCategory}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    if (activeCategory !== null) {
        fetchProducts();
    }
}, [activeCategory]);
  const handleGetDocument = async (productId) => {
    window.location.href = `https://hrfleek.com/product/${productId}`;
};

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <PageHeader title={'Document Library'}/>
    <div className="tabs bg-black">
        {categories.map((category) => (
            <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                dangerouslySetInnerHTML={{ __html:category.name}}
                className={`tab bg-black border-white border-r-[1px] border-b-[1px] border-solid p-4 text-white ${activeCategory === category.id ? 'active bg-primary' : ''}`}
            >
            </button>
        ))}
    </div>
    <div className="products">
        {loading ? (
             <div className='w-full flex items-center justify-center py-10'>
             <div className=" flex justify-center items-center">
   <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
 </div> 
           </div>
        ) : (
            products.map((product) => (
              <div key={product?.id} className="flex items-center justify-between p-5 rounded-lg shadow-lg bg-gray-50 border-b-2 border-solid border-gray-800">
              <div className="flex items-center gap-10"> <h2>{product?.name}</h2>
               {product?.price==0&&(<p className="text-red-500 text-md me-3">FREE</p>)}
               {product?.price>0&&(<p className="text-primary text-md">KSH {product?.price}</p>)}</div>
               <button className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple" onClick={() => handleGetDocument(product.slug)}>GET DOCUMENT</button>
              
               
             </div>
            ))
        )}
    </div>
    {error && <p>Error: {error}</p>}
    
</div>
  );
};

export default Page;
