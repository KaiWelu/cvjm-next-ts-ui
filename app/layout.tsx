import type { Metadata } from 'next'
import { NextUIProvider } from '@nextui-org/react'
import './globals.css'
import Footer from '@/components/ui/Footer'

import NavBarWrapper from '@/components/ui/NavBarWrapper'

export const metadata: Metadata = {
    title: 'CVJM Ratzeburg',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <NextUIProvider>
                    <NavBarWrapper />
                    {children}
                    <Footer />
                </NextUIProvider>
            </body>
        </html>
    )
}
