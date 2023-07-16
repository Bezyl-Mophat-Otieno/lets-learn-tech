import dbConnect from "@/utils/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request)=>{


    try {
        await dbConnect();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts), {status: 200});

        } catch (error) {
            return new NextResponse(error, {status: 500});
        
    }
}