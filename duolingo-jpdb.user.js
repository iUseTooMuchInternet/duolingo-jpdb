let style1 = document.querySelector('[href="/static/be945648d268.css"]').sheet;

/* List of rules */
const rules = [
  `#grade-1, #grade-2, #grade-3, #grade-4, #grade-5 {
    color: #ffffff; 
    transition: all 250ms ease-out; 
    text-decoration: none;
  }`,
  `#grade-1 {
    border-bottom: 5px solid #ea2b2b; 
    background-color: #ff4b4b;
  }`,
  `#grade-2 {
    border-bottom: 5px solid #ea2b2b;
    background-color: #ff4b4b;
  }`,
  `#grade-3 {
    border-bottom: 5px solid #ff9600;
    background-color: #ffb100;
  }`,
  `#grade-4 {
    border-bottom: 5px solid #58a700;
    background-color: #58cc02;
  }`,
  `#grade-5 {
    border-bottom: 5px solid #1899d6;
    background-color: #1cb0f6;
  }`,
  `#grade-1:hover, #grade-2:hover, #grade-3:hover, #grade-4:hover, #grade-5:hover {
    box-shadow: none; 
    text-decoration: none;
  }`,
  `#grade-1:hover {
    background-color: #f5a4a4;
  }`,
  `#grade-2:hover {
    background-color: #f5a4a4;
  }`,
  `#grade-3:hover {
    background-color: #ffc800; 
  }`,
  `#grade-4:hover {
    background-color: #61e002; 
  }`,
  `#grade-5:hover {
    background-color: #84d8ff; 
  }`,
  `pop-up {
    display: block;
    padding: 20px 40px 20px 40px;
    width: 150px;
    border-radius: 16px;
    font-size: 24px;
    position: fixed;
    left: 50%;
    top: 10%;
    color: #ffffff;
    animation-name: popup_fadein;
    animation-duration: 900ms;
    animation-fill-mode: forwards;
  }`,
  `@keyframes popup_fadein {{
    0% {{
      opacity: 0;
      transform: scale(0.7) translateX(-50%) translateY(-5%);
    }} 

    10% {{
      opacity: 1;
      transform: scale(1)  translateX(-50%) translateY(0%);
    }}

    30% {{
      opacity: 1;
      transform: scale(0.95)  translateX(-50%) translateY(0%);
    }}

    60% {{
      opacity: 1;
      transform: scale(0.95)  translateX(-50%) translateY(0%);
    }}

    100% {{
      opacity: 0;
      transform: scale(0.95) translateX(-50%) translateY(0%);
    }}
  }}
  `,
  `.cardfinish1 {{
    border-bottom: 5px solid #ea2b2b;
    background-color: #ff4b4b;
  }}`,
  `.cardfinish2 {{
    border-bottom: 5px solid #ff9600;
    background-color: #ffb100;
  }}`,
  `.cardfinish3 {{
    background-color: #58cc02;
    border-bottom: 8px solid #58a700;
  }}`,
  `.cardfinish4 {{
    border-bottom: 5px solid #1899d6;
    background-color: #1cb0f6;
  }}`,
];

rules.forEach((rule) => {
  style1.insertRule(rule, style1.cssRules.length);
})

console.log(style1.cssRules.length);

let grade = [null,]

const isGradingLoaded = setInterval(() => {
  for (let i = 1; i <= 5; i++) {
    grade[i] = document.getElementById(`grade-${i}`);
  }
  if (grade[1] && grade[2] && grade[3] && grade[4] && grade[5]) {
    console.log("All grading buttons loaded!");
    grade[1].addEventListener("click", nothing);
    clearInterval(isGradingLoaded);
  }
}, 1);

function nothing(e) {
  e.preventDefault();
  /* Custom code here */
  let popup = `
  <pop-up class="cardfinish1">
    Next time!
  </pop-up>`
  document.querySelector("body").insertAdjacentHTML("beforeend", popup);
  setTimeout(() => {
    grade[1].removeEventListener("click", nothing);
    grade[1].click();
  }, 1000);
}
