import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroLanding = () => {
    return (
        <div className='relative' style={{
            backgroundImage: "url(/assets/common/landing.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
            <div className='h-screen max-lg:h-full grid grid-cols-12 gap-10 p-[100px_0px_0] max-xl:p-[100px_40px_0] max-lg:p-[120px_20px_60px] max-w-300 mx-auto'>
                {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" /> */}
                <div className='col-span-6 max-lg:col-span-full flex flex-col justify-center items-start z-10'>
                    <div>
                        <div className='flex flex-col gap-2.5'>
                            <h1 className='text-[46px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] font-semibold'>
                                Committed To Learn Excellence In Education
                            </h1>
                            <p className='text-[16px] max-lg:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae provident, cum, voluptate quos beatae maiores neque voluptatem enim ut vitae aspernatur! Maiores illum deserunt, id debitis laudantium voluptas adipisci.</p>
                        </div>

                        <div className='mt-7.5'>
                            <Link href={"/"} className='cursor-pointer bg-white/15 text-white hover:bg-white/25 px-6 py-3 rounded-md mt-6 font-medium shadow-2xl hover:scale-105 transition-all duration-300'>
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-6 max-lg:col-span-full flex flex-col justify-center items-start z-10'>
                    <Image
                        src="/assets/common/heroImage.png"
                        alt="Hero Landing Text"
                        width={600}
                        height={400}
                        className='w-full h-auto'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroLanding