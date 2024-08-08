"use client";
import { useEffect, useState } from "react";
import PageHeader from "../../(components)/header";

async function fetchCategories() {
  const response = await fetch('/api/categories');
  if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  const findNew=data.filter((d)=>d.name=='hiring')
  return data;
}


const Page = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const newCategories=[
    {id:45,name:'Free Human Resource Documents'},
  {id:47,name:'Hiring'},
  {id:46,name:'Employment Contracts & Agreements'},
  {id:89,name:'Induction & Onboarding'},
  {id:64,name:'Employee Policies'},
  {id:69,name:'Job Roles & Descriptions'},
  {id:79,name:'Performance Management'}]

  useEffect(() => {
    async function loadCategories() {
        try {     
            fetchCategories()    
            setCategories(newCategories);
            setActiveCategory(newCategories[0].id);
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
    window.location.href = `https://dashboard.hrfleek.com/product/${productId}`;
};

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <PageHeader title={'Document Library'}/>
      <div className="container mx-auto px-5 lg:px-20 py-5">
        <h2 className="text-md text-dim">Our document portal service offers a comprehensive library of downloadable HR documents relevant to various employment situations. However, it's important to understand the limitations and consider seeking legal advice for complex situations. <br/><br/>
        Whether you are growing a business or supporting its success, HRFLEEK is here to help you. We have created a broad range of free resources to guide you through all the key elements of starting, growing, and protecting a successful business.</h2>
      
      </div>
      <div className="products container mx-auto px-5 lg:px-20 py-10 flex flex-col md:flex-row gap-5 lg:gap-10">
      <div className="lg:basis-1/4">
                    {newCategories.map((i)=>(
                        <div  className={`tab bg-gray-100 shadow-md rounded border-gray-800  border-b-[1px] border-solid px-4 py-3 text-black text-sm flex items-center justify-between ${activeCategory === i.id ? 'active bg-primary' : ''}`}  onClick={() => setActiveCategory(i.id)}>{i.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z" clipRule="evenodd" />
                      </svg>
                      </div>
                    ))}
                </div>
                <div className="w-full lg:basis-3/4">
        {loading ? (
             <div className='w-full flex items-center justify-center py-10'>
             <div className=" flex justify-center items-center">
   <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
 </div> 
           </div>
        ) : (

                
                <div>
               {products.map((product) => (
              <div key={product?.id} className="flex items-center justify-between px-5 py-3 rounded shadow-lg bg-gray-50 border-b-2 border-solid border-gray-800">
              <div className="flex items-center gap-10"> <h2>{product?.name}</h2>
               {product?.price==0&&(<p className="text-red-500 text-md me-3">FREE</p>)}
               {product?.price>0&&(<p className="text-primary text-md">KSH {product?.price}</p>)}</div>
               <button className="uppercase px-4 py-2 text-sm font-medium  text-center text-white transition-colors duration-150 bg-primary border border-transparent rounded-lg active:bg-primary hover:bg-[#01382E] focus:outline-none focus:shadow-outline-purple" onClick={() => handleGetDocument(product.slug)}>GET DOCUMENT</button>
              
               
             </div>
            ))}
                </div>
            
         
        )}
    </div>
      </div>

   
    {error && <p>Error: {error}</p>}
    
</div>
  );
};

export default Page;
