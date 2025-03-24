import Image, { StaticImageData } from "next/image"

import TeamUser1 from '@/public/images/TeamUser1.png'
import { cn } from "@/lib/utils"

export default function TeamSection() {
    return (
        <section className="w-full max-w-[1440px] py-4 px-4 md:px-8 lg:px-16 xl:px-[140px] xl:pt-[72px] xl:pb-[77px] bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 xl:py-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-xl">
                        SHOULD I SHOW YOU WHAT <span className="text-[var(--brand-red)]">PRODUCTS</span> I&apos;VE BUILT?
                    </h2>
                    <div className="mt-4 md:mt-0 flex items-center">
                        <span className="font-handwriting text-lg md:text-xl text-[var(--brand-red)]">Of course, Why not?</span>
                        <BendArrowDown />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <TeamUserCard img={TeamUser1} name="Eddy Denison" role="CFO" content="Our CFO brings strategic vision and financial expertise, guiding our growth and ensuring long-term stability" />
                    <TeamUserCard img={TeamUser1} name="Mark Robben" role="CEO" content="Our CEO leads with vision and dedication, driving innovation and inspiring our team to achieve new heights" contentFirst={true} />
                    <TeamUserCard img={TeamUser1} name="John.J Dawson" role="CTO" content="Our CTO spearheads technology and innovation, ensuring our solutions are cutting-edge and future-ready" />
                </div>
            </div>
        </section>
    )
}

function TeamUserCard({ img, name, role, content, contentFirst }: { img: StaticImageData, name: string, role: string, content: string, contentFirst?: boolean }) {
    return (
        <div className={cn("flex gap-[22px]", contentFirst ? 'flex-col-reverse' : 'flex-col')}>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
                <Image
                    src={img}
                    alt="Eddy Denison"
                    width={400}
                    height={400}
                    className="mix-blend-multiply object-cover absolute bottom-0 z-1"
                />
                <div className="Team-Card-Shadow absolute bottom-0 w-full h-1/2 aspect-square rounded-b-3xl"></div>
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

function BendArrowDown() {
    return (
        <>
            <svg width="76" height="66" viewBox="0 0 76 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.00005 12.3312C18.6937 4.87863 32.7861 -0.418466 48.3794 4.42856C58.4266 7.55167 66.6398 15.7288 70.7126 25.1277C74.1199 32.991 70.7573 41.7135 68.677 50.0426C67.8902 53.1926 65.2966 56.7667 64.979 59.7181C64.8927 60.5208 72.0126 57.5673 73.3964 57.0731C73.8516 56.9106 68.0496 59.8718 66.6021 61.0983C58.7173 67.7792 64.1881 50.3937 59.9213 49.0952" stroke="#313131" strokeWidth="5" strokeLinecap="round" />
            </svg>
        </>
    )
}