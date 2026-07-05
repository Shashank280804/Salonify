import React from 'react'
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useFormik } from "formik";

const CategoryForm = () => {
    const formik = useFormik({
        initialValues: { name: "", image: "" },
        onSubmit: (values) => {
            console.log("submitting", values);
        },
    })

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={formik.handleSubmit} className='space-y-4 p-4 w-full lg:w-1/2'>
                <Grid container spacing={2}>
                    <Grid className="w-24 h-24" size={{ sx: 12 }}>
                        {false ? <div className='relative border'>
                            <img className='w-24 h-24 object-cover' src="" alt="" />
                            <IconButton className='' color='error' size='small' sx={{ position: "absolute", top: 0, right: 0 }}>
                                <CloseIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                        </div> : <>
                            <input
                                type="file"
                                accept="image/*"
                                id="fileInput"
                                style={{ display: "none" }}
                            />

                            <label
                                htmlFor="fileInput"
                                className="w-24 h-24 flex items-center justify-center cursor-pointer border rounded-md border-gray-400"
                            >
                                <AddPhotoAlternateIcon className="text-gray-700" />
                            </label>
                            {false && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                <CircularProgress />
                            </div>}
                        </>}


                    </Grid>
                    <Grid size={12}>
                        <TextField fullWidth id="name" name='name' label="name" value={formik.values.name} onChange={formik.handleChange} required />

                    </Grid>
                    <Grid size={12}>
                        <Button type='submit' variant='outlined' fullWidth sx={{ py: "0.8rem" }}>Create Category</Button>
                    </Grid>
                </Grid>

            </form>

        </div>
    )
}

export default CategoryForm
