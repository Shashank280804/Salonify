import { ArrowRight, ArrowRightAlt } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const BookingCard = () => {
  return (
    <div className='p-5 rounded-md bg-slate-100 md:flex items-center justify-between'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>HairX Salon</h1>
            <div>
                <li>hair cut</li>
                <li>Massage therapy</li>
                <li>hair coloring</li>

            </div>
            <div>
                <p>Time & Date <ArrowRightAlt/> 2026-08-12</p>
                <p>1:00 pm to 9:00 pm</p>
            </div>
      </div>
      <div className='space-y-2'>
        <img className='h-28 w-28' src="" alt="" />
        <p className='text-center'>$43</p>
        <Button color='error' variant='outlined'>Cancel</Button>

      </div>
    </div>
  )
}

export default BookingCard
