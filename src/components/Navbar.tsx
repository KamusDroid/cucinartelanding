"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderThemeIcon = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Sun
          className="cursor-pointer text-yellow-400"
          onClick={() => setTheme("light")}
          size={24}
        />
      );
    } else {
      return (
        <Moon
          className="cursor-pointer text-gray-700"
          onClick={() => setTheme("dark")}
          size={24}
        />
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-teal-950 shadow-md dark:bg-gray-900 backdrop-blur">
      <nav className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3 relative">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold text-sky-200 dark:text-yellow-400">
            Cucinarte
          </span>
        </Link>

        {/* Menú Desktop + Mobile */}
        <ul
          className={`flex-col md:flex-row md:flex gap-6 text-gray-400 dark:text-amber-300
            md:static absolute top-16 right-0 w-full md:w-auto bg-teal-950 dark:bg-gray-900 
            px-6 py-4 transition-all duration-300 z-40 justify-end ${
              isOpen ? "flex" : "hidden"
            }`}
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
            <Link
              href="https://wa.me/5491124099305"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botones (tema y menú hamburguesa) */}
        <div className="flex items-center gap-4 z-50">
          <button aria-label="Toggle Dark Mode">
            {renderThemeIcon()}
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
