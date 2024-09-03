import { MenuItem } from '@/lib/types'
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    NavbarItem,
} from '@nextui-org/react'
import Link from 'next/link'

const MenuItemDropdown = ({ menuItem }: { menuItem: MenuItem }) => {
    return (
        <Dropdown type="listbox" className="border-r-0">
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        radius="none"
                        disableRipple={true}
                        className="bg-primary-2"
                    >
                        {menuItem.name}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu>
                {menuItem.items.map((item: string, index: number) => (
                    <DropdownItem key={index}>{item}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default MenuItemDropdown
