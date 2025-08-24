
"use client";
//css imports
import "./SidebarLayout.css";

import Link from "next/link";
import React from "react";
import { ReactNode, useEffect,useState } from "react";

// Interface for component props
interface SidebarLayoutProps {
  children?: ReactNode;
}

// SidebarLayout component with TypeScript and clean code
const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  // State for sidebar visibility and theme
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // Toggle sidebar visibility
  const toggleSidebar = (): void => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Toggle theme and save to localStorage
  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Close sidebar on overlay click
  const handleOverlayClick = (): void => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout-container">
      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="app-title">
            <h3>Dashboard</h3>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/create-ticket" className="nav-link">
                Create Ticket
              </Link>
            </li>
            <li>
              <Link href="/users" className="nav-link">
                All Users
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer buttons */}
        <div className="sidebar-footer">
          <button className="custom-btn custom-btn-primary">Login</button>
          <button className="custom-btn custom-btn-secondary">Signup</button>
        </div>
      </aside>

      {/* Hamburger menu (hidden when sidebar is open) */}
      {!isSidebarOpen && (
        <header>
          <button
            className="menu-toggle"
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

      {/* Main content */}
      <main className="ml-64 p-4">{children}</main>
    </div>
  );
};

export default SidebarLayout;
