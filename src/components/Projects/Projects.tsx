import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles.ts";
import { projects } from "../../constants";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion.ts";
import SectionWrapper from "../../atoms/SectionWrapper.tsx";
import { ProjectCard } from "./ProjectCard.tsx";

export const Projects = () => {
  const [active, setActive] = useState(projects[1].id);

  return (
    <SectionWrapper idName="projects">
      <div className="-mt-[6rem]">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Case Studies</p>
          <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          >
            These projects demonstrate my expertise with practical examples of
            some of my work, including brief descriptions and links to code
            repositories and live demos. They showcase my ability to tackle
            intricate challenges, adapt to various technologies, and efficiently
            oversee projects.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                project={project}
                active={active}
                onClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
