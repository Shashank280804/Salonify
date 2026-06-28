import React from 'react'
import { Avatar, Box, IconButton, Rating } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Delete } from '@mui/icons-material'
import { red } from '@mui/material/colors'

const ReviewCard = () => {
    return (
        <div className="flex justify-between">
            <div className='w-[80%] '>
                <Grid container spacing={8.5} >
                    <Grid size={1.5}>
                        <Box>
                            <Avatar
                                className="text-white"
                                sx={{ width: 56, height: 56, bgcolor: "#9155FF" }}
                            >
                                S
                            </Avatar>
                        </Box>
                    </Grid>
                    <Grid size={9}>
                        <div className='space-y-2'>
                            <p className='font-semibold text-lg'>Shashank</p>
                            <p className='opacity-70'>2026-12-09</p>

                        </div>
                        <div>
                            <Rating readOnly value={4.5} name='half-rating' defaultValue={4.5} precision={0.5} />
                        </div>
                        <p>This salon has great service</p>

                    </Grid>
                </Grid>
            </div>
            <IconButton>
                <Delete sx={{ color: red[700]}} />
            </IconButton>
        </div>
    )
}

export default ReviewCard