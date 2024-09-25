import MobileNav from './MobileNav'
import DesktopNavi from './DesktopNavi'

const NavBarWrapper = () => {
    return (
        <div className="sticky top-0">
            <MobileNav />
            <DesktopNavi />
        </div>
    )
}

export default NavBarWrapper
