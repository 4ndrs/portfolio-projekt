import { createPortal } from "react-dom";
import { useState } from "react";

import SendMessage from "./SendMessage";

import styles from "./Contact.module.css";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setOpen(true);
  };

  const modalDialog =
    typeof window === "object" ? (
      createPortal(
        <SendMessage onClose={() => setOpen(false)} />,
        document.body
      )
    ) : (
      <></>
    );

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h1 className="title">Contact</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.names}>
            <input
              placeholder="First Name"
              className={`${styles.field} ${styles.nameField}`}
            />
            <input
              placeholder="Last Name"
              className={`${styles.field} ${styles.nameField}`}
            />
          </div>
          <input placeholder="Your Email" className={`${styles.field}`} />
          <textarea
            placeholder="Message"
            className={`${styles.field} ${styles.messageField}`}
          />
          <button type="submit" className={`${styles.button}`}>
            SEND
          </button>
        </form>
      </div>

      {open && modalDialog}
    </section>
  );
};

export default Contact;
