import { useState } from "react"
import { AnimatePresence, motion } from "motion/react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = 'eliudmusenge@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    },2000);
  }
  return (
    <motion.button 
    onClick={copyToClipboard} 
    whileHover={{y:-5, scale:1.05}}
    whileTap={{scale:1.2}}
    className="relative px-1 py-2 text-sm text-center overflow-hidden
      rounded-full font-extralight bg-primary w-[12rem] cursor-pointer" >
      < AnimatePresence >
      {copied ?
        (<motion.p 
          key="copied"
          className="flex items-center justify-center gap-2"
          initial={{opacity:0, y:-10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}}
            transition={{duration:0.2, ease: "easeInOut"}}   >
        <img src="assets/copy-done.svg" className="w-4" alt="Copied-icon" width={16} height={16} />
          Email Address Copied </motion.p>):

        (<motion.p 
          key="copy"
          className="flex items-center justify-center gap-2"
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            transition={{duration:0.4}}  >
        <img src="assets/copy.svg" className="w-4" alt="copy-icon" width={16} height={16} />
        Copy Email Address
      </motion.p>)}
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton