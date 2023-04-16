import { useEffect, useState } from "react";
import Loading from "./Loading";

import styles from "./SendMessage.module.css";
import { inter } from "@/fonts";

import type { Data, Status } from "@/interfaces";

type Props = { data: Data; onClose: (status?: Status) => void };

const SendMessage = ({ onClose, data }: Props) => {
  const [visible, setVisible] = useState(false);
  const [close, setClose] = useState(false);
  const [status, setStatus] = useState<Status>();

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);

    const sendData = async () => {
      const success = Math.random() > 0.3;

      console.log(data);

      if (success) {
        setStatus("OK");
        return;
      }

      setStatus("ERROR");
    };

    const id = setTimeout(sendData, 3000);

    return () => clearTimeout(id);
  }, [data]);

  useEffect(() => {
    if (close) {
      setVisible(false);
      setTimeout(() => onClose(status), 200);
    }
  }, [close, onClose, status]);

  const handleClose = () => {
    setClose(true);
  };

  return (
    <aside className={inter.className}>
      <div
        className={`${styles.backdrop} ${visible ? styles.visible : ""}`}
        onClick={handleClose}
      />
      <div className={`${styles.container} ${visible ? styles.move : ""}`}>
        {!status ? (
          <Loading />
        ) : status === "OK" ? (
          <span>Message sent</span>
        ) : (
          <span className={styles.errorText}>
            Unable to send the message
            <br />
            Please try again later
          </span>
        )}

        {status && (
          <button className={styles.button} onClick={handleClose}>
            OK
          </button>
        )}
      </div>
    </aside>
  );
};

export default SendMessage;
