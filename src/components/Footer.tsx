import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sky-900 dark:bg-black text-yellow-200 dark:text-yellow-400 py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Cucinarte</h3>
          <p>© 2025 Cucinarte. Todos los derechos reservados.</p>
        </div>

        <div className="flex space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61576228285586" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={24} className="hover:text-yellow-300 transition" />
          </a>
          <a href="https://instagram.com/cucinarteagency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={24} className="hover:text-yellow-300 transition" />
          </a>
          <a href="https://www.linkedin.com/company/107596683" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Linkedin size={24} className="hover:text-yellow-300 transition" />
          </a>
        </div>
      </div>
    </footer>
  )
}
