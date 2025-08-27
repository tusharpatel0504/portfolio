import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import NavBar from "./NavBar";
import { div } from "framer-motion/client";
import { Footer } from "./Footer";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 150 });
  const springY = useSpring(y, { damping: 20, stiffness: 150 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    
   <>
   
    <section
    
    
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-white text-neutral-900"
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>
      
      {/* Heading */}
     
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          My Projects 
        </h2>
        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto text-base md:text-lg">
          A collection of projects showcasing design and development skills.
        </p>
      </div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent mt-10 h-[1px] w-full" />

      {/* Projects List (kept same layout as yours) */}
      <div className="mt-12 flex flex-col gap-10">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {/* Floating Preview */}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-60 w-auto rounded-xl shadow-xl border border-neutral-200 pointer-events-none"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section> 
    <Footer/> 
   </>
  );
};

export default Projects;
