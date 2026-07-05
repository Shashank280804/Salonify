import React from 'react';
import { Divider, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const DrawerList = ({ menu, menu2, toggleDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (item) => () => {
        navigate(item.path);
        if(toggleDrawer){
            toggleDrawer(false)();
        }
    };



    return (
        <div className="h-full">
            <div className="flex flex-col h-full w-[300px] border-r py-5">

                {/* Top Menu */}
                <div className="space-y-2">
                    {menu.map((item, index) => (
                        <div
                            key={index}
                            onClick={handleClick(item)}
                            className={`${item.path === location.pathname ? "bg-primary text-secondary":"text-primary"}flex items-center gap-3 px-5 py-3 rounded-r-full cursor-pointer `}
                        >
                            <ListItemIcon>
                                {item.path === location.pathname ? item.activeIcon: item.icon}
                            </ListItemIcon>

                            <ListItemText primary={item.name} />
                        </div>
                    ))}
                </div>

                {/* Bottom Menu */}
                <div className="mt-auto">
                    <Divider className="mb-3" />

                    <div className="space-y-2">
                        {menu2.map((item, index) => (
                              <div
                            key={index}
                            onClick={handleClick(item)}
                            className={`${item.path === location.pathname ? "bg-primary text-secondary":"text-primary"}flex items-center gap-3 px-5 py-3 rounded-r-full cursor-pointer `}
                        >
                            <ListItemIcon>
                                {item.path === location.pathname ? item.activeIcon: item.icon}
                            </ListItemIcon>

                            <ListItemText primary={item.name} />
                        </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DrawerList;