console.log(1);
console.log(2);
console.log(3);

// 동기[sync] vs 비동기[async]
setTimeout(() => {
  console.log("연휴 개짧음");
}, 3000); // 3000 = 3초 (ms 단위임)
// 비동기: 시간초 재는거, 이벤트 등록, 네트워크 통해서 데이터 가져오기

console.log(4);
console.log(5);
