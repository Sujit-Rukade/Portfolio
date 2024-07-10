import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7'>
          <h1 className="text-white text-4xl lg:text-6xl mb-4 font-extrabold">Hello, I am Sujit Rukade</h1>
          <p className='text-[#ADB7BE] text-lg lg:text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore ullam deserunt consequuntur sed exercitationem veritatis, dignissimos magnam numquam? Minus, quaerat.</p>
        </div>
        <div className='col-span-7 place-self-center mt-4 lg:mt-0'>
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
