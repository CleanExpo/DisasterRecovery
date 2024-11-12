import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Disaster Recovery QLD
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/locations" className="hover:text-blue-600">Locations</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
          <button className="md:hidden">
            <MenuIcon />
          </button>
        </nav>
      </div>
    </header>
  )
}
