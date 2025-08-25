'use client';

import React, { useState } from 'react';

import styles from '@/components/Toast/Toast.module.css';

import Button from '../Button/Button';

type ToastType = 'success' | 'error' | 'info';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

const TOAST_MESSAGES: Record<ToastType, string> = {
  success: '✅ Operation completed successfully!',
  error: '❌ An error occurred. Please try again.',
  info: 'ℹ This is an informational message.',
};

const Toast = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  // Show a new toast
  const showToast = (type: ToastType) => {
    const id = Date.now();
    const newToast: ToastItem = { id, message: TOAST_MESSAGES[type], type };

    setToasts((prev) => [...prev, newToast]);

    // Remove toast after 4 seconds
    setTimeout(() => removeToast(id), 4000);
  };

  // Remove toast by id
  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className={styles.toastContainer}>
      <div className={styles.buttons}>
        <Button variant="primary" onClick={() => showToast('success')}>
          Show Success Toast
        </Button>
        <Button variant="danger" onClick={() => showToast('error')}>
          Show Error Toast
        </Button>
        <Button variant="secondary" onClick={() => showToast('info')}>
          Show Info Toast
        </Button>
      </div>

      <div className={styles.toastList}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${styles.toast} ${styles[toast.type]}`}
            role="alert"
          >
            <span>{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className={styles.closeButton}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toast;
