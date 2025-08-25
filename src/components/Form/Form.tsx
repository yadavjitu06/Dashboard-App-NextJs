"use client";
import React, { useState } from "react";

import Button from "@/components/Button/Button";
import styles from "@/components/Form/Form.module.css";
import Input from "@/components/Input/Input";
import { validateEmail, validateName } from "@/helper/validator";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    date: "2024-08-24",
    role: "Admin",
    message: "This is a sample message demonstrating the textarea component.",
  });

  // Error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { name: "", email: "" };

    if (!validateName(formData.name)) {
      newErrors.name =
        "Please enter a valid name (only letters & spaces, min 2 characters).";
      hasError = true;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      date: "",
      role: "",
      message: "",
    });
    setErrors({ name: "", email: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Form Inputs</h2>

      <div className={styles.grid}>
        <div>
          <Input
            type="text"
            label="Name *"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.ValidateAlert}>{errors.name}</p>}
        </div>

        <div>
          <Input
            type="text"
            label="Email *"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className={styles.ValidateAlert}>{errors.email}</p>
          )}
        </div>

        <Input
          type="date"
          label="Date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <Input
          type="select"
          label="Role *"
          name="role"
          options={["Admin", "User", "Manager"]}
          value={formData.role}
          onChange={handleChange}
        />
      </div>

      <Input
        type="textarea"
        label="Message"
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      />

      <div className={styles.actions}>
        <Button type="submit" variant="primary">
          Submit Form
        </Button>
        <Button type="button" variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default Form;
