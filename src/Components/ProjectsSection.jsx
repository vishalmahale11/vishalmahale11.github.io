import { ProjectCard } from "./ProjectCard";
import styles from "./Styles/ProjectsSection.module.css";
import { SiExpress, SiJavascript, SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiChakraui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import Fade from "react-reveal/Fade";
const projects = [
  {
    name: "Bitrix24.com Clone",
    img: "/Bitrix.png",
    link: "https://bitrix24clone.netlify.app/",
    git: "https://github.com/Hashal890/gusty-cover-2254",
    about:
      "Bitrix24 is a client management solution that provides a platform for businesses to organize and track interactions with potential or existing clients and partners.",
    stacks: [
      <GrReactjs className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
      <DiNodejsSmall className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
    ],
  },
  {
    name: "KindMeal.com clone",
    img: "/KindMeal.png",
    link: "https://kindmealreact.netlify.app/",
    git: "https://github.com/vishalmahale11/pink-purpose-5182/tree/master/kindmeal.my",
    about:
      "Malaysia's No.1 meat-free lifestyle platform. Grab free coupons for exciting meal deals, discover delicious food and share delightful moments with food ...",
    stacks: [
      // <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
      <GrReactjs className={styles.stackIcon} />,
      <SiChakraui className={styles.stackIcon} />,
    ],
  },
  {
    name: "firstpost clone",
    img: "/firstpost.png",
    link: " https://willowy-swan-73608b.netlify.app/",
    git: "https://github.com/Ashvary1996/firstPost",
    about:
      "Firstpost is an Indian online news and media website. The site is a part of the Network 18 media conglomerate owned by Reliance Industries, which also runs CNN-News18 and CNBC-TV18.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Nordstormrack",
    img: "/Nordstormrack.png",
    link: "https://delicate-trifle-c90c9b.netlify.app/",
    git: "https://github.com/Surendrakumar878/masaiyoutofinalproject",
    about:
      "Nordstromrack is a online shopping portal app. It is a American based ecommerce platform where you can buy the daily usable products.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "YouTube",
    img: "/Youtube.png",
    link: "https://phenomenal-meerkat-b3e9d8.netlify.app/",
    git: "https://github.com/vishalmahale11/You-tTube-Clone",
    about:
      "Youtube clone where you can search the videos. Also it shows the popular videos on the front page.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
];
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  );
}
