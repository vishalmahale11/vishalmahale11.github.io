// import { Box, Heading, Text, Img } from "@chakra-ui/react";
import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div id="about">
      <div>
        <p className={styles.aboutName}>About Me</p>
        <div className={styles.aboutsection}>
          <div className={styles.imagediv}>
            <img
              className={styles.aboutimg}
              src="https://i.pinimg.com/originals/a1/ba/2c/a1ba2c150d44d387f565a87c54351bf8.gif"
              alt="img"
            />
          </div>
          <div className={styles.details}>
            <p>
              Aspiring full-stack developer with a specialization in MERN stack.
              Possesses the ability to understand business requirements to
              translate them into technical requirements. A quick learner, eager
              to work in a challenging environment, and proactive in time
              management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// <Box className="main" h={{ sm: "auto", md: "auto", lg: "80vh" }}>
// <Box display="inline-flex" borderBottom="4px solid black">
//   <Heading>
//     <span className={styles.about}>About Me</span>
//   </Heading>
// </Box>
// <Text mt="20px" fontSize="20px" fontWeight="300">
//   Aspiring full-stack developer with a specialization in MERN stack.
//   Possesses the ability to understand business requirements to
//   translate them into technical requirements. A quick learner, eager
//   to work in a challenging environment, and proactive in time
//   management.
// </Text>

// <Box>
//   <Img
//     className={styles.aboutimg}
//     src="https://i.pinimg.com/originals/a1/ba/2c/a1ba2c150d44d387f565a87c54351bf8.gif"
//     alt="img"
//   />
// </Box>
// </Box>
