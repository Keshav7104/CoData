import Navbar from '@Components/Navbar'
import '@styles/globals.css'
import Footer from '@Components/Footer'

export const metadata = {
  title: 'CoData',
  description: 'Code += Data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
