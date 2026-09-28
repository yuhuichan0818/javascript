const user_ID = window.prompt("아이디 뭘로 할래요?");

const isUpperCase = (user_ID) => {
  str = user_ID.slice(0, 3);
  if (str === str.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};

const hasNotSpecialChar = (user_ID) => {
  return (
    user_ID.includes("@") && user_ID.includes("!") && user_ID.includes("#")
  );
};

const check_ID = (user_ID) => {
  if (user_ID.length < 4 || user_ID.length > 12) {
    return console.log("길이는 4~12글자로 해주세요!");
  } else if (!hasNotSpecialChar) {
    return console.log("특수문자 @, !, # 중에 하나 포함해야해요!");
  } else if (!isUpperCase(user_ID)) {
    return console.log("1~3번째 글자는 대문자여야해요!");
  } else return user_ID;
};

const answer_ID = check_ID(user_ID);
console.log(`${answer_ID}로 id를 생성하였습니다`);
