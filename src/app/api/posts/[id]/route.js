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
//Delete a post
export const DELETE = async (request,{params})=>{

    const {id} = params;


    try {
        await dbConnect();
        await Post.findByIdAndDelete(id);
        return new NextResponse("Blog Deleted Successfully", {status: 200});

        } catch (error) {
            return new NextResponse(error, {status: 500});
        
    }
}