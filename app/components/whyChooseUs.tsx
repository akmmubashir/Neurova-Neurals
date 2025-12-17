import Image from 'next/image'
import React from 'react'
import { whyChooseUsFeatures } from '../utils/data'

const WhyChooseUs = () => {
    return (
        <div className='max-w-300 mx-auto p-[0_0_80px] max-xl:p-[0_60px_40px] max-lg:p-[0_20px_40px] grid grid-cols-12 items-center gap-10 max-lg:gap-[30px_0]'>
            <div className='col-span-6 max-lg:col-span-full'>
                <h2 className='mb-2 text-[#2a2a2a] font-semibold leading-[1.2] text-[46px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px]'>Where Education Meets <span className="text-[#EA4434]">
                    Innovation
                </span>
                </h2>
                <p className='text-[#3a3a3a] text-[16px] max-lg:text-[14px]'>Explore our diverse range of courses designed to empower learners of all ages. From foundational subjects to advanced topics, our curriculum is crafted to foster knowledge, creativity, and critical thinking. Join us on a journey of discovery and skill-building that prepares you for the future.
                </p>
            </div>
            <div className='col-span-6 max-lg:col-span-full grid grid-cols-12 gap-5 max-lg:gap-4'>
                {whyChooseUsFeatures.map(feature =>
                    <div key={feature.id} className='flex flex-col justify-center gap-2 col-span-6 p-5 max-lg:p-3.75 bg-white shadow-xl rounded-2xl'>
                        <div className='w-18 max-lg:w-12'>
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={600}
                                height={400}
                                className='w-full h-auto'
                            />
                        </div>
                        <h6 className='text-[#6a6a6a] font-medium text-[16px] max-lg:text-[14px]'>
                            <span className="text-[20px] max-lg:text-[18px] align-start text-[#2a2a2a]">{feature.title.charAt(0)}</span><span>
                                {feature.title.slice(1)}
                            </span>
                        </h6>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WhyChooseUs