import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import NavbarLinksContainer from './NavbarLinksContainer'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledFromTop = window.scrollY > 60 ? true : false

      setScrolled(isScrolledFromTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img
            src='szino-tp.png'
            alt='logo'
            className='w-[54px] h-[54px] object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Norbert&nbsp;<span className='md:inline-block hidden'>Szikora</span>
          </p>
        </Link>

        <NavbarLinksContainer active={active} setActive={setActive} />
      </div>
    </nav>
  )
}

export default Navbar
