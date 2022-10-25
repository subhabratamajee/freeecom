import Image from 'next/image'
import React from 'react'
import Category from './Category'
function Banner() {
  return (
    <div className='container w-full  top-0 -z-10 '>
        <div className='banner px-4 w-screen'>
          <div className='box absolute'>
            <h2 className='largeText1 font-bold sm:text-3xl text-xl text-orange-400 pl-6 sm:pl-12 pt-2 md:pt-8 lg:pt-14 lg:pl-36'> New Arrival</h2>
            <h1 className='largeText2 font-extrabold font-serif sm:text-5xl text-2xl pt-0 pl-4 sm:pl-8 sm:pt-2 lg:text-6xl lg:pl-20 text-orange-700 uppercase'> New Arrival</h1>
            <p className='w-72 font-mono pl-4 sm:pl-8 lg:pl-20 sm:text-sm text-xs '>lorem50hg ghjgjjjjj hhhhhhhhhhh uuuuuuuuu  </p>
            <div className='mt-6'>
            <button className=' sm:text-2xl bg-orange-700 bg-opacity-60 bg-clip-padding text-white w-36 rounded-r-full sm:p-2 -mt-4 md:mt-4 absolute ' style={{backdropFilter:'blur{20px}'}}><b>45% </b>off</button></div>
            <button className='bg-orange-500 bg-opacity-50 text-base sm:text-2xl font-bold text-white px-2 absolute sm:p-2 rounded-xl ml-40 mt-2 md:mt-10 md:ml-56 md:text-3xl hover:bg-orange-200 hover:text-orange-700'>Shop Now</button>
          </div>
          <div className='img'>
            <img className='rounded-xl max-h-96 w-full' src={'/banner-1.jpg'} layout='fill' />
          </div>
        </div>
    </div>
  )
}

export default Banner