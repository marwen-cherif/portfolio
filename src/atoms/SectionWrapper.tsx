import { motion } from "framer-motion";
import { styles } from "../styles.ts";
import { staggerContainer } from "../utils/motion.ts";
import { FC, PropsWithChildren } from "react";

export const SectionWrapper: FC<PropsWithChildren<{ idName: string }>> = ({
  children,
  idName,
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
};

export default SectionWrapper;
