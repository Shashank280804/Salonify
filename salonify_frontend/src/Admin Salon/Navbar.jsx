import { MedicationLiquidRounded, MenuRounded, NotificationsActiveRounded } from '@mui/icons-material'
import { Badge, Drawer, IconButton, Menu} from '@mui/material'
import React, { useState } from 'react'
import DrawerList from './DrawerList'

const Navbar = ({DrawerList}) => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
          setOpen(newOpen)
    }
    
  return (
    <div className='h-[10vh] flex items-center justify-between px-5 border-b'>
        <div className='flex items-center gap-3'>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuRounded color='primary'/>
            </IconButton>
            <h1 className='text-xl cursor-pointer font-bold'>Salon Booking</h1>
        </div>

        <IconButton>
            <Badge color='secondary'>
               <NotificationsActiveRounded color = 'primary'/>
            </Badge>
        </IconButton>

        <Drawer open = {open} onClose={toggleDrawer(false)}>
            <DrawerList toggleDrawer = {toggleDrawer}/>
        </Drawer>
      
    </div>
  )
}

export default Navbar
