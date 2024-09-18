import MobileNav from './MobileNav'
import DesktopNavi from './DesktopNavi'
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
            <DesktopNavi />
        </>
    )
}

export default NavBarWrapper
