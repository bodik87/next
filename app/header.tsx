import Link from 'next/link'
import Head from './components/head'

export default function Header() {
  return (
    <Head>
      <nav className='w-full max-w-7xl mx-auto'>
        <ul className='flex gap-10'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </Head>
  )
}
