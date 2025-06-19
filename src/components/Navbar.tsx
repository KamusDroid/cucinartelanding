"use client"; 

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const renderThemeIcon = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <Sun
          className="cursor-pointer text-yellow-400"
          onClick={() => setTheme('light')}
          size={24}
        />
      )
    } else {
      return (
        <Moon
          className="cursor-pointer text-gray-700"
          onClick={() => setTheme('dark')}
          size={24}
        />
      )
    }
  }

  return (
    <header className="sticky top-0 z-10 w-full  bg-teal-950 shadow-md dark:bg-gray-900  backdrop-blur">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <span className="text-xl font-bold text-sky-200 dark:text-yellow-400">Cucinarte</span>
        </Link>
        <ul
          className={`flex-col md:flex-row md:flex gap-6 text-gray-400 dark:text-amber-300 md:static absolute top-16 justify-end w-full px-4 py-4 transition-all duration-300 ${
            isOpen ? 'flex' : 'hidden'}`}
        >
          <li>
            <Link href="#hero" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={() => setIsOpen(false)}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#blog" onClick={() => setIsOpen(false)}>
              Prensa
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/5491124099305" onClick={() => setIsOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button aria-label="Toggle Dark Mode" className="hidden md:block">
            {renderThemeIcon()}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
