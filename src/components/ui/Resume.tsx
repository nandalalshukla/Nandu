"use client";

const Resume = () => {
  return (
    <div className="relative inline-block w-fit group hover:cursor-pointer bg-gray-800 px-4 py-2 rounded-lg z-50">
      <a href="/resume.pdf">Download Resume</a>

      <div
        className="absolute top-full mt-1 left-1/2 -translate-x-4
        opacity-0 scale-95 
        group-hover:opacity-100 group-hover:scale-100 
        transition-all duration-300 
        w-120 h-auto bg-card border-4 border-gray-600 rounded-xl overflow-hidden
        shadow-md z-50
        pointer-events-none group-hover:pointer-events-auto"
      >
        <img src="/resume.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Resume;
