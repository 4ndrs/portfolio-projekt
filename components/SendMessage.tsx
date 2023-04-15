import { useEffect, useState } from "react";

import Loading from "./Loading";

import styles from "./SendMessage.module.css";

import { inter } from "@/fonts";

type Props = { onClose: () => void };

const SendMessage = ({ onClose }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  const handleClose = () => {
    setVisible(false);
    onClose();
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
