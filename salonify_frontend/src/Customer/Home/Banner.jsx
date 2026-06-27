import React from 'react'

const Banner = () => {
  return (
    <div className='w-full relative h-[80vh]'>
        <video className='w-full h-full object-cover'
        muted
        autoPlay
        autoFocus
         src='https://booksy-public.s3.amazonaws.com/horizontal_.webm'
        ></video>
      
    </div>
  )
}

export default Banner
