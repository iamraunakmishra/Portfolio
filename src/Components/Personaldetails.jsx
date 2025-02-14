import React from "react";
import { motion } from "motion/react"
function Personaldetails() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 md:p-10 relative bg-zinc-900">
      <div className="w-full flex flex-col md:flex-row items-center">
        
        <div className="text-center md:text-left md:w-[50%] md:ml-[10%]">
          <h1 className="text-4xl md:text-5xl text-white">Hello, I'm</h1>
          <h1 className="text-6xl md:text-8xl text-red-500 mt-2">Raunak Mishra</h1>
          <h1 className="text-3xl md:text-5xl text-white mt-4">Front-End Developer</h1>
          <div className="mt-4 w-full md:w-[80%]">
            <p className="text-zinc-500 cursor-pointer hover:text-purple-500 leading-relaxed">
              I'm a passionate front-end developer who loves building responsive
              and user-friendly web applications using HTML, CSS, JavaScript, and
              React.js. I have a strong eye for UI/UX design and enjoy creating
              visually appealing, interactive experiences. I work with modern
              tools like Tailwind CSS, Redux, and Three.js to make websites fast,
              accessible, and cross-browser compatible.
            </p>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="mt-6 md:mt-0 md:ml-12 w-full md:w-[40%] lg:w-[25%] h-auto flex items-center justify-center"
        >
          <img
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Personaldetails;
