import { MenuItem } from '@/lib/types'
import Link from 'next/link'
import React, { useState } from 'react'

const MenuItemDropdown = ({
    name,
    path,
    items,
}: {
    name: string
    path: string
    items: string[]
}) => {
    const [isDropDownShown, setIsDropDownShown] = useState(true)
    return (
        <>
            <Link href={path}>
                <button className="text-2xl font-semibold text-primary-2">
                    {name}
                </button>
            </Link>
            {isDropDownShown && (
                <div className="bg-text-primary-2 absolute left-0 top-24 w-full bg-primary-2 text-white">
                    Hallo
                </div>
            )}
        </>
    )
}

export default MenuItemDropdown
