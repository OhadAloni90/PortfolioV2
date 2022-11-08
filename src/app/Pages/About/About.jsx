import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Marquee from "../../Components/Marquee/Marquee";
import Skills from "../../Components/Skills/Skills";
import {
  useScroll,
  useAnimation,
  useInView,
  motion,
  useTransform,
} from "framer-motion";
// import { useInView } from "react-intersection-observer";
import SkillsAnimation from "./SkillsAnimation";
import cn from "./About.module.scss";
import SkillsCard from "./components/SkillsCard";

const DiagonalBox = styled.div`
  position: relative;
  background-color: #ffeeee;

  height: 15rem;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(45deg, #3787dc, #702cac);
    transform: skewY(-5deg);
  }
`;

const DivBox = styled.div`
  position: relative;
  background-color: #ffeeee;
  height: 10rem;
  width: 100%;
`;

const Content = styled.div`
  color: #e4e4e4;
  position: relative;
  max-width: 50em;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const About = () => {
  const [showFakeLinkExplanation, setShowFakeLinkExplanation] = useState(false);

  const Compo = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.1, 1], [0.1, 1]);
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();


    
    useEffect(() => {
      console.log(isInView);
      if (isInView) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    }, [controls, isInView]);

    return (
      <div className={cn.sideDev}>
        <div className={cn.container}>
          <motion.div animate={{ controls }} ref={ref} style={{ scale }}>
            <div className={cn.leftSide}>
              <motion.div
                className="item"
                style={{
                  scaleY: scrollYProgress,
                }}
              >
                <div className={cn.titleContainer}>
                  <h1 className={cn.titleText}>So... About</h1>
                </div>
                <div className={cn.textContainer}>
                  <p>
                    My name is Ohad.I am an architect, graduted from Tel Aviv
                    University, and I also a fresh applied computer science,
                    also from Tel Aviv University.
                    <br />
                    <br />
                    Naturally, I was attracted to front-end development, mixing
                    my love and attraction for design and my new programming
                    skills!
                    <br />
                    <br />
                    I'm also a graphic designer and a UX designer, and looking
                    for my first job!
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className={cn.rightSide}>
            <div className={cn.titleContainer}>
            </div>
            <div className={cn.textContainer}>
              <SkillsCard/>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <DiagonalBox style={{ zIndex: "200" }}>
        <Marquee text={"THIS IS MY ABOUT AND NOT ANYONE ELSES!"} />
        <Content>
          <p>
            Welcome to the site! above were my projects. Now, let me tell you
            something small about.. MYSELF
          </p>
        </Content>
      </DiagonalBox>
      <DivBox></DivBox>
      <Compo />
    </>
  );
};

export default About;
