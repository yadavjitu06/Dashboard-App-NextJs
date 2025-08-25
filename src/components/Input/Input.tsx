import React from "react";
import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

import styles from "@/components/Input/Input.module.css";

interface InputProps {
  type: "text" | "number" | "textarea" | "select" | "date";
  label: string;
  placeholder?: string;
  options?: string[];
  name?: string;
}

type Props = InputProps &
  (
    | Omit<InputHTMLAttributes<HTMLInputElement>, "type">
    | TextareaHTMLAttributes<HTMLTextAreaElement>
    | SelectHTMLAttributes<HTMLSelectElement>
  );

const Input = ({ type, label, placeholder, options, ...props }: Props) => {
  const id = (props.name || label).toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          className={styles.textarea}
          placeholder={placeholder}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : type === "select" ? (
        <select
          id={id}
          className={styles.select}
          {...(props as SelectHTMLAttributes<HTMLSelectElement>)}
        >
          <option value="">{placeholder || "Select an option"}</option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};

export default Input;
