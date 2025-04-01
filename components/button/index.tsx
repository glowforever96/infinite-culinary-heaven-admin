"use client";
import { useState } from "react";
import Modal from "../modal";
import RegisterTopic from "../topic/register-topic";
import * as styles from "./button.css";

interface ButtonProps {
  buttonText: string;
  type: "TOPIC" | "CONTEST";
}

export default function Button({ buttonText, type }: ButtonProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpenModal(true)} className={styles.button}>
        {buttonText}
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          {type === "TOPIC" ? <RegisterTopic /> : null}
        </Modal>
      )}
    </>
  );
}
