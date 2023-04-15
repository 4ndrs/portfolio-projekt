import { useEffect, useState } from "react";

import Loading from "./Loading";

import styles from "./SendMessage.module.css";

import { inter } from "@/fonts";

type Props = { onClose: () => void };

const SendMessage = ({ onClose }: Props) => {
  const [visible, setVisible] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  useEffect(() => {
    if (close) {
      setVisible(false);
      setTimeout(() => onClose(), 200);
    }
  }, [close, onClose]);

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
        <Loading />
      </div>
    </aside>
  );
};

export default SendMessage;
