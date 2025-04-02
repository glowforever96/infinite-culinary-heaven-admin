"use client";
import Modal from "../modal";
import RegisterTopic from "../topic/register-topic";
import * as styles from "./button.css";
import useModalState from "@/store/useModalState";

interface ButtonProps {
  buttonText: string;
  type: "TOPIC" | "CONTEST";
}

export default function Button({ buttonText, type }: ButtonProps) {
  const { isOpen, open, close } = useModalState();

  return (
    <>
      <button onClick={open} className={styles.button}>
        {buttonText}
      </button>
      {isOpen && (
        <Modal onClose={close}>
          {type === "TOPIC" ? <RegisterTopic /> : null}
        </Modal>
      )}
    </>
  );
}
