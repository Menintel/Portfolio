import React from 'react'
import { FlipWords } from './ui/FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {
    const variants = { hidden: { opacity:0, x:-50}, visible: {opacity:1, x:0}}
  return (
    <div  className='z-10 mt-20 text-center md:mt-40 md:text-left 
        rounded-3xl bg-clip-text'>
            {/*Destop View */}
            <div className='flex-col hidden md:flex c-space'>
                <motion.h1 className='text-4xl font-medium' 
                    variants={variants} initial="hidden" animate="visible" transition={{delay:1}}
                > Hi I'm ELIUD, -</motion.h1>
                <div className='flex flex-col items-start'>
                   
                    <motion.div 
                        variants={variants} initial="hidden" animate="visible" transition={{delay:1.6}}
                        >{/*Flip word form aceternity */}
                        <FlipWords className="font-black text-white text-6xl"
                        words={["I DESIGN" , "I DEVELOP", "I DELIVER"]}/>
                    </motion.div>
                    <motion.p className='text-5xl font-medium text-neutral-300'
                        variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}
                        >Clean, Modern Software </motion.p>
                    {/*<p className='text-2xl'> 
                        Web and Software Solutions
                    </p>*/}
                </div>
            </div>
            {/*Mobile View */}
            <div className='flex flex-col space-y-6 md:hidden'>
                <motion.p className='text-4xl font-medium'
                    variants={variants} initial="hidden" animate="visible" transition={{delay:1}}
                    >Hi, I'm ELIUD</motion.p>
                <div>
                    <motion.p className='text-5xl font-black text-neutral-300'
                        variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}
                        >Building</motion.p>
                    <motion.div
                        variants={variants} initial="hidden" animate="visible" transition={{delay:1.6}}
                        ><FlipWords className="font-bold text-white text-7xl"
                    words={["Secure","Morden","Scalable"]}/></motion.div>
                    <motion.p className='text-4xl font-black text-neutral-300'
                        variants={variants} initial="hidden" animate="visible" transition={{delay:1.8}}
                        style={{ contain: 'layout paint',willChange: 'transform'}}
                        >Web Applications</motion.p>
                </div>
            </div>
    </div>
  )
}

export default HeroText