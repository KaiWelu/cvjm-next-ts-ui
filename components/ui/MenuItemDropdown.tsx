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
        <Dropdown
            type="listbox"
            className="border-r-0"
            placement="bottom-start"
            shadow="sm"
            radius="none"
            backdrop="blur"
        >
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        radius="none"
                        disableRipple={true}
                        className="bg-white text-lg font-semibold text-primary-2"
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
