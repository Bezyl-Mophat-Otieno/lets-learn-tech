import dbConnect from "@/utils/mongodb";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request)=>{

    // get the url from the request 

    const url = new URL(request.url);

    const email = url.searchParams.get('email');


    try {
        await dbConnect();
        const posts = await Post.find(email && {email});
        return new NextResponse(JSON.stringify(posts), {status: 200});

        } catch (error) {
            return new NextResponse(error, {status: 500});
        
    }
}