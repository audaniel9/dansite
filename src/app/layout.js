import './globals.css'
import Link from 'next/link'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Dansite',
  description: 'Am I cool yet?',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <nav>
          <div id="nav-logo-section" className="nav-section">
              <a href="#">
                  <img src="./dansite-logo.png" alt="Dansite" />
              </a>
          </div>
          <div id="nav-link-section" className="nav-section">
              <Link href="/" replace>DANIEL</Link>
              <Link href="/travel" replace>TRAVEL</Link>
              <Link href="/food" replace>FOOD</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}
