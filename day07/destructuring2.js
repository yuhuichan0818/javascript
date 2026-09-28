const std = [
  {
    name: "최선호",
    parttime: [
      { name: "맥도날드", location: "스기나미구" },
      { name: "IT 아르바이트", location: "시나가와" },
    ],
  },
  {
    name: "황다현",
    parttime: [{ name: "엑셀시오스", location: "추오구" }],
  },
  {
    name: "유희찬",
    parttime: [{ name: "호텔 서빙", location: "포항" }],
  },
  {
    name: "전수효",
    parttime: [
      { name: "방탈출카페 알바", location: "서울" },
      { name: "cgv", location: "김포" },
    ],
  },
];

const [seon, hwang] = std;
const [mac, it] = seon.parttime;
const { name, location } = mac;

console.log(location);
