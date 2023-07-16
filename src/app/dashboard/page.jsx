'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


function Dashboard() {
  const router = useRouter()
  const [todos , setTodos] = useState([])
  // Fetcher function that utilises the axios library.
  const fetcher = async()=>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
       setTodos(await res.data)
      return res.data
    } catch (error) {
      console.log(error)     
    }

  }

  const { data , isLoading , error } = useSWR('https://jsonplaceholder.typicode.com/todos', fetcher)

 const session = useSession()

 session.status === "unauthenticated" && router?.push('/dashboard/login')
 session.loading === "loading" && <h1>Loading...</h1>

 if(session.status === "authenticated"){
   return (
     <div>
         Dashboard
     </div>
   )
 }

}

export default Dashboard
