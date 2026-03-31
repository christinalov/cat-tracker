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
const deepCleanWaterFountainObj = document.querySelector(
  "#deep-clean-water-fountain"
);
const trimNailsObj = document.querySelector("#trim-nails");
const weightDateObj = document.querySelector("#weight-date");
const weightNumberObj = document.querySelector("#weight-number");
const brushTeethObj = document.querySelector("#brush-teeth");

const inputDateStringIdToObj = {
  "weight-date": weightDateObj,
  "weight-number": weightNumberObj,
  "litterbox-room-date": litterBoxRoomDateObj,
  "litterbox-kitchen-date": litterBoxKitchenDateObj,
  "deep-clean-water-fountain": deepCleanWaterFountainObj,
  "trim-nails": trimNailsObj,
  "brush-teeth": brushTeethObj,
};

const onDOMLoad = function () {
  for (const id in inputDateStringIdToObj) {
    const savedDate = localStorage.getItem(id);
    if (savedDate) {
      inputDateStringIdToObj[id].value = savedDate;
    }
  }
};

document.addEventListener("DOMContentLoaded", onDOMLoad);

const onDateChange = function (event) {
  const elementId = event.target.id;
  const selectedDate = inputDateStringIdToObj[elementId].value;
  localStorage.setItem(elementId, selectedDate);
};

for (const id in inputDateStringIdToObj) {
  inputDateStringIdToObj[id].addEventListener("change", onDateChange);
}
