import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

    let data = [];
    try {
        await mongoose.connect(connectionStr);
        const data = await Product.find();
    } catch (error) {
        data = { success: false }
    }
    return NextResponse.json({ result: data, success: true })
}

export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionStr);
    // let product = new Product({
    //     name: "Redmi note 8",
    //     price: "30000",
    //     color: "Silver",
    //     company: "Redmi",
    //     category: "Phone"
    // });

    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true})
}