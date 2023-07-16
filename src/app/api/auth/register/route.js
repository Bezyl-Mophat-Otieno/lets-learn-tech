import { NextResponse } from "next/server";
import User from "@/models/User";
import dbConnect from "@/utils/mongodb";
import bcrypt from 'bcryptjs' 

export const POST = async(request) => {

  try{
    // await database connection
    await dbConnect();
    const {username,email,password} = await request.json();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const user =  await User.create({
      username,
      email,
      password:hashedPassword
    })
   
    return new NextResponse('User Created Successfully');

  }catch(err){
    console.log(err);
    return new NextResponse(err.message,{status:500})
  }
}