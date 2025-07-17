import React from 'react'
import { useDarkMode } from '../context/ThemeContext.jsx'
import { Moon ,Sun} from 'lucide-react';


const DarkModeToggler = () => {
    const {darkMode,setDarkMode}=useDarkMode()
    return (
        <button onClick={()=>setDarkMode(!darkMode)} className="dark:text-white cursor-pointer">
            {darkMode ? <Sun /> : <Moon className="text-black" />}
        </button>
    )
}
export default DarkModeToggler