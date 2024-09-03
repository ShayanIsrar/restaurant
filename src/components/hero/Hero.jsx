import React from 'react'
import hero from '../../assets/heroImg.png'
import PrimaryButton from '../shared/PrimaryButton'
import bgimg from '../../assets/bgImg.jpeg'


const Hero = () => {
    const BgStyle = {
        backgroundImage: `URL(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
    }
  return (
    <>
    {/* relative */}
      <div style={BgStyle} className='z-[-1]'>  
        <div className="container py-16 sm:py-0">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]'>
                {/* Text-content section */}
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 data-aos='fade-up' className='text-5xl'>Fresh & Healthy Meal Plan <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Miami</h1>
                    <p data-aos='fade-right' data-aos-delay='300' className='lg:pr-64'>Delicious Meals Delivered to Your Door From $122.99 per week</p>
                    {/* Button Section */}
                    <div data-aos='fade-up' data-aos-delay='500'>
                        <PrimaryButton/>
                    </div>
                </div>
                {/* Image section */}
                <div data-aos='zoom-in' data-aos-delay='500' className='relative z-30 order-1 sm:order-2'>
                    <img src={hero} alt="" className='w-full sm:scale-125 sm:translate-y-16'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
