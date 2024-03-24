import Image from "next/image"
import { PythonOriginalWordmark } from 'devicons-react';

export default function About() {
  return (
    <div className="flex mt-20">
      <div className="w-3/4 text-justify">
        <h1 className="text-4xl mb-7 w-2/3">My name is Muhamad Hakimi Hamzan.</h1>
        <p className="text-xl mb-7 w-2/3">
          You can call me Kimi (pronounced Key Me). 
          I'm a self taught full-stack developer with a focus on backend development and APIs.
          I landed my first job in 2021 after about a year of learning programming. 
          Over the years, I've dabbled in various tech stacks, including Python, PostgreSQL, PHP, Node.js, Git, React, and Tailwind CSS. 
          My most experience lies in Laravel with MySQL.
        </p>
        <p className="text-xl w-2/3">In my free time, I enjoy building new applications or learning a new tech stack.</p>
      </div>
      <div className="w-1/4">
        <Image
          className="p-4 rounded-full"
          src="/portrait.webp"
          width={300}
          height={300}
          alt="My Picture"
        />
      </div>
    </div >
  )
}
