'use client'
import { useState, useEffect } from 'react'

export default function ThemeToggle(){
  const [mode, setMode] = useState<'dark'|'light'>('dark')
  useEffect(()=>{
    document.documentElement.classList.remove('light','dark')
    document.documentElement.classList.add(mode)
  },[mode])
  return (
    <div className="flex items-center gap-2">
      <button onClick={()=>setMode(mode==='dark'?'light':'dark')} className="px-3 py-1 rounded bg-gray-800 border border-gray-700">
        Toggle Theme
      </button>
    </div>
  )
}