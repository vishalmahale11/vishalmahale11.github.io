import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";

function NavLogo() {
  return (
    <Heading className={styles.logo}>
      {<img src="./vmlogo.jpg" alt="Logo" />}
    </Heading>
  );
}

export default NavLogo;
