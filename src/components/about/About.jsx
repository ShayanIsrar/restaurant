import React from 'react'
import bgColor from '../../assets/png/bgPic.png'
import vector from '../../assets/png/vector.png'
import { FaUser } from 'react-icons/fa'

const About = ({handlePopUp}) => {
    const BgStyle = {
        backgroundImage: `URL(${bgColor})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        position: "relative"
    }
  return (
    <>
        <div style={BgStyle} className='py-14'>
            <div className="container min-h-[500px] relative z-10">
                <h1 data-aos='fade' className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>About Us</h1>
                
                {/* card section */}
                <div data-aos='fade' data-aos-delay='300' className='bg-white/60 p-10 my-10 rounded-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ad quaerat, nisi alias veniam veritatis illo aliquam quas! Beatae vel asperiores ipsum ducimus dolore quo animi, saepe quidem nobis quos alias corporis facilis. Perspiciatis et voluptatum molestiae ipsa, excepturi, odit ducimus vel adipisci, ex saepe unde. Quam expedita necessitatibus debitis dolor harum impedit doloremque officia distinctio magni beatae alias asperiores rerum nulla nobis a, labore esse quae quo, laudantium libero! Vero corporis laborum omnis ratione dignissimos, at fugiat itaque laudantium, ex veniam suscipit cum esse aliquam quaerat qui quasi possimus saepe mollitia magni ut tempore? Tempora temporibus magnam exercitationem nisi!
                    <div className='pt-10 flex justify-center'>
                    <button onClick={handlePopUp} className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                    <FaUser/>
                    My Account
                    </button>
                    </div>
                </div>
            </div>

            {/* wave vector
            <div className='absolute top-0 right-0 w-full'>
                <img src={vector} alt="" />
            </div> */}

        </div>
    </>
  )
}

export default About
