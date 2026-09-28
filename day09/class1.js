// grid column 2 / row 8
// 30% 70%

// 요비 [헤더 월 화 수 목 금 토 일]

// - 토글
// 헤이지츠 (기본) =  11:30 - 22:00 ,
// 슈마츠 toggle = 11:00 - 23:00
// 휴일 toggle = NaN

// border 1px solid #green
// hover borderleft 4px solid #red
//         font-weight 800

// [0] -> header
// header backgroundcolor black color white

const timetableSection = document.createElement("section");
timetableSection.classList.add("timetable");

const today = new Date().getDay();

const timetableData = [
  { day: "월", startTime: "10:00", endTime: "22:00" },
  { day: "화", startTime: "10:00", endTime: "22:00" },
  { day: "수", startTime: "10:00", endTime: "22:00" },
  { day: "목", startTime: "10:00", endTime: "22:00" },
  { day: "금", startTime: "10:00", endTime: "23:00" },
  { day: "토", startTime: "10:00", endTime: "23:00" },
  { day: "일", startTime: "", endTime: "" },
];

timetableData.forEach((x, i) => {
  const scheduleDiv = document.createElement("div");
  scheduleDiv.classList.add("schedule");

  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  if (today == (i + 1) % 7) {
    return dayDiv.classList.add("today");
  }
  dayDiv.innerHTML = `${x.day}요일`;

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.innerHTML = !!x.startTime
    ? `${x.startTime} - ${x.endTime}`
    : "쉬는날";

  scheduleDiv.append(dayDiv);
  scheduleDiv.append(timeDiv);
  timetableSection.append(scheduleDiv);
});

document.body.append(timetableSection);
