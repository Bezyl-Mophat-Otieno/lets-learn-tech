import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import dbConnect from "@/utils/mongodb"
import User from "@/models/User"
import bcrypt from 'bcryptjs' 
 const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      id:'credentials',
      name:'Credentials',
      //This function is being used to authorize the user 
      async authorize (credentials) {
        try {
          await dbConnect()

          const {email,password} = credentials;
          // console.log({password})

          const user = await User.findOne({email})
          // console.log({user})

          if(user){
            
            const isMatch = await bcrypt.compare(password,user.password)
            console.log({isMatch})     

            if(isMatch){
              return user
            }else{
              throw new Error("Invalid Credentials")
            }
          }else{
            
            throw new Error("No user found")
          }

        } catch (error) {
          throw new Error(error.message)
          
        }
      }
    })
    // ...add more providers here
  ],pages:{
    error:'/dashboard/login',
  }
})

export {handler as GET , handler as POST}