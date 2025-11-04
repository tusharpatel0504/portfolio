import React from "react";

const skills = [

  { title: "UI/UX", desc: "Designing user interfaces and experiences" },
  { title: "HTML", desc: "Web structure language" },
  { title: "CSS", desc: "Designs web appearance" },
  { title: "Javascript", desc: "Makes web interactive" },  
  { title: "Typescript", desc: "JavaScript with types" },
  { title: "React.js", desc: "UI component library" },
  { title: "Redux Toolkit", desc: "State management" },
  { title: "MySQL", desc: "Relational database management" },
  { title: "MongoDB", desc: "NoSQL document database" },
  { title: "Node.js", desc: "JavaScript server runtime" },
  { title: "C", desc: "Efficient system programming" },
  { title: "C++", desc: "Object-oriented C" },  
  { title: "Java", desc: "Object-oriented programming" },
  { title: "DSA", desc: "Data Structures & Algorithms" },
  { title: "RESTful APIs", desc: "Web service design" },
  { title: "Bootstrap", desc: "CSS framework" },
  { title: "Tailwind CSS", desc: "Utility-first CSS framework" },  
  { title: "Git", desc: "Version control tool" },  
  { title: "Figma", desc: "Collaborative design tool" },
  { title: "Postman", desc: "API testing tool" },
  { title: "Firebase", desc: "Authentication and Authorization" },
  { title: "Express.js", desc: "Defining routes" },
  { title: "Socket.io", desc: "Real-time communication" }



  


  



];




const Skills = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-xl font-semibold uppercase tracking-widest mb-8 text-gray-300">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-1">{skill.title}</h3>
            <p className="text-sm text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;