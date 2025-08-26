"use client";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";

import styles from "@/components/sidebarLayout/SidebarLayout.module.css";

import Button from "../Button/Button";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [collapsed, setCollapsed] = useState<boolean>(false);

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

  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className={styles["layout-container"]}>
      {/* Menubar */}
      <nav
        className={`${styles.menubar} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        <div className={styles["menubar-header"]}>
          <div className={styles.logo}>
            <div className={styles["logo-icon"]}>A</div>
            <span className={styles["logo-text"]}>Admin Panel</span>
          </div>
          <div className={styles["header-controls"]}>
            <button
              className={styles["theme-toggle"]}
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              className={styles["toggle-btn"]}
              onClick={() => setCollapsed(!collapsed)}
              aria-label="Toggle menu"
            >
              {collapsed ? "»" : "«"}
            </button>
          </div>
        </div>

        {/* Menu list */}
        <ul className={styles["menu-list"]}>
          {/* Home */}
          <li className={styles["menu-item"]}>
            <Link
              href="/"
              className={`${styles["menu-link"]} ${styles.active}`}
            >
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
              <span className={styles["menu-text"]}>Home</span>
            </Link>
            <div className={styles.tooltip}>Home</div>
          </li>

          {/* Dashboard */}
          <li className={styles["menu-item"]}>
            <Link href="/dashboard" className={styles["menu-link"]}>
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
              <span className={styles["menu-text"]}>Dashboard</span>
            </Link>
            <div className={styles.tooltip}>Dashboard</div>
          </li>

          {/* Create Ticket */}
          <li className={styles["menu-item"]}>
            <Link href="/create-ticket" className={styles["menu-link"]}>
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v20m8-10H4" />
              </svg>
              <span className={styles["menu-text"]}>Create Ticket</span>
            </Link>
            <div className={styles.tooltip}>Create Ticket</div>
          </li>

          {/* Files with submenu */}
          <li className={styles["menu-item"]}>
            <a href="#" className={styles["menu-link"]}>
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13,2 13,9 20,9"/>
              </svg>
              <span className={styles["menu-text"]}>Files</span>
              <svg
                className={styles["menu-arrow"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </a>
            <div className={styles.tooltip}>Files</div>

            <ul className={styles.submenu}>
              <li className={styles["submenu-item"]}>
                <Link href="/files/documents" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                  Documents
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/files/images" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  Images
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/files/videos" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="23 7 16 12 23 17 23 7"/>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
                  </svg>
                  Videos
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/files/music" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                  Music
                </Link>
              </li>
            </ul>
          </li>

          {/* Projects with submenu */}
          <li className={styles["menu-item"]}>
            <a href="#" className={styles["menu-link"]}>
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
              </svg>
              <span className={styles["menu-text"]}>Projects</span>
              <svg
                className={styles["menu-arrow"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </a>
            <div className={styles.tooltip}>Projects</div>

            <ul className={styles.submenu}>
              <li className={styles["submenu-item"]}>
                <Link href="/projects/active" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
                  </svg>
                  Active Projects
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/projects/new" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20m8-10H4"/>
                  </svg>
                  New Project
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/projects/templates" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9,22 9,12 15,12 15,22"/>
                  </svg>
                  Templates
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/projects/archived" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
                  </svg>
                  Archived
                </Link>
              </li>
            </ul>
          </li>

          {/* Settings with submenu */}
          <li className={styles["menu-item"]}>
            <a href="#" className={styles["menu-link"]}>
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3"/>
                <path d="m12 1 1.5 3 3 .5-2.5 2.5.5 3-2.5-1.5-2.5 1.5.5-3-2.5-2.5 3-.5z"/>
              </svg>
              <span className={styles["menu-text"]}>Settings</span>
              <svg
                className={styles["menu-arrow"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </a>
            <div className={styles.tooltip}>Settings</div>

            <ul className={styles.submenu}>
              <li className={styles["submenu-item"]}>
                <Link href="/settings/profile" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Profile
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/settings/security" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  Security
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/settings/notifications" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                    <path d="m13.73 21a2 2 0 0 1-3.46 0"/>
                  </svg>
                  Notifications
                </Link>
              </li>
            </ul>
          </li>

          {/* Reports with submenu */}
          <li className={styles["menu-item"]}>
            <a href="#" className={styles["menu-link"]}>
              <svg
                className={styles["menu-icon"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                <polyline points="13,2 13,9 20,9"/>
              </svg>
              <span className={styles["menu-text"]}>Reports</span>
              <svg
                className={styles["menu-arrow"]}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </a>
            <div className={styles.tooltip}>Reports</div>

            <ul className={styles.submenu}>
              <li className={styles["submenu-item"]}>
                <Link href="/reports/sales" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"/>
                    <line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                  Sales Report
                </Link>
              </li>
              <li className={styles["submenu-item"]}>
                <Link href="/reports/analytics" className={styles["submenu-link"]}>
                  <svg
                    className={styles["submenu-icon"]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                  Analytics
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Footer */}
        <div className={styles["sidebar-footer"]}>
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Signup</Button>
        </div>
      </nav>

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default SidebarLayout;