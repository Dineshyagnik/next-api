import { user } from "@/util/db";
import { NextResponse } from "next/server";


export function GET(request,content){


    const userData=user.filter((item)=>item.id==content.params.id)

    return NextResponse.json(
        userData.length==0?{result:'No Data Found',success:false}:{result:userData[0],success:true},
        {status:200})
}