import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import styles from "./projectcard.module.css";

const ProjectCard = ({ name, img, git, link, stacks, about }) => {
  return (
    <div className={styles.projectCont}>
      <img src={img} alt="" className={styles.image} />
      <p style={{ fontSize: "25px", fontWeight: "400", margin: "5px 0 0 0" }}>
        {name}
      </p>
      <div className={styles.stacksDiv2}>{stacks.map((stack) => stack)}</div>

      <div className={styles.linkCont}>
        <a href={git} rel="noreferrer" target="_blank">
          <div className={styles.linkDiv}>
            <AiOutlineGithub />
            <p>Code</p>
          </div>
        </a>
        <div className={styles.stacksDiv}>{stacks.map((stack) => stack)}</div>

        <a href={link} rel="noreferrer" target="_blank">
          <div className={styles.linkDiv}>
            <BsLink />
            <p>Demo</p>
          </div>
        </a>
      </div>

      <div className={styles.projInfo}>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
