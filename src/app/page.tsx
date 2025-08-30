"use client";
import React, { useEffect, useState } from "react";

import styles from "@/app/page.module.css";
import Button from "@/components/Button/Button";
import Calendar from "@/components/Calender/Calender";
import { KPICard } from "@/components/Cards/Cards";
import Chart from "@/components/Chart/Chart";
import Form from "@/components/Form/Form";
import Modal from "@/components/Modal/Modal";
import RevenueChart from "@/components/RevenueChart/RevenueChart";
import Table from "@/components/Table/Table";
import Toast from "@/components/Toast/Toast";
import { mockKPIData } from "@/data/mockData";

const Dashboard = () => {
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

  const toggleTheme = (): void => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="container">
      <div className={styles.dashboard}>
        {/* ✅ Header with title left + toggle button right */}
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Dashboard</h1>
          <button
            className={styles["theme-toggle"]}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <h2 className={styles.sectionTitle}>Key Performance Indicators</h2>
        <div className={styles.kpiGrid}>
          {mockKPIData.map((item, i) => (
            <KPICard key={i} data={item} />
          ))}
        </div>

        {/* Buttons */}
        <section>
          <h2 className={styles.sectionTitle}>Buttons</h2>
          <div className={styles.buttonGroup}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button isLoading>Loading Button</Button>
          </div>
        </section>

        <section>
          <Form />
        </section>

        {/* Table */}
        <section>
          <Table />
        </section>

        {/* Chart */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Analytics Chart</h2>
          <Chart />
          <RevenueChart />
        </section>

        {/* Calendar */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Calendar</h2>
          <Calendar />
        </section>

        {/* Toast and Modal */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Interactive Elements</h2>
          <div className={styles.buttonGroup}>
            <Toast />
            <Modal />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
