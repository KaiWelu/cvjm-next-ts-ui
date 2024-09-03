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
            radius="sm"
        >
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        radius="none"
                        disableRipple={true}
                        className="bg-transparent text-lg font-semibold text-primary-2"
                    >
                        {menuItem.name}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu color="danger">
                {menuItem.items.map((item: string, index: number) => (
                    <DropdownItem
                        key={index}
                        href="/haus"
                        /* className="text-primary-2" */
                        /* variant="light" */
                    >
                        {item}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default MenuItemDropdown
