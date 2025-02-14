import React from 'react';

function Button() {
  return (
    <div>
      <button className='rounded-full w-[15vh] h-[4vh] md:w-[15vh] md:h-[5vh] bg-red-600 text-sm md:text-base hover:bg-violet-700  duration-200'>
        Download CV
      </button>
    </div>
  );
}

export default Button;