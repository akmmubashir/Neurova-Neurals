import Image from 'next/image'
import React from 'react'


const AboutHome = () => {
    return (
        <div className='relative bg-white p-25 flex flex-col items-center justify-center gap-5'>
            <h2 className='text-[#2a2a2a] font-medium text-[46px]'>About <span className='text-[#EA4434]'>Neurova Neurals</span></h2>
            <p className='text-[#2a2a2a] text-[16px] w-2/3 text-center'>Neurova Neurals Private Limited is an innovation-driven EdTech organization with over 25
                years of dedicated experience in redefining how learning connects with modern
                technology. Established with the aim of seamlessly uniting education and emerging
                digital innovation, Neurova Neurals has played a pivotal role in enabling schools,
                teachers, and students to embrace change, cultivate creativity, and excel in an
                increasingly technology-driven world.
            </p>
            <div className='absolute top-10 right-1/6 w-25'>
                <Image src="/assets/common/vector1.png" alt="About Neurova Neurals" width={600} height={400} className='w-full h-auto' />
            </div>
            <div className='absolute bottom-2.5 left-1/6 w-25'>
                <Image src="/assets/common/vector2.png" alt="About Neurova Neurals" width={600} height={400} className='w-full h-auto' />
            </div>
        </div>
    )
}

export default AboutHome