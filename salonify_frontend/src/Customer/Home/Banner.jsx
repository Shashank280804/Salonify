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
            <div className='textPart absolute flex flex-col items-center justify-center inset-0 text-white z-20 space-y-3 px-5'>
                <h1 className='text-5xl font-bold'>Be your self</h1>
                <p className='text-slate-400 text-2xl text-center font-semibold rounded-md py-4 w-[15rem] md:w-[33rem] outline-none text-black px-5'>Discover and Book Beuaty, wellness near you</p>
                <input
                    className="bg-white text-black px-5 py-3 rounded-md w-[300px] md:w-[500px] outline-none"
                    type="text"
                    placeholder="Search salon service"
                />
            </div>

        </div>
    )
}

export default Banner;
