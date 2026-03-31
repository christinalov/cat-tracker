import { useState, useEffect } from "react";

function App() {
  const [dateMsg] = useState(() => {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const d = new Date();
    return `Today is ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} (${dayNames[d.getDay()]})`;
  });

  const [taskData, setTaskData] = useState({
    litterboxRoom: "",
    litterboxKitchen: "",
    waterFountain: "",
    trimNails: "",
    brushTeeth: "",
    weightNumber: "",
    weightDate: "",
  });

  const onChange = (e) => {
    const { task, value } = e.target;

    setTaskData((prev) => ({
      ...prev,
      [task]: value,
    }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("taskDateData");
    if (savedData) {
      setTaskData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taskDateData", JSON.stringify(taskData));
  }, [taskData]);

  return (
    <main>
      <p>{dateMsg}</p>
      <ul>
        <li>
          <label>Deep Clean Litterbox (Room)</label>
          <input
            type="date"
            name="litterboxRoom"
            value={taskData.litterboxRoom}
            onChange={handleChange}
          />
        </li>

        <li>
          <label>Deep Clean Litterbox (Kitchen)</label>
          <input
            type="date"
            name="litterboxKitchen"
            value={taskData.litterboxKitchen}
            onChange={handleChange}
          />
        </li>

        <li>
          <label>Deep Clean Water Fountain</label>
          <input
            type="date"
            name="waterFountain"
            value={taskData.waterFountain}
            onChange={handleChange}
          />
        </li>

        <li>
          <label>Trim Nails</label>
          <input
            type="date"
            name="trimNails"
            value={taskData.trimNails}
            onChange={handleChange}
          />
        </li>

        <li>
          <label>Brush Teeth</label>
          <input
            type="date"
            name="brushTeeth"
            value={taskData.brushTeeth}
            onChange={handleChange}
          />
        </li>

        <li>
          <label>Weight (lbs)</label>
          <input
            type="number"
            name="weightNumber"
            value={taskData.weightNumber}
            onChange={handleChange}
          />
          <input
            type="date"
            name="weightDate"
            value={taskData.weightDate}
            onChange={handleChange}
          />
        </li>
      </ul>
    </main>
  );
}

export default App;

// const dayNames = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const currentDayObj = new Date();
// const currentMonth = currentDayObj.getMonth() + 1; // 0-indexed
// const currentDate = currentDayObj.getDate();
// const currentYear = currentDayObj.getFullYear();
// const currentDay = dayNames[currentDayObj.getDay()];

// const currentDateMsg = `Today is ${currentMonth}/${currentDate}/${currentYear} (${currentDay})`;
// const dateHeading = document.querySelector("#currentDate");
// dateHeading.textContent = currentDateMsg;

// const litterBoxRoomDateObj = document.querySelector("#litterbox-room-date");
// const litterBoxKitchenDateObj = document.querySelector(
//   "#litterbox-kitchen-date",
// );
// const deepCleanWaterFountainObj = document.querySelector(
//   "#deep-clean-water-fountain",
// );
// const trimNailsObj = document.querySelector("#trim-nails");
// const weightDateObj = document.querySelector("#weight-date");
// const weightNumberObj = document.querySelector("#weight-number");
// const brushTeethObj = document.querySelector("#brush-teeth");

// const inputDateStringIdToObj = {
//   "weight-date": weightDateObj,
//   "weight-number": weightNumberObj,
//   "litterbox-room-date": litterBoxRoomDateObj,
//   "litterbox-kitchen-date": litterBoxKitchenDateObj,
//   "deep-clean-water-fountain": deepCleanWaterFountainObj,
//   "trim-nails": trimNailsObj,
//   "brush-teeth": brushTeethObj,
// };

// const onDOMLoad = function () {
//   for (const id in inputDateStringIdToObj) {
//     const savedDate = localStorage.getItem(id);
//     if (savedDate) {
//       inputDateStringIdToObj[id].value = savedDate;
//     }
//   }
// };

// document.addEventListener("DOMContentLoaded", onDOMLoad);

// const onDateChange = function (event) {
//   const elementId = event.target.id;
//   const selectedDate = inputDateStringIdToObj[elementId].value;
//   localStorage.setItem(elementId, selectedDate);
// };

// for (const id in inputDateStringIdToObj) {
//   inputDateStringIdToObj[id].addEventListener("change", onDateChange);
// }
