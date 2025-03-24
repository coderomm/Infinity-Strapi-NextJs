import Image, { StaticImageData } from "next/image"

import TeamUser1 from '@/public/images/TeamUser1.png'

export default function TeamSection() {
    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl">
                        SHOULD I SHOW YOU WHAT <span className="text-red-500">PRODUCTS</span> I`&apos;`VE BUILT?
                    </h2>
                    <div className="mt-4 md:mt-0 flex items-center">
                        <span className="font-handwriting text-lg md:text-xl text-red-500">Of course, Why not?</span>
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2"
                        >
                            <path d="M10 15C15 8 25 5 35 15" stroke="#333" strokeWidth="2" strokeLinecap="round" />
                            <path
                                d="M35 15L25 5M35 15L25 25"
                                stroke="#333"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TeamUserCard img={TeamUser1} name="Eddy Denison" role="CFO" content="Our CFO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability" />
                    <TeamUserCard img={TeamUser1} name="Mark Robben" role="CEO" content="Our CEO leads with vision and dedication, driving innovation and inspiring our team to achieve new heights" />
                    <TeamUserCard img={TeamUser1} name="John.J Dawson" role="CTO" content="Our CTO spearheads technology and innovation, ensuring our solutions are cutting-edge and future-ready" />
                </div>
            </div>
        </section>
    )
}

function TeamUserCard({ img, name, role, content }: { img: StaticImageData, name: string, role: string, content: string }) {
    return (
        <div className="flex flex-col order-2 md:order-1 lg:order-1 gap-[22px]">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                    src={img}
                    alt="Eddy Denison"
                    width={400}
                    height={400}
                    className="mix-blend-multiply object-cover absolute bottom-0 z-1"
                />
                <div className="Team-Card-Shadow absolute bottom-0 w-full h-1/2 aspect-square rounded-3xl "></div>
            </div>
            <div className="flex flex-col items-start gap-4">
                <div className="flex flex-col items-start gap-1.5">
                    <h3 className="font-medium text-[#313131] text-[18px]">{name}</h3>
                    <span className="font-normal text-[#313131] text-base">{role}</span>
                </div>
                <p className="font-normal text-[#313131] text-base">{content}</p>
            </div>
        </div>
    )
}