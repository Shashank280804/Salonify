import React from 'react'
import ProfileFieldCard from './ProfileFieldCard'
import { Divider } from '@mui/material'

const Profile = () => {
    return (
        <div className='lg:px-20 lg:bottom-20 space-y-20'>
            <div className='w-full lg:w-[70%]'>
                <h1 className='text-5xl font-bold pb-5'>HairX Salon</h1>
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
                <div className='mt-10 lg:w-[70%]'>
                    <div className='flex items-center pb-3 justify-between'>
                        <h1 className='text-2xl font-bold text-gray-600'>Salon Details</h1>

                    </div>
                    <div>
                        <ProfileFieldCard keys={"salon name"} value={"HairX"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"salon address"} value={"Pune"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"Open Time"} value={"11:00 am"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"Close Time"} value={"10:00 pm"}/>
                        
                    </div>

                </div>

                 <div className='mt-10 lg:w-[70%]'>
                    <div className='flex items-center pb-3 justify-between'>
                        <h1 className='text-2xl font-bold text-gray-600'>Owner Details</h1>

                    </div>
                    <div>
                        <ProfileFieldCard keys={"owner name"} value={"Mukesh"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"email"} value={"Mukesh@gmail.com"}/>
                        <Divider/>
                        <ProfileFieldCard keys={"role"} value={"Salon owner"}/>
                       
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile
