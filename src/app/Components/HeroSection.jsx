"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span>Hello, I&apos;m{" "}</span>
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sujit Rukade',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'ML Enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block'}}
      repeat={Infinity}
      className='text-violet-600'
    />
          </h1>
          
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ullam deserunt consequuntur sed exercitationem veritatis, dignissimos magnam numquam? Minus, quaerat.</p>
          <div>



            <button
              className="blueShadow mx-4 lg:mr-4 lg:ml-0 text-base sm:text-lg md:text-xl lucida relative overflow-hidden px-6 py-3 group rounded-full bg-gradient-to-br from-orange-300 via-violet-500 to-blue-800 hover:bg-slate-400 text-white"
            >
              <div
                className="absolute top-0 right-full w-full h-full bg-red-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
              />
              <a href="https://www.linkedin.com/in/aditya-more-9a095422a/" target="_blank">
                <h4 className="relative z-9">Get in touch &rarr;</h4>
              </a>
            </button>

            <button className='px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white border border-white mt-3 sm:w-fit'>Download CV</button>
          </div>
        </div>
        <div className='col-span-4 place-self-center mt-4 lg:mt-0'>
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
