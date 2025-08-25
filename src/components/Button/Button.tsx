"use client";

import React, { ButtonHTMLAttributes } from "react";

import styles from "@/components/Button/Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  isLoading = false,
  children,
  onClick,
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${disabled || isLoading ? styles.disabled : ""
        } ${className}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <span className={styles.spinner}></span> : children}
    </button>
  );
};

export default Button;
