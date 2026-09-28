const score = +window.prompt("일본어 점수 몇점?");

if (score <= 100) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("탈락");
  }
} else {
  console.log("다시 입력해주세용");
}

const age = +window.prompt("나이 몇살?");
if (age < 7) {
  console.log("무료에용");
} else if (age <= 12) {
  console.log("5000원");
} else if (age <= 19) {
  console.log("10000원");
} else {
  console.log("15000원");
}
