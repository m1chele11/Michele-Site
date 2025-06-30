import '@/styles/globals.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'This is my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}