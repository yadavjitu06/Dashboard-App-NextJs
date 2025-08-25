import React from "react";

import styles from "@/components/Cards/Cards.module.css";
import { KPIData } from "@/data/mockData";

interface KPICardProps {
  data: KPIData;
}

export function KPICard({ data }: KPICardProps) {
  const isPositive = data.change > 0;
  const isNegative = data.change < 0;

  return (
 <> <div className={styles.kpiCard}>
        {/* Header */}
        <div className={styles.kpiHeader}>
          <span className={styles.kpiIcon}>{data.icon}</span>
          <h3 className={styles.kpiTitle}>{data.title}</h3>
        </div>

        {/* Value */}
        <div className={styles.kpiValue}>{data.value}</div>

        {/* Change */}
        <div className={styles.kpiChange}>
          <span
            className={
              isPositive
                ? styles.changePositive
                : isNegative
                ? styles.changeNegative
                : styles.changeNeutral
            }
          >
            {isPositive && "↗"} 
            {isNegative && "↘"} 
            {Math.abs(data.change)}%
          </span>
          <span className={styles.changeLabel}>vs last month</span>
        </div>
      </div> </> 
      
    
  );
}
