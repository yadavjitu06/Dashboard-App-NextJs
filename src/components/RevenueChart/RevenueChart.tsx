"use client";

import React from "react";

import styles from "@/components/RevenueChart/RevenueChart.module.css";
import { mockRevenueData } from "@/data/mockData";

const RevenueChart: React.FC = () => {
 
  const maxValue = Math.max(...mockRevenueData.map((d) => d.amount));

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Revenue by Source (Bar Chart)</h3>

      <div className={styles.chart}>
        {mockRevenueData.map((data, index) => {
          const barHeight = (data.amount / maxValue) * 200; // max 200px height

          return (
            <div key={index} className={styles.barWrapper}>
             
              <span className={styles.valueLabel}>${data.amount}</span>

              <div
                className={`${styles.bar} ${styles.revenueBar}`}
                style={{ height: `${barHeight}px` }}
                title={`${data.source}: $${data.amount}`}
              />

              <span className={styles.barLabel}>{data.source}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RevenueChart;
