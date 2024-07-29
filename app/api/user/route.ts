import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient()
export async function POST(req:NextRequest){
    const body = await req.json();
    // console.log(body);
    const resp = await prisma.user.create({
        data:body
    });
    // console.log(resp)
    return Response.json({
        msg : "Login Sucessfull"
    })

}