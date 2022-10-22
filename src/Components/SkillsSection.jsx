import { makeStyles } from "@material-ui/styles";
import { SkillCard } from "./SkillCard";
import styles from "./Styles/SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiMongodb, SiNodedotjs, SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { MdSyncProblem } from "react-icons/md";
import { FcReading } from "react-icons/fc";
import { GoDatabase } from "react-icons/go";
import Fade from "react-reveal/Fade";
import GitHubCalendar from "react-github-calendar";

export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <p>Skills</p>
        <p>Front-End skills</p>
        <div className={styles.skillsContFront}>
          <SkillCard
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
          <SkillCard
            skill="Redux"
            icon={
              <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
            }
          />
          <SkillCard
            skill="JavaScript"
            icon={
              <SiJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />

          <SkillCard
            skill="Chakra Ui"
            icon={
              <SiChakraui className={`${styles.skillIcon} ${styles.muiIcon}`} />
            }
          />

          <SkillCard
            skill="Html5"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
          <SkillCard
            skill="CSS"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </div>

        <p>Back-End skills</p>
        <div className={styles.skillsContBack}>
          <SkillCard
            skill="NodeJs"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />
          <SkillCard
            skill="Express"
            icon={
              <SiExpress
                className={`${styles.skillIcon} ${styles.ExpressIcon}`}
              />
            }
          />
          <SkillCard
            skill="MongoDB"
            icon={
              <SiMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
          <SkillCard
            skill="Data Structure"
            icon={
              <GoDatabase
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </div>

        <p>Tools</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
          <SkillCard
            skill="Postman"
            icon={
              <SiPostman className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
        <p>Soft Skills</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Collaborative"
            icon={
              <RiTeamFill className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
          <SkillCard
            skill="Problem solver"
            icon={
              <MdSyncProblem
                className={`${styles.skillIcon} ${styles.gitIcon}`}
              />
            }
          />
          <SkillCard
            skill="Creative"
            icon={
              <FcReading className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </div>
        <p style={{ fontSize: "40px", fontWeight: "400", color: "black" }}>
          Statistics
        </p>
        <div className={styles.stat}>
          <div className={styles.main}>
            <p>1200+ hrs</p>
            <p>Coding</p>
          </div>
          <div className={styles.main}>
            <p>20+</p>
            <p>Mini project</p>
          </div>
          <div className={styles.main}>
            <p>500+</p>
            <p>DSA Question</p>
          </div>
          <div className={styles.main}>
            <p>100+ hrs</p>
            <p>Soft Skills</p>
          </div>
        </div>
        <p style={{ fontSize: "40px", fontWeight: "400", color: "black" }}>
          Github Statistics
        </p>
        <div className={styles.git}>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=vishalmahale11"
            alt="Vishal Mahale"
          />
        </div>

        <p style={{ fontSize: "40px", fontWeight: "400", color: "black" }}>
          Github Calender
        </p>

        <div style={{ margin: "auto" }}>
          <GitHubCalendar
            style={{
              border: "1px solid lightgray",
              padding: "20px",
              borderRadius: "3px",
            }}
            username="vishalmahale11"
            year={new Date().getFullYear()}
          />
        </div>
      </Fade>
    </div>
  );
}
