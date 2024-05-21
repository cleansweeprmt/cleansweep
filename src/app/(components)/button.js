'use client'

import { useRouter } from "next/navigation";

const CtaButton = () => {
    const router = useRouter()
    return (  
        <button
        onClick={() => {
          router.push('https://calendly.com/ochiengwarren3/evacare')
        }}
          type="button"
          className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 dark:bg-primary  focus:outline-none "
        >
          Learn More
        </button>);
}
 
export default CtaButton;