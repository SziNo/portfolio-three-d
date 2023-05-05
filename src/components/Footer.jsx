import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion'
import { socials } from '../constants'
import { styles } from '../styles'

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.paddingX} py-8 relative`}
    >
      <div className='flex items-center justify-between flex-wrap'>
        <h4 className='font-extrabold text-[24px] text-white'>Portfolio</h4>
        <ul className='flex gap-6 list-none'>
          {socials.map((social, idx) => (
            <li>
              <img
                key={idx}
                src={social.image}
                alt={social.name}
                onClick={() => window.open(social.url, '_blank')}
                className='w-[35px] h-[35px] object-contain cursor-pointer'
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.footer>
  )
}

export default Footer
