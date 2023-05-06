import { useState } from 'react'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import { Link } from 'react-router-dom'

const NavbarLinksContainer = ({ active, setActive }) => {
  const [toggle, setToggle] = useState(false)

  const handleclick = (nav) => {
    setActive(nav.title)
    document.querySelector(`#${nav.id}`).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <div>
        <ul className='list-none hidden md:flex flex-row lg:gap-7 md:gap-3'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={`#${nav.id}`} onClick={() => handleclick(nav)}>
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
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-secondary'
                }`}
              >
                <Link
                  to={`#${nav.id}`}
                  onClick={() => {
                    setToggle((prev) => !prev)
                    handleclick(nav)
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavbarLinksContainer
