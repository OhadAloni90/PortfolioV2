import React, { useState } from "react";
import {  motion,  useMotionValue, useSpring, } from "framer-motion";
import cn from "./SkillsCard.module.scss";
import { distance } from "@popmotion/popcorn";


const colors = [
    "#00cc88",
    "#0099ff",
    "#8855ff",
    "#ff0055",
    "#ee4444",
    "#ffcc00",
    "#00cc88"
  ];

  const grid = [["SQL", "JavaScript", "ReactJS", "Rstudio"], ["HTML", "CSS", "Bootstrap","ThreeJS" ], ["React Three/Fiber", "C", "ExpressJS", "Python"]];
const size = 150;
const gap = 20;

const Square = ({ active, setActive, colIndex, rowIndex, x, y, word,viewModelState}) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
    
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      data-mouse-hover='button'
      data-mouse-hover-text={
        viewModelState
          ? ''
          : 'DRAG US'
      }
    
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        boxShadow:' 0.5rem .5rem 0 var(--color-shadow, currentColor)',
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0
        
      }}
    >
        <div className={cn.word}>{word}</div>
        </motion.div>
  );
};
const SkillsCard = () => {
    const [active, setActive] = useState({ row: 0, col: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [viewModelState, setViewModelState] = useState(false);

  return (
    <div className="app">
      <motion.div
        animate={{ "--base-hue": 360 } }
        initial={{ "--base-hue": 0 } }
        transition={{ duration: 10, loop: Infinity, ease: "linear" }}
        style={{ width: "100%", height: "100%" }}
      >
        <motion.div
          style={{
            display: "flex",
            width: (size + gap) * 4 - gap,
            height: (size + gap) * 4 - gap,
            left: "100%",
            transform: "translate(-100%, 0%)",
            position: "relative",
            perspective: 500
          }}
        >
          {grid.map((row, rowIndex) =>
            row.map((_item, colIndex, word) => (
              <Square
                x={x}
                y={y}
                active={active}
                setActive={setActive}
                rowIndex={rowIndex}
                colIndex={colIndex}
                key={rowIndex + colIndex}
                word={word[colIndex]}
                viewModelState={viewModelState}
             />

            ))
          )}

        </motion.div>
      </motion.div>
    </div>  );
};

export default SkillsCard;
