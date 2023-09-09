"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
  
    const router = useRouter();
    const DelProduct= async()=>{
        let response = await fetch("http://localhost:3000/api/products/"+props.id,{
            method:"delete",
        });
        response= await response.json();
        if(response.success){
            alert("Product Deleted Successfully");
            router.push("/products")
        }
    }

    return <button onClick={DelProduct}>Delete</button>
}