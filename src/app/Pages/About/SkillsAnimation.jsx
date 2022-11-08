import React, { useState } from 'react'
import { motion } from 'framer-motion';
import './SkillsAnimation.css';

const SkillsAnimation = ({ref, controls, initial, variants}) => {
  const [viewModelState, setViewModelState] = useState(false);

  return (
<motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
  onHoverStart={() => setViewModelState(prev => !prev)}

/>
  )
}


export default SkillsAnimation