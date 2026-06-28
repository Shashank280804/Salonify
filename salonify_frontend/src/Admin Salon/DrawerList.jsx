import { Divider, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const DrawerList = ({ menu, menu2 }) => {
    return (
        <div className='h-full '>
            <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
                <div className='space-y-2'>
                    {menu.map((item, index) =>
                        <div>
                            <div key={index} className={`bg-primary text-secondary flex items-center px-5 py-3 rounded-full`}>
                                <ListItemIcon>
                                    {item.activeIcon}
                                </ListItemIcon>

                                <ListItemText primary={item.name} />
                            </div>
                        </div>
                    )}

                    {menu2.map((item, index) =>
                        <div>
                            <div key={index} className={`bg-primary text-secondary flex items-center px-5 py-3 rounded-full`}>
                                <ListItemIcon>
                                    {item.activeIcon}
                                </ListItemIcon>

                                <ListItemText primary={item.name} />
                            </div>
                        </div>
                    )}

                </div>
                <Divider />





            </div>

        </div>
    )
}

export default DrawerList
