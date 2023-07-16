'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styles from './dashboard.module.css'
import Image from 'next/image'
import dbConnect from '@/utils/mongodb'


function Dashboard() {
  const router = useRouter()
  // Fetcher function that utilises the axios library.
  // const fetcher = async()=>{
  //   try {
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //      setTodos(await res.data)
  //     return res.data
  //   } catch (error) {
  //     console.log(error)     
  //   }

  // }

  // Fetcher using the fetch api 
  // Recommended way in the documentation
  const session = useSession()
  const fetcher = async (...args)=> fetch(...args).then(res => res.json())
  console.log(session?.data?.user)
  const { data , isLoading , error } = useSWR(`/api/posts?email=${session?.data?.user.email}`, fetcher)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const title = e.target[0].value
    const img = e.target[1].value
    const desc= e.target[2].value
    const content = e.target[3].value
    const username = session?.data?.user.email
    const requestBody = {
      title,
      img,
      desc,
      content,
      username
    }

    try{
      await dbConnect()

      const res = await fetch('/api/posts',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },    
        body:JSON.stringify(requestBody)
      })

    }catch(err){
      console.log(err)

    }
  }

 session.status === "unauthenticated" && router?.push('/dashboard/login')
 session.loading === "loading" && <h1>Loading...</h1>

 if(session.status === "authenticated"){
   return (
     <div className={styles.container}>
     <div className={styles.blogs}>
     <div className={styles.post}>
     <div className={styles.imgContainer}>
     <Image className={styles.img} src="https://cdn.pixabay.com/photo/2023/07/10/18/39/harvest-8118900_640.jpg" alt="Blog" width={200} height={100}  />
     </div>
     <div className={styles.titleContainer}>
      <span className={styles.title} >Blog 1</span>
     </div>
     <div>
     <button className={styles.dltBtn}>Delete</button>
     </div>
     </div>
     

     </div>
     <div className={styles.addBlog}>   
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Image"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Description"
          required
          className={styles.input}
        />
        <textarea 
        className={styles.textarea}
        placeholder="Content"
        required
        />
        <button className={styles.button}>Upload Blog</button>
        {error && "Something went wrong!"}
      </form>
     </div>   
     </div>
   )
 }

}

export default Dashboard
