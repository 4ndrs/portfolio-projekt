import styles from "./Contact.module.css";

const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title} id="contact">
        Contact
      </h1>
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
    </section>
  );
};

export default Contact;
