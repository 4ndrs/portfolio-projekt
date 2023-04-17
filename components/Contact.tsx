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

        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.names}>
            <div className={styles.nameField}>
              <input
                placeholder="First Name"
                aria-label="First Name"
                className={`${styles.field} ${
                  errors.name?.first ? styles.invalid : ""
                }`}
                {...register("name.first")}
              />
              {errors.name?.first && (
                <div className={styles.errorMessage}>
                  {errors.name.first.message}
                </div>
              )}
            </div>

            <div className={styles.nameField}>
              <input
                placeholder="Last Name"
                aria-label="Last Name"
                className={`${styles.field} ${
                  errors.name?.last ? styles.invalid : ""
                }`}
                {...register("name.last")}
              />
              {errors.name?.last && (
                <div className={styles.errorMessage}>
                  {errors.name.last.message}
                </div>
              )}
            </div>
          </div>

          <div className={styles.fieldContainer}>
            <input
              placeholder="Your Email"
              aria-label="Your Email"
              className={`${styles.field} ${
                errors.email ? styles.invalid : ""
              }`}
              {...register("email")}
            />
            {errors.email?.message && (
              <div className={styles.errorMessage}>{errors.email.message}</div>
            )}
          </div>

          <div className={styles.fieldContainer}>
            <textarea
              placeholder="Message"
              aria-label="Message"
              className={`${styles.field} ${styles.messageField} ${
                errors.message ? styles.invalid : ""
              }`}
              {...register("message")}
            />
            {errors.message?.message && (
              <div className={styles.errorMessage}>
                {errors.message.message}
              </div>
            )}
          </div>

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
