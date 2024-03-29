import Image from "next/image"

export default function Contact() {
  return (
    <div className="fade-in text-justify md:flex md:justify-center md:items-center md:flex-col">
      <div className="mt-10 mb-24 lg:w-1/3 lg:p-10 lg:shadow-lg lg:border lg:rounded-lg">
        <form id="contact">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Contact Me</button>
        </form>
      </div>
      <div className="mb-7 text-2xl lg:w-1/3">The best way to reach me is via email at <a className="underline" href="mailto:hakimihamzan10@gmail.com">hakimihamzan10@gmail.com</a></div>
      <div className="text-2xl lg:w-1/3">The second best way to reach me is through <a className="underline" href="https://www.linkedin.com/in/hakimihamzan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
    </div>
  )
}
