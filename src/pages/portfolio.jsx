import Image from "next/image"
import data from '../data'
import { FaMobile, FaTablet, FaLaptop } from 'react-icons/fa'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

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
                        }}
                        src={data[name].snap}
                        width={900}
                        height={400}
                        alt={data[name].title}
                    />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data[name].title}</h5>
                        <p className="mb-5 font-normal text-gray-700">{data[name].heading.substring(0, 70)}...</p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>More Info</Button>
                            </DialogTrigger>
                            <DialogContent className="h-full w-full p-2 flex flex-col md:flex-row md:w-5/6 md:h-5/6 md:p-4">
                                <div className="w-full h-full relative shadow-lg md:w-2/3">
                                    <Image
                                        src={data[name].snap}
                                        alt={data[name].title}
                                        className="w-full h-full object-cover rounded-lg"
                                        width={900}
                                        height={400}
                                    />
                                    <div className="absolute bottom-2 right-2 flex gap-1">
                                        <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold shadow py-1 px-3 md:py-2 md:px-4 rounded" href={data[name].codeUrl} target="_blank" rel="noopener noreferrer">
                                            Code
                                        </a>
                                        <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold shadow py-1 px-3 md:py-2 md:px-4 rounded" href={data[name].url} target="_blank" rel="noopener noreferrer">
                                            Live
                                        </a>
                                    </div>
                                </div>
                                <div className="text-justify w-full h-full p-4 overflow-auto md:w-1/3 md:p-0 md:px-8">
                                    <h1 className="text-2xl font-semibold">{data[name].title}</h1>
                                    <p className="text-gray-700 mb-7">DATE : {data[name].date}</p>
                                    <p className="text-lg text-slate-800 mb-7">{data[name].heading}</p>
                                    <div className="mb-7">
                                        <ul className="list-disc ml-4 text-slate-800">
                                            {data[name].notePoint.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-7">
                                        <p className="font-semibold mb-2">TECH STACK</p>
                                        <div className="flex items-center">
                                            <ul>
                                                {data[name].techStack.map((tech, index) => (
                                                    <span key={index} dangerouslySetInnerHTML={{ __html: tech }} ></span>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-7">
                                        <p className="font-semibold mb-2">SUPPORTED PLATFORM</p>
                                        <div className="flex items-center">
                                            {data[name].responsive ? (
                                                <>
                                                    <FaLaptop title='Laptop' style={{ fontSize: '2.5rem', marginRight: '0.8rem' }} />
                                                    <FaTablet title='Tablet' style={{ fontSize: '2rem', marginRight: '0.8rem' }} />
                                                    <FaMobile title='Mobile' style={{ fontSize: '2rem', marginRight: '0.8rem' }} />
                                                </>
                                            ) : (
                                                <FaLaptop title='Laptop' style={{ fontSize: '2.5rem', marginRight: '0.8rem' }} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-7">
                                        <p className="font-semibold">DESIGN INSPIRATION</p>
                                        {data[name].designInspired.length > 0 ?
                                            <ul className="list-disc ml-4 text-slate-800">
                                                {data[name].designInspired.map((point, index) => (
                                                    <li key={index}><a href={point.url} target="_blank" rel="noopener noreferrer">{point.title} by {point.creator}</a></li>
                                                ))}
                                            </ul>
                                            :
                                            <>Original</>
                                        }
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ))}
        </div>
    )
}