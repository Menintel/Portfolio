import { motion } from 'motion/react'
import React from 'react'

const ProjectDetails = ({
    title, description,
    subDescription, image,
    tags, href,
    closeModel,
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full
            overflow-hidden backdrop-blur-sm' >
        <motion.div className='relative max-w-2xl border shadow-sm rounded-2xl 
            bg-gradient-to-l from-midnight to-navy border-white/10' 
            initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} >
            <button onClick={closeModel}
                className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 ' >
                <img src="assets/close.svg" className='w-6 h-6' alt="x" />
            </button>
            <img src={image} alt={title} className='w-full rounded-t-xl' />
            <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold text-white' >{title}</h5>
                <p className='mb-3 font-normal text-neutral-400' >{description}</p>
                {subDescription.map((subDesc, index)=>(
                    <p className='text-xs font-extralight text-neutral-500'  >{subDesc}</p>
                ))}
            </div>
            <div className='flex items-center justify-between p-5'>
                <div className='flex gap-4'>
                    {tags.map((tag)=>(
                    <img key={tag.id} src={tag.path} alt={tag.name} 
                        className='rounded-lg size-5 hover-animation items-center' />
                        ))}
                </div>
                <a href={href} className='inline-flex items-center gap-3 font-medium 
                hover-animation cursor-pointer'>
                    view Project <img src="assets/arrow-up.svg" alt="^" className='size-4' />
                </a>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails