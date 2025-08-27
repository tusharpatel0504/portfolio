import React from "react";

const skills = [
  { title: "Html", desc: "Web structure language" },
  { title: "Css", desc: "Designs web appearance" },
  { title: "Javascript", desc: "Makes web interactive" },
  { title: "Typescript", desc: "JavaScript with types" },
  { title: "React.js", desc: "UI component library" },
  { title: "MongoDB", desc: "NoSQL document database" },
  { title: "Node.js", desc: "JavaScript server runtime" },
  { title: "C", desc: "Efficient system programming" },
  { title: "C++", desc: "Object-oriented C" },
  { title: "Git", desc: "Version control tool" },
  { title: "Figma", desc: "Collaborative design tool" },
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
