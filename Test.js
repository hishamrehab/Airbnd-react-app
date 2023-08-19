import React from "react";
import { createRoot } from "react-dom/client";
export default function Test() {
  const date = new Date();
  const hours = date.getHours() % 12;
  let timeDay;

  if (hours < 12) {
    timeDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeDay = "afternoon";
  } else {
    timeDay = "night";
  }
  return <h1>Good {timeDay}!</h1>;
}
