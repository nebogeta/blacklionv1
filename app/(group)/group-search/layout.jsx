import '@/styles/globals.css'

export default function RootLayout({
  children,
}) {
  // offset navbar height
  return <section className='pt-20'>{children}</section>
}