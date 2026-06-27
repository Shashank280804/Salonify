import React from 'react'
import { FiberManualRecord } from '@mui/icons-material'
import { Button } from '@mui/material'

const ServiceCard = ({ item, added, handleAdd }) => {
    return (
        <div className='w-full'>
            <div className='flex items-center justify-between gap-5'>
                <div className='space-y-1 w-[60%]'>
                    <h1 className='text-2xl font-semibold'>Man Beard</h1>
                    <div className='flex items-center gap-3'>
                        <p className='text-gray-500 text-sm'>Stylish man beard</p>
                        <p> $399</p>
                        <FiberManualRecord sx={{ fontSize: "10px", color: "gray" }} />
                        <p>45 Mins</p>
                    </div>
                </div>
                <div className='space-y-3'>
                    <img className='w-32 h-32 object-cover rounded-md' src="" alt="" />
                    <Button
                        fullWidth
                        variant="outlined"
                        color="success"
                        onClick={handleAdd}
                    >
                        {added ? "Remove" : "Add"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
