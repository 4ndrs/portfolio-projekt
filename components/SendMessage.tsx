import axios from "axios";
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
      try {
        await axios.post("/api/send", data);
        setStatus("OK");
      } catch (error) {
        setStatus("ERROR");
      }
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
    if (!status) {
      return;
    }

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
          <span className={styles.text}>Message sent</span>
        ) : (
          <span className={`${styles.errorText} ${styles.text}`}>
            Unable to send the message
            <br />
            Please try again later
          </span>
        )}

        {status && (
          <button
            autoFocus
            className={`${styles.button} button`}
            onClick={handleClose}
          >
            OK
          </button>
        )}
      </div>
    </aside>
  );
};

export default SendMessage;
