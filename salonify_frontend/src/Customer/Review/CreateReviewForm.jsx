import { Box, Button, InputLabel, Rating, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from "formik";

const CreateReviewForm = () => {
    const formik = useFormik({
        initialValues: { reviewText: "", reviewRating: 0 },
        onSubmit: (values) => {
            console.log("submitting", values);
        },
    })
    return (
        <div className="w-full lg:w-3/4">
            <Box
                component={"form"}
                  onSubmit={formik.handleSubmit}
                sx={{ mt: 3 }}
                className='space-y-5 w-full'
            >
                <TextField
                    fullWidth
                    id="reviewText"
                    name="reviewText"
                    label="Review"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formik.values.reviewText}
                    onChange={formik.handleChange}

                />
                <div className='space-y-2'>
                    <InputLabel>Rating</InputLabel>
                    <Rating
                        id="reviewRating"
                        name='reviewRating'
                        value={formik.values.reviewRating}
                        onChange={(event, newValue)=> formik.setFieldValue("reviewRating", newValue)}
                        precision={0.5}
                    />

                </div>
                <Button variant='contained' color='primary' type='submit'>Submit Review</Button>


            </Box>
        </div>
    )
}

export default CreateReviewForm
