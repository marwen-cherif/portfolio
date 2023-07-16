import { motion } from "framer-motion";
import { BallCanvas } from "../atoms/BallCanvas/BallCanvas";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../atoms/SectionWrapper.tsx";

export const Tech = () => {
  return (
    <SectionWrapper idName="Tech">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
