import Link from 'next/link'
import { Inter } from "next/font/google"

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/portfolio', label: 'Portfolio' },
];

const inter = Inter({ subsets: ["latin"] })

function Navbar() {
  return (
    <nav className={`${inter.className} border fixed top-0 right-0 w-full bg-white`}>
      <ul className='px-10 py-5 flex justify-between'>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
