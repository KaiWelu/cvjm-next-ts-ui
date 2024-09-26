'use client'
import { MenuItem } from '@/lib/types'
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
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
            <DropdownTrigger>
                <Button
                    radius="none"
                    disableRipple={true}
                    className="bg-transparent text-lg font-semibold text-primary-2"
                >
                    {menuItem.name}
                </Button>
            </DropdownTrigger>

            <DropdownMenu color="danger">
                {menuItem.items.map((item: string, index: number) => (
                    <DropdownItem key={index}>
                        <Link href={menuItem.path + '#' + menuItem.ids[index]}>
                            {item}
                        </Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}

export default MenuItemDropdown
