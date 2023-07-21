import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MotionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const motionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (motionRef.current) {
      observer.observe(motionRef.current);
    }

    return () => {
      if (motionRef.current) {
        // eslint-disable-next-line
        observer.unobserve(motionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={motionRef}
      initial={{ x: 100, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
