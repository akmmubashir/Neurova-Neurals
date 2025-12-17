import { courses } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CoursesHome = () => {
    return (
        <div className='max-w-300 mx-auto mb-20'>
            <div
                className='p-[60px_100px_160px] flex flex-col items-center justify-center gap-10 mt-10 rounded-3xl'
                style={{
                    backgroundImage: 'url(/assets/common/courseBg.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex flex-col items-center gap-5'>
                    <h2 className='text-white font-semibold text-[46px] text-center'>Explore Our Courses</h2>
                    <p className='text-white text-[16px] text-center w-3/4'>Explore our diverse range of courses designed to empower learners of all ages. From foundational subjects to advanced topics, our curriculum is crafted to foster knowledge, creativity, and critical thinking. Join us on a journey of discovery and skill-building that prepares you for the future.
                    </p>
                </div>
            </div>
            <div className='-mt-25 grid grid-cols-12 gap-5 px-10'>
                {courses.map((item) => (
                    <div key={item.id} className="col-span-4 bg-white shadow-2xl rounded-2xl">
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
                                    <span className='text-[#2a2a2a]'> {item.ageGroup}</span>
                                </p>
                            </div>
                            <p className='text-[#3a3a3a] text-[16px]'>
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