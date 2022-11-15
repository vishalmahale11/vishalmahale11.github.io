import React from "react";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div id="skills">
      <p className={styles.skillsName}>Skills</p>
      <div className={styles.skillmain}>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png"
            alt="html"
          />
          <p className={styles.techname}>HTML</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg"
            alt="CSS"
          />
          <p className={styles.techname}>CSS</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/javascript.4c1b5332c1b1057928f6f06cf972c91c.svg"
            alt="JavaScript"
          />
          <p className={styles.techname}>JavaScript</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/react.4e0c97009b885bfa75c5412262a46f5f.svg"
            alt="React"
          />
          <p className={styles.techname}>React</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/redux.7fe607aacc31f6e6199e70f16aae407e.svg"
            alt="Redux"
          />
          <p className={styles.techname}>Redux</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/typescript.17936c69824e11a996c4.png"
            alt="TypeScript"
          />
          <p className={styles.techname}>TypeScript</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/nodejs.10c9e2aa0ca7edf36fceae25fec038a1.svg"
            alt="NodeJS"
          />
          <p className={styles.techname}>NodeJS</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/express.4925c0127df8857c18b38329795ce88f.svg"
            alt="ExpressJS"
          />
          <p className={styles.techname}>ExpressJS</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg"
            alt="MongoDB"
          />
          <p className={styles.techname}>MongoDB</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/database.24991eee32623f453b1c.png"
            alt="DSA"
          />
          <p className={styles.techname}>DSA</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/chakra.15320604467d004df871.png"
            alt="Chakra UI"
          />
          <p className={styles.techname}>Chakra UI</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/materialui.87264df237ee700ba78bb58ff701a6d3.svg"
            alt="Material UI"
          />
          <p className={styles.techname}>Material UI</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/bootstrap.3b8c7115a9384838c588eb5514005c8c.svg"
            alt="BootStrap"
          />
          <p className={styles.techname}>Chakra UI</p>
        </div>
      </div>
      <p className={styles.toolsName}>Tools</p>
      <div className={styles.toolMain}>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/git.c08353563539c6459b353f29d8dd7bf2.svg"
            alt="GitHub"
          />
          <p className={styles.techname}>GitHub</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://debobrota-haldar.netlify.app/static/media/npm.87689eab730642c86d2b01f3ef4a19e3.svg"
            alt="NPM"
          />
          <p className={styles.techname}>NPM</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="data:image/png;base64,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"
            alt="Postman"
          />
          <p className={styles.techname}>Postman</p>
        </div>
      </div>
      <p className={styles.toolsName}>Soft Skills</p>
      <div className={styles.toolMain}>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://th.bing.com/th/id/OIP.o9355cmhPp_yUTy6eELGOgHaHn?w=192&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Collaborative"
          />
          <p className={styles.techname}>Collaborative</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="https://th.bing.com/th/id/OIP.xW1s_p_R1QUa5ftvApDwOAHaEn?w=311&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Problem Solver"
          />
          <p className={styles.techname}>Problem Solver</p>
        </div>
        <div className={styles.skilldiv}>
          <img
            className={styles.imgskill}
            src="data:image/jpeg;base64,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"
            alt="Creative"
          />
          <p className={styles.techname}>Creative</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
