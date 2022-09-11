import styles from "./Styles/AboutSection.module.css";
import Fade from "react-reveal/Fade";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img src="/Vishal_pic.png" alt="" className={styles.profilePic} />
          </div>
          <div>
            <h2>
              I am <span>Vishal Mahale</span>{" "}
            </h2>
            <p>
              Analytical and problem solver ,want to acquire a position within
              the field of information technology with a company where I can
              demonstrate my skills, knowledge and desire to grow as an IT
              professional. Looking forward to work as a full stack web
              developer.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
