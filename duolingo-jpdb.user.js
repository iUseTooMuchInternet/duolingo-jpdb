let style1 = document.querySelector('[href="/static/be945648d268.css"]').sheet;

style1.insertRule(
  `#grade-1, #grade-2, #grade-3, #grade-4, #grade-5 {
    color: #ffffff; 
    transition: all 250ms ease-out; 
    text-decoration: none;
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-1 {
    border-bottom: 5px solid #ea2b2b; 
    background-color: #ff4b4b;
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-2 {
    border-bottom: 5px solid #ea2b2b;
    background-color: #ff4b4b;
  }`,
  style1.cssRules.length
);
style1.insertRule(
  `#grade-3 {
    border-bottom: 5px solid #ff9600;
    background-color: #ffb100;
  }`,
  style1.cssRules.length
);
style1.insertRule(
  `#grade-4 {
    border-bottom: 5px solid #58a700;
    background-color: #58cc02;
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-5 {
    border-bottom: 5px solid #1899d6;
    background-color: #1cb0f6;
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-1:hover, #grade-2:hover, #grade-3:hover, #grade-4:hover, #grade-5:hover {
    box-shadow: none; 
    text-decoration: none;
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-1:hover {
    background-color: #f5a4a4;
  }`,
  style1.cssRules.length
);
style1.insertRule(
  `#grade-2:hover {
    background-color: #f5a4a4;
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-3:hover {
    background-color: #ffc800; 
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-4:hover {
    background-color: #61e002; 
  }`,
  style1.cssRules.length
);

style1.insertRule(
  `#grade-5:hover {
    background-color: #84d8ff; 
  }`,
  style1.cssRules.length
);
console.log(style1.cssRules.length);

let grade1;
let popup;
const myInterval = setInterval(() => {
  grade1 = document.getElementById("grade-1");
  if (grade1) {
    console.log("nothing button loaded");
    grade1.addEventListener("click", nothing);
    clearInterval(myInterval);
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
