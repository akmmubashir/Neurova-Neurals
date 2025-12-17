import React from 'react'
import HeroLanding from './components/heroLanding'
import Header from '../components/header'
import AboutHome from './components/aboutHome'
import CoursesHome from './components/coursesHome'
import Footer from '../components/footer'
import WhyChooseUs from '../components/whyChooseUs'

// type Props = {}

// const HomePage = (props: Props) => {
const HomePage = () => {
    return (
        <div className='bg-white min-h-screen overflow-hidden'>
            <Header />
            <HeroLanding />
            <AboutHome />
            <CoursesHome />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}

export default HomePage