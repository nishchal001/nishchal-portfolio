import '../styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Nishchal Chotai — Portfolio',
  description: 'Implementation and Platform Engineer — PKI, HSM, Linux, eKYC'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  )
}
