export default function Contact() {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Push the button all you want, but this form is on vacation.')
  }
  
  return (
    <div className="fade-in p-2 pb-10 md:px-24 lg:px-64 lg:mx-12 xl:px-72 xl:mx-12">
      <div className="md:text-justify mb-8 text-lg md:text-3xl md:mb-10">The best way to reach me is via email at <a className="underline" href="mailto:hakimihamzan10@gmail.com">hakimihamzan10@gmail.com</a></div>
      <div className="md:text-justify mb-20 text-lg md:text-3xl">The second best way to reach me is through <a className="underline" href="https://www.linkedin.com/in/hakimihamzan/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      <div className="p-4 md:p-8 lg:p-10 border rounded-lg shadow-lg bg-white">
        <form id="contact" onSubmit={submitHandler}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
            <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Contact Me</button>
        </form>
      </div>
    </div>
  )
}
