import { Box } from "@chakra-ui/react";
import React from "react";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <Box className={styles.navbar}>
      <Box>
        <NavLogo className={styles.navlogo} />
      </Box>
      <Box>
        <NavLinks />
      </Box>
    </Box>
  );
}

export default Navbar;
