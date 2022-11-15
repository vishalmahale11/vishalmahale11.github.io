import { Alert, AlertIcon, Button, FormControl } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import styles from "./contact.module.css";

const Contact = () => {
  const handleOnSubmit = () => {};

  return (
    <>
      <div className={styles.rootCont} id="contact">
        <p className={styles.contactHeading}>Contact Me</p>
        <div className="App">
          <FormControl onSubmit={handleOnSubmit}>
            <input
              label="Email"
              className={styles.feedback_input}
              name="email"
              placeholder="Email…"
              required
            />
            <input
              className={styles.feedback_input}
              label="Name"
              name="from_name"
              placeholder="Name…"
              required
            />
            <input
              className={styles.feedback_input}
              label="Message"
              name="message"
              placeholder="Message…"
              required
            />
            <Button colorScheme="pink" type="submit">
              Send
            </Button>
          </FormControl>
        </div>
        <hr style={{ width: "95vw" }} />
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        <p className={styles.text}>You can reach out to me at:</p>
        <div className={styles.iconsCont}>
          <a href="vishalmahale974@gmail.com">
            <AiOutlineMail className={styles.emailicon} />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-mahale-87688a192/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.linkedInIcon} />
          </a>
          <a
            href="https://github.com/vishalmahale11"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub className={styles.gitIcon} />
          </a>
        </div>
        <p className={styles.text}>Phone: +91 7083102944</p>{" "}
        <p className={styles.text}>Email: vishalmahale974@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
