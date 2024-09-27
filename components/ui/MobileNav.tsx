'use client'
import {
    Accordion,
    AccordionItem,
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
} from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

import { MENU_ITEMS } from '@/lib/menuItems'
import instaIcon from '/public/static/img/icons/icons8-instagram-red.svg'
import facebookIcon from '/public/static/img/icons/icons8-facebook-red.svg'

const MobileNav = () => {
    return (
        <Navbar className="ml-0 justify-start border-b-5 border-primary-2 bg-background py-5 shadow-sm shadow-slate-300 lg:hidden">
            <NavbarContent justify="start">
                <NavbarBrand className="flex flex-row justify-start">
                    <Link href="/">
                        <Image
                            src="/static/img/logo/logo_full_color.png"
                            alt="CVJM Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            {/*  <NavbarContent justify="end">
                <section className="flex flex-row items-center gap-2">
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
                </section>
            </NavbarContent> */}
            <NavbarContent justify="end">
                <NavbarMenuToggle
                /* aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} */
                />
            </NavbarContent>

            <NavbarMenu className="mt-8">
                <Accordion variant="light">
                    {MENU_ITEMS.map((item) => (
                        <AccordionItem
                            key={item.name}
                            title={item.name}
                            classNames={{
                                title: 'text-primary-2 font-semibold',
                            }}
                        >
                            <div className="flex flex-col gap-2">
                                {item.items.map((subItem, index) => (
                                    <Link
                                        href={item.path + '#' + item.ids[index]}
                                        key={subItem}
                                    >
                                        <Button className="justify-start border-none bg-transparent text-lg text-primary-2">
                                            {subItem}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
                <section className="mt-4 flex flex-row items-start gap-5 px-2">
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
                </section>
            </NavbarMenu>
        </Navbar>
    )
}

export default MobileNav
