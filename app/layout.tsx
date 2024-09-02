import type { Metadata } from 'next'
import { NextUIProvider } from '@nextui-org/react'
import './globals.css'

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
                <NextUIProvider>{children}</NextUIProvider>
            </body>
        </html>
    )
}
