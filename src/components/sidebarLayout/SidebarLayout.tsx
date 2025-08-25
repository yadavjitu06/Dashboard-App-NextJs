"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

import styles from "@/components/sidebarLayout/SidebarLayout.module.css";

import Button from "../Button/Button";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as
      | "dark"
      | "light"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleSidebar = (): void => setIsSidebarOpen((prev) => !prev);
  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  const handleOverlayClick = (): void => setIsSidebarOpen(false);

  return (
    <div className={styles["layout-container"]}>
      {isSidebarOpen && (
        <div
          className={styles["sidebar-overlay"]}
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      <aside
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles["sidebar-open"] : ""
        }`}
      >
        <div className={styles["sidebar-header"]}>
          <div className={styles["app-title"]}>
            <h3>Dashboard</h3>
            <button
              className={styles["theme-toggle"]}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        <nav className={styles["sidebar-nav"]}>
          <ul>
            <li>
              <Link
                href="/"
                className={`${styles["nav-link"]} ${styles.active}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className={styles["nav-link"]}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/create-ticket" className={styles["nav-link"]}>
                Create Ticket
              </Link>
            </li>
            <li>
              <Link href="/users" className={styles["nav-link"]}>
                All Users
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles["sidebar-footer"]}>
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Signup</Button>
        </div>
      </aside>

      {!isSidebarOpen && (
        <header>
          <button
            className={styles["menu-toggle"]}
            onClick={toggleSidebar}
            aria-label="Open sidebar menu"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </header>
      )}

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default SidebarLayout;
