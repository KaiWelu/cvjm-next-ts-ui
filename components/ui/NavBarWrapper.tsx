import MobileNav from './MobileNav'
import DesktopNavi from './DesktopNavi'

const NavBarWrapper = () => {
    return (
        <div className="sticky top-0 z-50">
            <MobileNav />
            <DesktopNavi />
        </div>
    )
}

export default NavBarWrapper
