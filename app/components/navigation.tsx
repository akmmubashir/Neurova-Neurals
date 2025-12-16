import React from 'react'
import Link from 'next/link'

type Props = {
    type?: string
}

const Navigation = (props: Props) => {
    const navigationData = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Courses', href: '/courses' },
        { name: 'Educational Insights', href: '/educational-insights' },
        { name: 'Curriculum Alignment', href: '/curriculum-alignment' },
        { name: 'Contact Us', href: '/contact' },
    ];
    return (
        <div className='flex gap-5'>{navigationData.map((item) => (
            <Link key={item.name} href={item.href} className={`text-[16px] ${props.type === "transparent" ? "text-white hover:text-[#EA4434]" : "text-[#160A0A] hover:text-[#EA4434]"} ${props.type === "scroll" ? "font-medium" : ""}`}>{item.name}</Link>
        ))}</div>
    )
}

export default Navigation