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
    console.log(MENU_ITEMS)
    return (
        <Navbar className="p-5 shadow-sm shadow-slate-300">
            <NavbarBrand>
                <Brand />
            </NavbarBrand>
            <NavbarContent className="justify-start">
                <Dropdown type="listbox" className="border-r-0">
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                radius="none"
                                disableRipple={true}
                                className="bg-primary-2"
                            >
                                Button
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                        <DropdownItem>Item 1</DropdownItem>
                        <DropdownItem>Item 2</DropdownItem>
                        <DropdownItem>Item 3</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
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
