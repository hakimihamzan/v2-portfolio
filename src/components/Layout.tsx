import Navbar from './Navbar'
import { Inter } from "next/font/google"
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] })

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Hakimi Hamzan</title>
        <meta name="description" content="A software developer with keen eyes for great design. From front end development to back end development, I'll do them all." />
      </Head>
      <Navbar />
      <main className={`${inter.className} mt-20 p-4 md:p-10`}>{children}</main>
    </>
  )
}

export default Layout
