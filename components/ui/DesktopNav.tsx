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
import instaIcon from '/public/static/img/icons/icons8-instagram-red.svg'
import facebookIcon from '/public/static/img/icons/icons8-facebook-red.svg'
import Image from 'next/image'
import Link from 'next/link'

const DesktopNav = () => {
    return (
        <Navbar className="justify-start border-b-5 border-primary-2 p-3 shadow-sm shadow-slate-300">
            <NavbarBrand className="justify-center">
                <Link href="/" className="">
                    <Image
                        src="/static/img/logo/logo_full_color.png"
                        alt="CVJM Logo"
                        width={100}
                        height={100}
                    />
                </Link>
                {/*  <div className="flex w-full flex-col gap-1">
                    <p className="text-2xl font-light">CVJM Ratzeburg</p>
                    <p className="font-light">Freizeit- und Segelzentrum</p>
                </div> */}
            </NavbarBrand>
            <NavbarContent justify="center">
                {MENU_ITEMS.map((item: MenuItem, index) => (
                    <MenuItemDropdown key={index} menuItem={item} />
                ))}
            </NavbarContent>
            <NavbarContent
                className="flex flex-row items-center gap-2"
                justify="end"
            >
                <a
                    href={'https://www.instagram.com/cvjmratzeburg/'}
                    target="_blank"
                    className="block"
                >
                    <Image
                        src={instaIcon}
                        alt="Instagram Logo"
                        height={30}
                        width={30}
                    />
                </a>
                <a
                    href="https://www.facebook.com/cvjm.ratzeburg"
                    target="_blank"
                >
                    <Image
                        src={facebookIcon}
                        alt="Instagram Logo"
                        height={30}
                        width={30}
                    />
                </a>
            </NavbarContent>
        </Navbar>
    )
}
export default DesktopNav
