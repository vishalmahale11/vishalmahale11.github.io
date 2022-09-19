import styles from "./Styles/AboutSection.module.css";
import Fade from "react-reveal/Fade";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
              alt=""
              className={styles.profilePic}
            />
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
