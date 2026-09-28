const a = "icecream";

// 입력타입: string 들어가있어?                     출력 타입: boolean
const b = a.includes("cream");
// 입력타입: number 반복해줘                        출력 타입: string
const c = a.repeat(3);
// 입력타입: string 로 시작해?                       출력타입: boolean
const d = a.startsWith("a");
// 입력타입: string 로 끝나?                        출력타입: boolean
const e = a.endsWith("z");
// 입력타입: X 모두 대문자로                        출력타입: string
const f = a.toUpperCase;
// 입력타입: X 모두 소문자로                        출력타입: string
const g = a.toLowerCase;
// 입력타입: str,str x를 y로 치환                   출력타입: string
const h = a.replace("i", "w");
// 입력타입: str,str x를 y로 모두 치환              출력타입: string
const i = a.replaceAll("i", "w");
// 입력타입: string r 기준으로 반 쪼개줘             출력타입: array
const j = a.split("r");
// 입력타입: num,num 시작num부터 num-1까지 잘라줘    출력타입: string
const k = a.slice(0, 4);
const l = a.length; // 길이

const news = `The heads of Nato and the European Commission have warned that Russia is growing increasingly reckless and vowed to respond to a "new normal".

"Leipzig marks a new escalation on European Union soil directly attributed to Russia," said Commission President Ursula von der Leyen, a day after Germany blamed Russia for a failed drone attack last month on Leipzig airport.

"We have to step up and that means being ready to respond to Russia's recklessness faster and better," von der Leyen said. Nato Secretary General Mark Rutte said the whole alliance, which includes the US, stood "in full solidarity with Germany".

Russia has rejected German accusations that a drone carrying explosives deliberately targeted a Ukrainian cargo plane on 4 August.

The drone was defused by a robot at Leipzig/Halle airport and a second drone is thought to have collided with another cargo plane.

A third drone was reportedly found 10 days later at the airport, which is an important Nato hub and is regularly used by Ukrainian Antonov transport aircraft.

It was not until Tuesday that the German government said police investigations and intelligence finding had proved that Russia was behind the incidents.

The interior minister said that the drone's configuration, components, explosives and detonator were all known from other Russian hybrid operations.`;

const user_lookingfor = window.prompt("찾고 싶은 단어는?");
const user_answer = news.includes(user_lookingfor) ? "있음" : "없음";

console.log(user_answer);
