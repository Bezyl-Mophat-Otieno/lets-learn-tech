'use client'
import React from 'react'
import styles from './login.module.css'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
function Login() {
  const session = useSession()
  const router = useRouter()

  const [error,setError] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    try {
      signIn('credentials' , {email , password })
      
    } catch (error) {
      alert(error)
      setError(true)
    }
  }
  session.status === "authenticated" && router?.push('/dashboard')
  session.loading === "loading" && <h1>Loading...</h1>

  if(session.status === "unauthenticated"){

    
    return (
       <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {error && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    <button onClick={(e)=>{
     e.preventDefault()
     signIn('google')}} 
     className={styles.btn}>Google</button>    
    </div>
    
    )
  }
}

export default Login





