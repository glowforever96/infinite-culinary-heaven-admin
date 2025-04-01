import { ReactNode } from "react";
import { createPortal } from "react-dom";
import * as styles from "./modal.css";
import Image from "next/image";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeBtn}>
          <Image
            src="/icons/close.svg"
            width={42}
            height={42}
            alt="닫기 버튼"
          />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
