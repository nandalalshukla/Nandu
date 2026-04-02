"use client";

const Resume = () => {
  return (
    <div className="relative inline-flex w-fit group z-50">
      <a
        href="/resume.pdf"
        className="inline-flex items-center rounded-sm px-1 py-1 text-sm font-medium text-foreground underline underline-offset-4 decoration-1 transition-all hover:text-foreground/80 hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Download Resume
      </a>

      <div
        className="absolute top-full mt-2 left-1/2 -translate-x-4
        opacity-0 scale-95 
        group-hover:opacity-100 group-hover:scale-100 
        group-focus-within:opacity-100 group-focus-within:scale-100
        transition-all duration-300 
        w-120 h-auto bg-card border-4 border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden
        shadow-md z-50
        pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto"
      >
        <img src="/resume.jpg" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Resume;
