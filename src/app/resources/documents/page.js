"use client";
import { useEffect, useState } from "react";
import PageHeader from "../../(components)/header";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    async function fetchCategories() {
        try {
            const response = await fetch('/api/categories');
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            console.log(data);
            setCategories(data);
        } catch (err) {
            setError(err.message);
        }
    }

    fetchProducts();
  }, []);
  const handleGetDocument = async (productId) => {
    window.location.href = `https://hrfleek.com/?add-to-cart=${productId}`;
};

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <PageHeader title={"Legal Document Templates"} />
      {loading && (
        <div className="w-full flex items-center justify-center py-10">
          <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-5 lg:px-20 py-10">
      <div className="">
        {products.map((product) => (
          <div key={product?.id} className="flex items-center justify-between p-5 rounded-lg shadow-lg bg-gray-50 border-b-2 border-solid border-gray-800">
           <div className="flex items-center gap-10"> <h2>{product?.name}</h2>
            {product?.price==0&&(<p className="text-red-500 text-md">FREE</p>)}
            {product?.price>0&&(<p className="text-primary text-md">KSH {product?.price}</p>)}</div>
            <button className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple" onClick={() => handleGetDocument(product.id)}>GET DOCUMENT</button>
           
            
          </div>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Page;
