'use client'
import Image from 'next/image'
import Brand from './Brand'
import MenuItemDropdown from './MenuItemDropdown'
import { MENU_ITEMS } from '@/lib/menuItems'
import { MenuItem } from '@/lib/types'
import instaIcon from '/public/static/img/icons/icons8-instagram-red.svg'
import facebookIcon from '/public/static/img/icons/icons8-facebook-red.svg'

const DesktopNavi = () => {
    return (
        <nav className="sticky top-0 hidden flex-row items-center justify-evenly gap-0 border-b-5 border-primary-2 bg-background p-3 shadow-sm shadow-slate-300 lg:flex">
            <Brand />
            <section className="w-auto">
                {MENU_ITEMS.map((item: MenuItem, index) => (
                    <MenuItemDropdown key={index} menuItem={item} />
                ))}
            </section>
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
        </nav>
    )
}

export default DesktopNavi
