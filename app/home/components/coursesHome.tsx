import { courses } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CoursesHome = () => {
    return (
        <div className='max-w-300 mx-auto m-[0_0_80px] max-xl:m-[0_40px_60px] max-lg:m-[0_20px_40px]'>
            <div
                className='p-[60px_100px_160px] max-xl:p-[60px_40px_140px] max-lg:p-[50px_20px_120px] flex flex-col items-center justify-center gap-10 mt-10 rounded-3xl'
                style={{
                    backgroundImage: 'url(/assets/common/courseBg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex flex-col items-center gap-5'>
                    <h2 className='text-white font-semibold text-[46px] max-2xl:text-[40px] max-xl:text-[36px] max-lg:text-[32px] max-md:text-[28px] text-center'>Explore Our Courses</h2>
                    <p className='text-white text-[16px] max-lg:text-[14px] text-center'>Explore our diverse range of courses designed to empower learners of all ages. From foundational subjects to advanced topics, our curriculum is crafted to foster knowledge, creativity, and critical thinking. Join us on a journey of discovery and skill-building that prepares you for the future.
                    </p>
                </div>
            </div>
            <div className='-mt-25 grid grid-cols-12 gap-5 max-lg:gap-[40px_0] px-25 max-xl:px-10 max-lg:px-5'>
                {courses.map((item) => (
                    <div key={item.id} className="col-span-4 max-lg:col-span-full bg-white shadow-2xl rounded-2xl">
                        <div>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className='w-full h-auto rounded-t-2xl'
                            />
                        </div>
                        <div className='flex flex-col gap-2 p-5'>
                            <h6 className='text-[20px] font-semibold text-[#2a2a2a]'>{item.title}</h6>
                            <div>
                                <p className='text-[#EA4434] font-medium text-[16px]'>
                                    Age: 
                                    <span className='text-[#2a2a2a] text-[16px] max-lg:text-[14px]'> {item.ageGroup}</span>
                                </p>
                            </div>
                            <p className='text-[#3a3a3a] text-[16px] max-lg:text-[14px]'>
                                {item.content}
                            </p>
                            <div className='flex'>
                            <Link href="#" className='text-[#2a2a2a] hover:text-[#EA4434] font-medium underline underline-offset-4'> 
                                    Learn More 
                            </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-10'>
                <button className='cursor-pointer uppercase text-[#2a2a2a] hover:text-[#EA4434] font-medium underline underline-offset-4 hover:scale-105 transition-all duration-300'>
                    View All Courses
                </button>
            </div>
        </div >
    )
}

export default CoursesHome