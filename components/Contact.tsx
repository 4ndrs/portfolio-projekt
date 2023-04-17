import { createPortal } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SendMessage from "./SendMessage";

import styles from "./Contact.module.css";

import type { Data, Status } from "@/interfaces";

const schema = z.object({
  name: z.object({
    first: z
      .string()
      .min(1, { message: "Required" })
      .max(60, { message: "Maximum character limit is 60" }),
    last: z
      .string()
      .max(60, { message: "Maximum character limit is 60" })
      .optional(),
  }),
  email: z
    .string()
    .email()
    .max(60, { message: "Maximum character limit is 60" }),
  message: z
    .string()
    .min(5, { message: "Minimum character limit is 5" })
    .max(5000, { message: "Maximum character limit is 5000" }),
});

type Schema = z.infer<typeof schema>;

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Data>();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    setData(data);

    setOpen(true);
  });

  const handleClose = (status?: Status) => {
    setData(undefined);

    if (status === "OK") {
      reset();
    }

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
                placeholder="Last Name"
                aria-label="Last Name"
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

          <label className={styles.fieldContainer}>
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
          </label>

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
