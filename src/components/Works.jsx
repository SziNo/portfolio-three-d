import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, rocket } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px] flex flex-col justify-between'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl justify'
          />

          <div className='absolute inset-0 flex justify-center items-end m-3 gap-4 card-img_hover'>
            <div
              onClick={() => window.open(github_link, '_blank')}
              className='black-gradient md:w-16 sm:w-14 w-12 md:h-16 sm:h-14 h-12 rounded-full flex justify-center items-center cursor-pointer hover:translate-y-[-5px] transition duration-300'
            >
              <img
                src={github}
                alt='source code'
                className='w-[100%] h-[100%] object-cover'
              />
            </div>
            <div
              onClick={() => window.open(demo_link, '_blank')}
              className='white-gradient md:w-16 sm:w-14 w-12 md:h-16 sm:h-14 h-12 rounded-full flex justify-center items-center cursor-pointer hover:translate-y-[-5px] transition duration-300'
            >
              <img
                src={rocket}
                alt='source code'
                className='w-[100%] h-[100%] object-cover'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Each project is briefly described and includes links to the
          corresponding GitHub repository and live demo. 🚀
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
