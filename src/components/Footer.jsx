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
      <div className='footer-gradient' />

      <div className='flex items-center justify-between flex-wrap'>
        <h4 className='font-extrabold text-[24px] text-white'>Portfolio</h4>
        <div className='flex gap-6'>
          {socials.map((social, idx) => (
            <img
              key={idx}
              src={social.image}
              alt={social.name}
              onClick={() => window.open(social.url, '_blank')}
              className='w-[35px] h-[35px] object-contain cursor-pointer'
            />
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
