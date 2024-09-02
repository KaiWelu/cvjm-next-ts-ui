import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react'
import Image from 'next/image'

const NavBarWrapper = () => {
    return (
        <>
            {/* <MobileNav /> */}
            <DesktopNav />
        </>
    )
}

export default NavBarWrapper
