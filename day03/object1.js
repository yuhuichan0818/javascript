const donchicken = {
  name: "돈치킨",
  location: "역삼역",
  capacity: 30,
  isHoliday: false,
  menu: {
    main: "수육",
    sub: "막국수",
    side: "미역국",
  },
};

console.log(donchicken.location);
console.log(donchicken["location"]);

console.log(donchicken.menu.side);

donchicken.vip = "전수효";

delete donchicken.menu.side;
