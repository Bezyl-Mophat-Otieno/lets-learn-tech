import dbConnect from "@/utils/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request,{params})=>{

    const {id} = params;


    try {
        await dbConnect();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), {status: 200});

        } catch (error) {
            return new NextResponse(error, {status: 500});
        
    }
}