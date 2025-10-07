'use client'
import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="w-full bg-transparent sticky top-0 z-40 backdrop-blur py-3">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">Nishchal Chotai</Link>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#experience" className="text-sm text-gray-300 hover:text-green-300">Experience</a>
          <a href="#education" className="text-sm text-gray-300 hover:text-green-300">Education</a>
          <a href="#skills" className="text-sm text-gray-300 hover:text-green-300">Skills</a>
          <a href="#projects" className="text-sm text-gray-300 hover:text-green-300">Projects</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-green-300">Contact</a>
        </nav>
      </div>
    </header>
)
}
