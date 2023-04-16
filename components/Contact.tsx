import { createPortal } from "react-dom";
import { useState } from "react";
import SendMessage from "./SendMessage";
import styles from "./Contact.module.css";

import type { Data, Status } from "@/interfaces";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setData({
      name: {
        first: "Ruby",
        last: "Kurosawa",
      },
      email: "ruby@kurosawa",
      message: "hello",
    });

    setOpen(true);
  };

  const handleClose = (status?: Status) => {
    setData(undefined);

    console.log("Closed with status: ", status);

    setOpen(false);
  };

  const modalDialog =
    typeof window === "object" && typeof data !== "undefined" ? (
      createPortal(
        <SendMessage onClose={handleClose} data={data} />,
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
          <button type="submit" className="button">
            SEND
          </button>
        </form>
      </div>

      {open && modalDialog}
    </section>
  );
};

export default Contact;
