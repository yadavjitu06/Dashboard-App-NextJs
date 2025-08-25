"use client";
import React, { useState } from "react";

import styles from "@/components/Calender/Calender.module.css";
import { mockEvents } from "@/data/mockData";

interface CalendarEvent {
  date: Date;
  title: string;
}


const generateCalendarCells = (year: number, month: number): (Date | null)[] => {
  const totalDays = new Date(year, month + 1, 0).getDate();
  const startDayIndex = new Date(year, month, 1).getDay();

  const cells: (Date | null)[] = [];

  // Empty slots before month start
  for (let i = 0; i < startDayIndex; i++) {
    cells.push(null);
  }

  // Fill dates of the current month
  for (let day = 1; day <= totalDays; day++) {
    cells.push(new Date(year, month, day));
  }

  return cells;
};

const CustomCalendar: React.FC = () => {
  const [viewDate, setViewDate] = useState(new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const calendarCells = generateCalendarCells(year, month);

  const handlePrevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={styles.calendarContainer}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={handlePrevMonth} className={styles.navBtn}>
          ◀
        </button>
        <span className={styles.monthLabel}>
          {viewDate.toLocaleString("default", { month: "long" })} {year}
        </span>
        <button onClick={handleNextMonth} className={styles.navBtn}>
          ▶
        </button>
      </div>

      {/* Week Days  */}
      <div className={styles.weekDays}>
        {weekDays.map((day) => (
          <div key={day} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>

      {/*  Days Grid */}
      <div className={styles.daysGrid}>
        {calendarCells.map((date, index) => {
          const event = date
            ? mockEvents.find(
                (e: CalendarEvent) =>
                  e.date.getDate() === date.getDate() &&
                  e.date.getMonth() === date.getMonth() &&
                  e.date.getFullYear() === date.getFullYear()
              )
            : null;

          const isToday =
            date && date.toDateString() === new Date().toDateString();

          return (
            <div
              key={index}
              className={`${styles.dayCell} ${isToday ? styles.today : ""}`}
            >
              {date && (
                <>
                  <span>{date.getDate()}</span>
                  {event && (
                    <div
                      className={styles.eventDot}
                      title={event.title}
                    ></div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;
