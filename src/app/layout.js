import NavBar from '@/components/nav/NavBar'
import './globals.css'
import { Outfit } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../../context/ThemeContext'
import AuthProvider from '@/components/authProvider/authProvider'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={outfit.className}> 
    <div className='container'>
    <ThemeProvider>
    <AuthProvider>
    <NavBar/>
      {children}
    <Footer/> 
    </AuthProvider>
    </ThemeProvider>
    </div>
      </body>
    </html>
  )
}
