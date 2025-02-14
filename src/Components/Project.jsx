import React from "react";
import { motion } from "framer-motion";

function Project() {
  const products = [
    {
      id: 1,
      img: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d407eef769166de4e917_Kablamo%20-%2016%209%20(A).webp",
      link: "https://8wmzf2-5173.csb.app/",
    },
    {
      id: 2,
      img: "https://camo.githubusercontent.com/809c46982dc5b19571f25da90725e1411ea441d8875dedbe691a3a3d8cbb3e18/68747470733a2f2f6f72706574726f6e2e636f6d2f77702d636f6e74656e742f75706c6f6164732f756c74696d6174656d656d6265722f3136392f70726f66696c655f70686f746f2e6a70673f31363937323330383837",
      link: "https://symphonious-hummingbird-ad34b1.netlify.app/",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1673125287361-08a08fa79aa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://quiet-torrone-93f5d3.netlify.app/",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl text-zinc-400 cursor-pointer mb-10">
        Recent Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <img
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              src={product.img}
              alt={`Project ${product.id}`}
            />
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="mt-4">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(229, 223, 223, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-purple-500 transition"
              >
                View Project
              </motion.button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
