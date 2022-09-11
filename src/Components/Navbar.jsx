import styles from "./Styles/Navbar.module.css"
import { Link } from "react-scroll"
export function Navbar() {
  return (
    <div className={styles.root}>
      <Link
        to="hero"
        smooth={true}
        duration={1000}
        spy={true}
        hashSpy={true}
        activeClass={styles.active}
      >
        <div className={styles.navlogo}>
          <img src="/vmlogo.jpg" alt="" className={styles.logoimg} />
        </div>
      </Link>
      <div className={styles.navsCont}>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>About</div>
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>Skills</div>
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>Projects</div>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>Contact</div>
        </Link>
      </div>
    </div>
  )
}
