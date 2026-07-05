import { AccountBalance, AccountBalanceWallet, AccountBox, Add, Category, CategoryOutlined, CategoryRounded, Dashboard, Inventory, Logout, Notifications, NotificationsNone, Receipt, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import DrawerList from '../../../Admin Salon/DrawerList'

const menu = [
    {
        name:"Dashboard",
        path:"/salon-dashboard",
        icon:<Dashboard className='text-primary' />,
        activeIcon:<Dashboard className='text-secondary' />
    },
    {
        name:"Bookings",
        path:"/salon-dashboard/bookings",
        icon:<ShoppingBag className='text-primary'/>,
        activeIcon:<ShoppingBag className='text-secondary'/>
    },
    {
        name:"Services",
        path:"/salon-dashboard/services",
        icon:<Inventory className='text-primary'/>,
        activeIcon:<Inventory className='text-secondary'/>
    },
    {
        name:"Add Services",
        path:"/salon-dashboard/add-services",
        icon:<Add className='text-primary'/>,
        activeIcon:<Add className='text-secondary'/>
    },
    {
        name:"Payment",
        path:"/salon-dashboard/payment",
        icon:<AccountBalance className='text-primary'/>,
        activeIcon:<AccountBalance className='text-secondary'/>
    },
    {
        name:"Transaction",
        path:"/salon-dashboard/transaction",
        icon:<Receipt className='text-primary'/>,
        activeIcon:<Receipt className='text-secondary'/>
    },
    {
        name:"Category",
        path:"/salon-dashboard/category",
        icon:<CategoryRounded className='text-primary'/>,
        activeIcon:<CategoryRounded className='text-secondary'/>
    },
    {
        name:"Notifications",
        path:"/salon-dashboard/notifications",
        icon:<NotificationsNone className='text-primary'/>,
        activeIcon:<Notifications className='text-secondary'/>
    },

]

const menu2 =[
    {
        name:"Account",
        path:"/salon-dashboard/account",
        icon:<AccountBox className='text-primary' />,
        activeIcon:<AccountBox className='text-secondary' />
    },
    {
        name:"Logout",
        path:"/",
        icon:<Logout className='text-primary'/>,
        activeIcon:<Logout className='text-secondary'/>
    }

]

const SalonDrawerList = ({toggleDrawer}) => {
  return (
    <div>
      <DrawerList menu ={menu}   menu2 = {menu2} toggleDrawer={toggleDrawer}/>
    </div>
  )
}

export default SalonDrawerList
