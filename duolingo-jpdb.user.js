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
  console.log("Nothing :(");
  setTimeout(() => {
    grade1.removeEventListener("click", nothing);
    grade1.click();
  }, 1000);
}
