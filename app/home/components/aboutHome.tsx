import Image from 'next/image'
import React from 'react'


const AboutHome = () => {
    return (
        <div className='relative max-w-300 mx-auto bg-white p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px_60px] flex flex-col items-center justify-center gap-5 max-lg:gap-[10px_0]'>
            <h2 className='text-[#2a2a2a] font-medium text-[46px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px]'>About <span className='text-[#EA4434]'>Neurova Neurals</span></h2>
            <p className='text-[#2a2a2a] w-full text-center text-[16px] max-lg:text-[14px]'>Neurova Neurals Private Limited is an innovation-driven EdTech organization with over 25
                years of dedicated experience in redefining how learning connects with modern
                technology. Established with the aim of seamlessly uniting education and emerging
                digital innovation, Neurova Neurals has played a pivotal role in enabling schools,
                teachers, and students to embrace change, cultivate creativity, and excel in an
                increasingly technology-driven world.
            </p>
            <div className='absolute top-10 max-md:top-8 right-1/8  max-xl:right-4 max-md:-right-8 w-25'>
                <Image src="/assets/common/vector1.png" alt="About Neurova Neurals" width={600} height={400} className='w-full h-auto' />
            </div>
            <div className='absolute -bottom-2.5 max-xl:-bottom-12 left-1/8 w-25'>
                <Image src="/assets/common/vector2.png" alt="About Neurova Neurals" width={600} height={400} className='w-full h-auto' />
            </div>
        </div>
    )
}

export default AboutHome