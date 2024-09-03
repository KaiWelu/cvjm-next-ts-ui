'use client'
import React from 'react'
import Brand from './Brand'
import { MENU_ITEMS } from '../../lib/menuItems'
import { MenuItem } from '@/lib/types'
import MenuItemDropdown from './MenuItemDropdown'
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react'

const DesktopNav = () => {
    return (
        <Navbar className="p-5 shadow-sm shadow-slate-300">
            <NavbarBrand>
                <Brand />
            </NavbarBrand>
            <NavbarContent className="">
                {MENU_ITEMS.map((item: MenuItem, index) => (
                    <MenuItemDropdown key={index} menuItem={item} />
                ))}
            </NavbarContent>
        </Navbar>
    )
} /* <nav className="relative w-full bg-white p-4 shadow-sm shadow-slate-300">
            <div className="flex w-full flex-row gap-8 px-1">
                <Brand />
                <div className="flex flex-col justify-center">
                    {MENU_ITEMS.map((item: MenuItem, index) => (
                        <MenuItemDropdown
                            key={index}
                            name={item.name}
                            path={item.path}
                            items={item.items}
                        />
                    ))}
                </div>
            </div>
        </nav> */

export default DesktopNav
