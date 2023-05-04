import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className='flex flex-col justify-center items-center mb-5 pb-4'
      >
        <p className={styles.sectionSubText}>Having a Ball with</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 cursor-pointer' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
