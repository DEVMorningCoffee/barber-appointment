import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'John Barbershop Gallery',
    description: 'Book Barbershop Appointment',
  }

export default function GalleryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang='en'>
            <body>
            <body>{children}</body>
            </body>
        </html>
    )
  }