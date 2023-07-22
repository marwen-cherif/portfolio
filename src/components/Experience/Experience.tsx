import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../../styles.ts";
import { experiences } from "../../constants";
import { resume } from "../../assets";
import { textVariant } from "../../utils/motion.ts";
import SectionWrapper from "../../atoms/SectionWrapper.tsx";
import DownloadIcon from "../../atoms/Icons/DownloadIcon/DownloadIcon.tsx";
import { LinkButton } from "../../atoms/Button.ts";
import { ExperienceCard } from "./ExperienceCard.tsx";

export const Experience = () => {
  return (
    <SectionWrapper idName="work">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <LinkButton
              className="live-demo flex justify-between
              sm:text-[18px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 pl-3 pr-3
              whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px]
              w-[125px] h-[46px] rounded-[10px] bg-jetLight
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
              href={"/Marwen_Cherif_EN.pdf"}
              target="_blank"
            >
              MY RESUME
              <DownloadIcon />
            </LinkButton>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};
