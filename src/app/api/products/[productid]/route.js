import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";

export async function PUT(request,content){
    const productId = content.params.productid;
    const filter= {_id:productId}
    const payload= await request.json();
    console.log(payload);
    await mongoose.connect(connectionStr);
    const result = await Product.findOneAndUpdate(filter,payload)

    return NextResponse.json({result,success:true});
}