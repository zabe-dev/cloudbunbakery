"use client";

import { useId, useRef } from "react";
import Image from "next/image";
import styles from "./MenuPreview.module.css";

export function MenuPreview({
  label = "Original Menu",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={`bracket ${light ? "light" : ""} ${styles.trigger}`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        [ {label} ]
      </button>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className={styles.panel}>
          <header className={styles.header}>
            <h2 id={titleId}>Original menu</h2>
            <button
              type="button"
              autoFocus
              onClick={() => dialog.current?.close()}
              aria-label="Close original menu"
            >
              Close ×
            </button>
          </header>
          <div className={styles.content}>
            <Image
              src="/images/menu.webp"
              alt="Cloud Bun Bakery original menu with products, prices, and box sizes"
              width={1024}
              height={1536}
              sizes="(max-width: 760px) 94vw, 720px"
              className={styles.image}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
