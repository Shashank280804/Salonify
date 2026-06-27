import React from 'react'

const SalonDetail = () => {
    return (
        <div className='space-y-5 mb-20'>
            <section className='grid grid-col-2 gap-3'>
                <div className='col-span-2'>
                    <img className='w-full rounded-md h-60 object-cover' src="" alt="" />
                </div>
                <div className='col-span-1'>
                    <img className='w-full rounded-md h-60 object-cover' src="" alt="" />
                </div>
                <div className='col-span-1'>
                    <img className='w-full rounded-md h-60 object-cover' src="" alt="" />
                </div>
            </section>
            <section className='space-y-3'>
                <h1 className='font-bold text-3xl'>HairXpression Salon</h1>
                <p>Kalyani Nagar, Pune.</p>
                <p>
                    <strong>
                        Timing : 10 am to 8 PM
                    </strong>
                </p>
            </section>

        </div>
    )
}

export default SalonDetail
