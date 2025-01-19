"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration: 1}} className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span>Hello, I&apos;m{" "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Sujit Rukade',
                1000, 
                'Web Developer',
                1000,
                'ML Enthusiast',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              className='text-violet-600'
            />
          </h1>

          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>I am a Web Developer skilled in React.js and modern web technologies, with a passion for Machine Learning applications that solve real-world challenges. I specialize in creating dynamic user interfaces and innovative solutions.</p>
          <div>



            <button
              className="blueShadow mx-4 lg:mr-4 lg:ml-0 text-base sm:text-lg md:text-xl lucida relative overflow-hidden px-6 py-3 group rounded-full bg-gradient-to-br from-orange-300 via-violet-500 to-blue-800 hover:bg-slate-400 text-white"
            >
              <div
                className="absolute top-0 right-full w-full h-full bg-red-400 opacity-20 group-hover:translate-x-full z-0 duration-100"
              />
              <a href="https://www.linkedin.com/in/sujit-rukade-509308258/" target="_blank">
                <h4 className="relative z-9">Get in touch &rarr;</h4>
              </a>
            </button>

            <a
              href='/Resume/Sujit_Rukade_Resume.pdf' 
              download='Sujit_Rukade_Resume.pdf' 
            >
              <button className='px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white border border-white mt-3 sm:w-fit'>
                Download CV
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration: 1}} className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
