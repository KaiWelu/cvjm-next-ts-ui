'use client'
import {
    Accordion,
    AccordionItem,
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MENU_ITEMS } from '@/lib/menuItems'

const MobileNav = () => {
    return (
        <Navbar className="ml-0 justify-start border-b-5 border-primary-2 py-3 shadow-sm shadow-slate-300">
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/" className="">
                        <Image
                            src="/static/img/logo/logo_full_color.png"
                            alt="CVJM Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </NavbarBrand>
                <NavbarMenuToggle
                /* aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} */
                />
            </NavbarContent>

            <NavbarMenu className="mt-5">
                {/*   <NavbarMenuItem>Hallo</NavbarMenuItem>
                <NavbarMenuItem>Hallo</NavbarMenuItem>
                <NavbarMenuItem>Hallo</NavbarMenuItem>
                <NavbarMenuItem>Hallo</NavbarMenuItem> */}
                <Accordion variant="light">
                    {MENU_ITEMS.map((item, index) => (
                        <AccordionItem
                            key={item.name}
                            title={item.name}
                            classNames={{
                                title: 'text-primary-2',
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                {item.items.map((subitem) => (
                                    <Button key={subitem}>{subitem}</Button>
                                ))}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </NavbarMenu>
        </Navbar>
    )
}

export default MobileNav
