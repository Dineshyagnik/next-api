"use client"

import { useEffect, useState } from 'react'
import '../../style.css'
import Link from 'next/link';

export default function (props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");


    useEffect(() => {
        getProducDetail();
    }, []);

    const getProducDetail = async () => {
        let productId = props.params.editproduct
        let productData = await fetch("http://localhost:3000/api/products/" + productId);
        productData = await productData.json();
        if (productData.success) {
            let result = productData.result;
            setName(result.name);
            setPrice(result.price);
            setColor(result.color);
            setCompany(result.company);
            setCategory(result.category);
        }
    }

    return (
        <div>
            <h2 className='addPro_head'>Update Product</h2>

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

            <button className='addpro_btn'>Update Product</button>
            <Link href={'/products'}>Go to Product List</Link>
        </div>

    )
};