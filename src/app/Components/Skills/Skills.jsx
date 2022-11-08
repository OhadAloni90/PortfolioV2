import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styled from "styled-components";
import cn from "./Skills.module.scss";
import { useAnimations } from "@react-three/drei";


const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  
const Skills = () => {

    const skills = ["Javascript", "SQL", "Python"];
    return (
      <motion.div
        initial="hidden"
        variants={squareVariants}
        className="square"
      ></motion.div>
    );

};

export default Skills;
