
import { Nunito } from 'next/font/google'

import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
// import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import ToastProvider from './providers/ToasterProvider'
export const metadata = {
  title: 'City Life',
  description: 'Find your comfort Home Here',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
        <ToastProvider />
        <RegisterModal />
        <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
