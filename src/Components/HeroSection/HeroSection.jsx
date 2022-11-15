import { Button } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import styles from "./HeroSection.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import resume from "../../assets/Vishal_Mahale_Resume.pdf";

const HeroSection = () => {
  return (
    <div className={styles.rootCont}>
      <div className={styles.nameCont}>
        <p>Hi,</p>
        <p>
          I am <span>Vishal Mahale</span>
        </p>
        <p>Web Developer</p>
        <a href={resume} target="_blank" download>
          <Button
            onClick={() => window.open(resume)}
            colorScheme="pink"
            rightIcon={<DownloadIcon />}
          >
            Resume
          </Button>
        </a>
      </div>

      <div className={styles.photoCont}>
        <img src="/vishal.jpg" alt="vishalimg" className={styles.heroImg} />
      </div>
      <div className={styles.socialCont}>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/vishal-mahale-87688a192/"
          target="_blank"
          className={styles.linkdin}
        >
          <AiFillLinkedin size={40} />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/vishalmahale11"
          target="_blank"
          className={styles.github}
        >
          <AiOutlineGithub size={40} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
