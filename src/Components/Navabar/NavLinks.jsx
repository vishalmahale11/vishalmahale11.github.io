import { HamburgerIcon } from "@chakra-ui/icons";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-scroll";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
import resume from "../../assets/Vishal_Mahale_Resume.pdf";

function NavLinks() {
  const [size] = React.useState("full");
  let [width, setWidth] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleClick = () => {
    onOpen();
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });
  return width > 768 ? (
    <Box display={"flex"} alignItems="center" gap={"24px"}>
      <Link
        smooth={true}
        duration={1000}
        spy={true}
        className={styles.navLink}
        to="about"
      >
        About
      </Link>
      <Link
        smooth={true}
        duration={1000}
        spy={true}
        className={styles.navLink}
        to="skills"
      >
        Skills
      </Link>
      <Link
        smooth={true}
        duration={1000}
        spy={true}
        className={styles.navLink}
        to="projects"
      >
        Projects
      </Link>
      <Link
        smooth={true}
        duration={1000}
        spy={true}
        className={styles.navLink}
        to="contact"
      >
        Contact Me
      </Link>
      <a href={resume} target="_blank" download>
        <Button
          onClick={() => window.open(resume)}
          colorScheme="pink"
          rightIcon={<DownloadIcon />}
        >
          Resume
        </Button>
      </a>
    </Box>
  ) : (
    <>
      <Button onClick={() => handleClick(size)} key={size} m={4}>
        {<HamburgerIcon />}
      </Button>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent className={styles.menu__overlay}>
          <DrawerCloseButton />
          <DrawerHeader>
            <NavLogo className={styles.DrawerNav} />
          </DrawerHeader>
          <hr />
          <DrawerBody>
            <Box>
              <Box>
                <Link
                  smooth={true}
                  duration={1000}
                  spy={true}
                  className={styles.drawer__link}
                  to="about"
                  onClick={() => {
                    onClose();
                  }}
                >
                  <Heading>About</Heading>
                </Link>
              </Box>
              <hr />
              <Box>
                <Link
                  smooth={true}
                  duration={1000}
                  spy={true}
                  to="projects"
                  onClick={() => {
                    onClose();
                  }}
                  className={styles.drawer__link}
                >
                  {" "}
                  <Heading>Projects</Heading>{" "}
                </Link>
              </Box>
              <hr />
              <Box>
                <Link
                  smooth={true}
                  duration={1000}
                  spy={true}
                  to="skills"
                  onClick={() => {
                    onClose();
                  }}
                  className={styles.drawer__link}
                >
                  <Heading>Skills</Heading>
                </Link>
              </Box>
              <hr />
              <Box>
                <Link
                  smooth={true}
                  duration={1000}
                  spy={true}
                  to="contact"
                  onClick={() => {
                    onClose();
                  }}
                  className={styles.drawer__link}
                >
                  <Heading>Contact</Heading>
                </Link>
              </Box>
              <hr />
              <Box mt={5} mb={2}>
                <a href={resume} target="_blank" download>
                  <Button
                    onClick={() => window.open(resume)}
                    colorScheme="pink"
                    rightIcon={<DownloadIcon />}
                  >
                    Resume
                  </Button>
                </a>
              </Box>
              <hr />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavLinks;
