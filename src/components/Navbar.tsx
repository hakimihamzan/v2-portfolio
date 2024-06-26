import Link from "next/link"
import { Inter } from "next/font/google"
import { useRouter } from "next/router"
import { IoHome } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RiGitRepositoryFill } from "react-icons/ri";

interface NavLink {
    href: string
    label: string
    icon: any
}

const navLinks: NavLink[] = [
    { href: "/", label: "Home", icon: <IoHome /> },
    { href: "/portfolio", label: "Portfolio", icon: <RiGitRepositoryFill /> },
    { href: "/contact", label: "Contact", icon: <RiContactsBook2Fill /> },
]

const inter = Inter({ subsets: ["latin"] })

function Navbar() {
    const router = useRouter()
    const currentHref = router.asPath

    return (
        <nav className={`${inter.className} shadow-md fixed top-0 right-0 w-full bg-white z-50`}>
            <ul className="md:px-10 md:py-5 flex justify-center items-center gap-10 p-4">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <div className={`${currentHref === link.href ? "font-extrabold" : ""}`}>
                            <Link href={link.href}>
                                <div className="hidden md:block">
                                    {link.label}
                                </div>
                                <span className={`${currentHref === link.href ? "text-slate-950" : ""} md:hidden text-2xl text-slate-500`}>{link.icon}</span>
                            </Link>
                        </div>
                    </li>
                ))}
                <div className="hidden md:flex md:gap-1 md:items-center md:border-l-2 md:px-1 md:border-r-2">
                    <a href="https://github.com/hakimihamzan" target="_blank" rel="noopener noreferrer">
                        <FaGithub size="23px" />
                    </a>
                    <a href="https://www.linkedin.com/in/hakimihamzan/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="27px" color="#0A66C2" />
                    </a>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
