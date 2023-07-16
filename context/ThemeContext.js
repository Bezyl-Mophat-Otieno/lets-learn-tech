'use client'

const { createContext, useState } = require("react")

export const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const [mode , setMode] = useState('dark')

    const toggleMode = ()=>{
        setMode((prev)=> prev === 'light' ? 'dark' : 'light')
    }
  

return <ThemeContext.Provider value={{mode , toggleMode}}>
       <div className={`theme ${mode}`}>
       {children}
       </div>
       </ThemeContext.Provider>
}