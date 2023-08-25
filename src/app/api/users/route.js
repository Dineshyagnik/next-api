import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({name:'Dinesh',age:21,city:'Noida'},{status:200})
}