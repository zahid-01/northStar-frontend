import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MotionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
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

  useEffect(() => {
    if (isVisible) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, type: "spring", stiffness: 50 },
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={motionRef}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent;
