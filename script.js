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
const currentMonth = currentDayObj.getMonth() + 1; // 0-indexed
const currentDate = currentDayObj.getDate();
const currentYear = currentDayObj.getFullYear();
const currentDay = dayNames[currentDayObj.getDay()];

const currentDateMsg = `Today is ${currentMonth}/${currentDate}/${currentYear} (${currentDay})`;
const dateHeading = document.querySelector("#currentDate");
dateHeading.textContent = currentDateMsg;

const litterBoxRoomDateObj = document.querySelector("#litterbox-room-date");
const litterBoxKitchenDateObj = document.querySelector(
  "#litterbox-kitchen-date"
);

const onLitterBoxRoomDateLoad = function () {
  const savedDate = localStorage.getItem("litterbox-room-date");
  console.log(savedDate);
  if (savedDate) {
    litterBoxRoomDateObj.textContent = savedDate;
  }
};

litterBoxRoomDateObj.addEventListener("load", onLitterBoxRoomDateLoad);

const onLitterBoxRoomDateChange = function (event) {
  const elementId = event.target.id;
  const selectedDate = litterBoxRoomDateObj.value;
  console.log(elementId);
  localStorage.setItem(elementId, selectedDate);
};

litterBoxRoomDateObj.addEventListener("change", onLitterBoxRoomDateChange);
