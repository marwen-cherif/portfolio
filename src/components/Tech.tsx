import { motion } from "framer-motion";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../atoms/SectionWrapper.tsx";
import { $Image } from "./Tech.styles.ts";

export const Tech = () => {
  return (
    <SectionWrapper idName="Tech">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-20 h-20" key={technology.name}>
            <$Image
              title={technology.name}
              alt={technology.name}
              src={technology.icon}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
