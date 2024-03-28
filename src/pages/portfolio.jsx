import Image from "next/image"
import data from '../data'

export default function Portfolio() {
    const projectNames = Object.keys(data);
    return (
        <div className="flex flex-wrap justify-evenly gap-7 m-5 md:mt-12 md:m-2 lg:mx-8 xl:mx-24 2xl:mx-36">
            {projectNames.map((name, index) =>
            (
                <div className="max-w-sm fade-in bg-white border border-gray-200 rounded-lg shadow flex flex-col" key={index}>
                    <Image
                        className="rounded-t-lg"
                        style={{
                            height: '270px',
                            objectFit: 'cover',
                            width: 'min-content'
                        }}
                        src={data[name].snap}
                        width={900}
                        height={400}
                        alt={data[name].title}
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data[name].title}</h5>
                        <p className="mb-3 font-normal text-gray-700">{data[name].heading.substring(0, 70)}...</p>

                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">More Info</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
