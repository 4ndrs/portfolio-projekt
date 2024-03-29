"use client";

import { createPortal } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import SendMessage from "./SendMessage";

import styles from "./Contact.module.css";

import { type Data, type Status, DataSchema } from "@/interfaces";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data>();
  const [showTip, setShowTip] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    mode: "onBlur",
    resolver: zodResolver(DataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setData(data);

    setOpen(true);
  });

  const handleClose = (status?: Status) => {
    setData(undefined);

    if (status === "OK") {
      reset();
    } else {
      setShowTip(true);
    }

    setOpen(false);
  };

  const modalDialog =
    typeof window === "object" && typeof data !== "undefined" ? (
      createPortal(
        <SendMessage onClose={handleClose} data={data} />,
        document.body,
      )
    ) : (
      <></>
    );

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h1 className="title">Contact</h1>

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.names}>
            <div className={styles.nameField}>
              <input
                id="firstName"
                placeholder="First Name"
                aria-label="First Name"
                aria-invalid={errors.name?.first ? "true" : "false"}
                className={`${styles.field} ${
                  errors.name?.first ? styles.invalid : ""
                }`}
                {...register("name.first")}
              />
              {errors.name?.first && (
                <label htmlFor="firstName" className={styles.errorMessage}>
                  {errors.name.first.message}
                </label>
              )}
            </div>

            <div className={styles.nameField}>
              <input
                id="lastName"
                placeholder="Last Name (optional)"
                aria-label="Last Name (optional)"
                aria-invalid={errors.name?.last ? "true" : "false"}
                className={`${styles.field} ${
                  errors.name?.last ? styles.invalid : ""
                }`}
                {...register("name.last")}
              />
              {errors.name?.last && (
                <label htmlFor="lastName" className={styles.errorMessage}>
                  {errors.name.last.message}
                </label>
              )}
            </div>
          </div>

          <div className={styles.fieldContainer}>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              aria-label="Your Email"
              aria-invalid={errors.email ? "true" : "false"}
              className={`${styles.field} ${
                errors.email ? styles.invalid : ""
              }`}
              {...register("email")}
            />
            {errors.email?.message && (
              <label htmlFor="email" className={styles.errorMessage}>
                {errors.email.message}
              </label>
            )}
          </div>

          <div className={styles.fieldContainer}>
            <textarea
              id="message"
              placeholder="Message"
              aria-label="Message"
              aria-invalid={errors.message ? "true" : "false"}
              className={`${styles.field} ${styles.messageField} ${
                errors.message ? styles.invalid : ""
              }`}
              {...register("message")}
            />
            {errors.message?.message && (
              <label htmlFor="message" className={styles.errorMessage}>
                {errors.message.message}
              </label>
            )}
          </div>

          <button type="submit" className="button" disabled={!!data}>
            SEND
          </button>
        </form>

        {showTip && (
          <span className={styles.tip}>
            <strong>TIP:</strong> You can also email me directly at{" "}
            <a href="mailto:me@4ndrs.dev">me@4ndrs.dev</a>
          </span>
        )}
      </div>

      {open && modalDialog}
    </section>
  );
};

export default Contact;
