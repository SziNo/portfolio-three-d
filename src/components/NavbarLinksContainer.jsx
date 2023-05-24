import { useState, useEffect, useRef } from 'react'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const NavbarLinksContainer = ({ active, setActive }) => {
  const [toggle, setToggle] = useState(false)
  const containerRef = useRef(null)
  const isDesktop = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !containerRef.current?.contains(event.target) &&
        !event.target.closest('.hamburger-icon')
      ) {
        setToggle(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleclick = (nav) => {
    setActive(nav.title)
    document.querySelector(`#${nav.id}`).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div
        ref={containerRef}
        className={`${
          isDesktop
            ? ''
            : `${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
        }`}
      >
        <ul
          className={`list-none ${
            isDesktop
              ? 'hidden md:flex flex-row lg:gap-7 md:gap-3'
              : 'flex justify-end items-start flex-1 flex-col gap-4'
          }`}
        >
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } font-medium cursor-pointer hover:text-white ${
                isDesktop ? 'text-[18px]' : 'font-poppins text-[16px]'
              }`}
            >
              <Link
                to={`#${nav.id}`}
                onClick={
                  isDesktop
                    ? () => handleclick(nav)
                    : () => {
                        setToggle((prev) => !prev)
                        handleclick(nav)
                      }
                }
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='md:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='hamburger-icon w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
    </>
  )
}

export default NavbarLinksContainer
