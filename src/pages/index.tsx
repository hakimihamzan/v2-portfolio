import Image from "next/image"

const experience = [
  {
    company: 'Skribble Lab',
    role: 'Fullstack Developer',
    period: 'May 2022 - Present',
    tech: 'PHP, Laravel, MySQL',
  },
  {
    company: 'Senfficient',
    role: 'IOTNodeJs Developer',
    period: 'Oct 2021 - Jan 2022',
    tech: 'NodeJs, Angular',
  },
  {
    company: 'General Assembly',
    role: 'Graduate Trainee',
    period: 'July 2021 - Sept 2021',
    tech: 'HTML, CSS, Javascript',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row m-5 md:mt-16 gap-16 lg:gap-36 lg:mx-20 xl:mx-36">
      <div className="md:order-last md:w-3/4">
        <h1 className="text-2xl md:text-3xl mb-10">My name is Muhamad Hakimi Hamzan.</h1>
        <div className="text-justify">
          <p className="md:text-lg mb-10">
            You can call me Kimi (pronounced Key Me).
            I'm a self taught software developer with a focus on backend development and APIs.
            I landed my first job in 2021 after about a year of learning programming.
            Over the years, I've dabbled in various tech stacks, including Python, PostgreSQL, PHP, Node.js, Git, React, and Tailwind CSS.
            My most experience lies in Laravel with MySQL.
          </p>
          <p className="md:text-lg mb-16">In my free time, I enjoy building new applications or learning a new tech stack.</p>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Experience
                </th>
                <th scope="col" className="px-6 py-3">
                  Period
                </th>
                <th scope="col" className="px-6 py-3">
                  Techstack
                </th>
              </tr>
            </thead>
            <tbody>
              {experience.map((ex) => (
                <tr className="bg-white border-b" key={ex.company}>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {ex.company} <span className="ml-3 border px-2 py-1 rounded-lg bg-slate-100">{ex.role}</span>
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {ex.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {ex.tech}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="order-first md:order-last md:w-1/4 flex items-center justify-center">
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
