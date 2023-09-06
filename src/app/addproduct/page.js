"use client"

import { useState } from 'react'
import '../style.css'

export default function () {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");


    const addProduct = async () => {
        console.log(name, price, color, category, company);
        let result = await fetch("http://localhost:3000/api/products",{
            method:'POST',
            body:JSON.stringify({name,price,color,category,company})
        });
        result = await result.json();
        if(result.success){
            alert("new product added")
        }
    }

    return (
        <div>
            <h2 className='addPro_head'>Add Product</h2>

            <input
                type="text"
                value={name}
                placeholder="Enter Product Name"
                className='input'
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                value={price}
                placeholder="Enter Product Price"
                className='input'
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                value={color}
                placeholder="Enter Product Color"
                className='input'
                onChange={(e) => setColor(e.target.value)}
            />
            <input
                type="text"
                value={company}
                placeholder="Enter Product Company"
                className='input'
                onChange={(e) => setCompany(e.target.value)}
            />
            <input
                type="text"
                value={category}
                placeholder="Enter Product Category"
                className='input'
                onChange={(e) => setCategory(e.target.value)}
            />

            <button className='addpro_btn' onClick={addProduct}>Add Product</button>
        </div>
    )
};