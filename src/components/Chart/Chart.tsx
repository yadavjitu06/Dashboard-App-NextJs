'use client';
import React from 'react';

import styles from '@/components/Chart/Chart.module.css';
import { mockChartData } from '@/data/mockData';

const Chart: React.FC = () => {
  // Max value to calculate bar heights
  const maxValue = Math.max(...mockChartData.map((d) => d.value));

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Custom Bar Chart</h3>
      <div className={styles.chart}>
        {mockChartData.map((data, index) => {
          const barHeight = (data.value / maxValue) * 200; // max height 200px
          return (
            <div key={index} className={styles.barWrapper}>
              <div
                className={styles.bar}
                style={{ height: `${barHeight}px` }}
                title={`${data.name}: ${data.value}`}
              ></div>
              <span className={styles.barLabel}>{data.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
