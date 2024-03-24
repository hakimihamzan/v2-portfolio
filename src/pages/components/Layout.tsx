import Navbar from './Navbar'
import { Inter } from "next/font/google"

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] })

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={`${inter.className} mt-20 p-10`}>{children}</main>
    </>
  )
}

export default Layout
