import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: counter === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white font-bold z-50"
    >
      <motion.p key={counter} className="text-7xl">
        {counter}%
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl mt-4 text-gray-400"
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
};

export default Loader;
