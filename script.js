"use strict";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDayObj = new Date();
const currentMonth = currentDayObj.getMonth() + 1;
const currentDate = currentDayObj.getDate();
const currentYear = currentDayObj.getFullYear();
const currentDay = dayNames[currentDayObj.getDay()];

const currentDateMsg = `Today is ${currentMonth}/${currentDate}/${currentYear} (${currentDay})`;
const dateHeading = document.querySelector("#currentDate");
dateHeading.textContent = currentDateMsg;

const litterBoxRoomDateObj = document.querySelector("#litterbox1-date");
const litterBoxKitchenDateObj = document.querySelector("#litterbox2-date");

const onLitterBoxDateChange = function (litterBoxRoom) {
  const selectedDate = litterBoxRoom
    ? litterBoxRoomDateObj.value
    : litterBoxKitchenDateObj.value;
  localStorage.setItem("litterBoxCleanDate", selectedDate);
};

litterBoxRoomDateObj.addEventListener("change", onLitterBoxDateChange);
