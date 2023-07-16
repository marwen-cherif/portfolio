import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FC } from "react";
import SectionWrapper from "../atoms/SectionWrapper.tsx";

const ServiceCard: FC<{ index: number; title: string; icon: string }> = ({
  index,
  title,
  icon,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export const About = () => {
  return (
    <SectionWrapper idName="about">
      <div className="-mt-[6rem]">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          I'm a skilled Software Developer with a passion for taking on
          challenging and innovative projects. With a great expertise in HTML5,
          CSS3, JavaScript (ES5, ES6), Typescript, React, Node.js, PHP, and
          various other technologies, i've demonstrated proficiency in
          developing responsive and visually appealing web applications. My
          professional journey includes successful contributions to diverse
          projects, such as Bouygues's Reflex Ticketing application, Revers.io
          platform, and Enedis Showroom Linky web application. My adaptable
          nature, and fluency in French, English, and Arabic further enhance my
          capabilities. My commitment to continuous learning and dedication to
          delivering high-quality results make me an invaluable asset to any
          development team.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
