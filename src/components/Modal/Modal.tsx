"use client";

import React, { useEffect, useState } from "react";

import styles from "@/components/Modal/Modal.module.css";

import Button from "../Button/Button";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Add/remove Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]); 

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Open Modal
      </Button>

      {isOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={handleOverlayClick}
        >
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Modal Title</h2>
              <button
                onClick={closeModal}
                className={styles.closeButton}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className={styles.modalContent}>
              <p>This is a sample modal dialog.</p>
              <p>Press ESC or click outside to close this modal.</p>
            </div>

            <div className={styles.modalFooter}>
              <Button variant="secondary" onClick={closeModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={closeModal}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
