"use client";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currDate, setCurrDate] = useState("");

  useEffect(() => {
    const date = new Date().getFullYear();
    const dateStr = date.toString();
    setCurrDate(dateStr);
  }, [currDate]);

  return (
    <footer className="text-center py-10 dark:bg-neutral-950">
      <p className="dark:text-neutral-200 font-Josefin">
        &copy; {currDate} Rajat Kalotra
      </p>
    </footer>
  );
};

export default Footer;
