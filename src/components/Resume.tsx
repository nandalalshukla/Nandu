import React from "react";

const Resume = () => {
  return (
    <div className="relative inline-block w-fit group">
      <a href="/resume.pdf" download className="rounded-lg">
        Download Resume
      </a>

      <div
        className="absolute top-full mt-2 left-1/2 -translate-x-1/2
        opacity-0 scale-95 
        group-hover:opacity-100 group-hover:scale-100 
        transition-all duration-300 
        w-64 h-auto bg-white rounded-xl shadow-xl overflow-hidden
        pointer-events-none group-hover:pointer-events-auto"
      >
        <img src="/resume.jpg" className="w-full h-full object-cover" />

        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
      </div>
    </div>
  );
};

export default Resume;
