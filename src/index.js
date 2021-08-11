import "./style.css";
import {hslToRgb, rgbToHsl} from "./utils";

// var wrap = document.getElementById('wrap');
// var h = 200;
// var s = 50;
// var l = 40;

// var hsl = function() {
//     return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
// };

// wrap.addEventListener('mousemove', handleMouse);
// window.addEventListener('keydown', handleKeys);


// function handleMouse(e) {
//   h = Math.round(e.offsetX/(e.originalTarget.clientWidth/360)),
//   s = Math.round(e.offsetY/(e.originalTarget.clientHeight/100));

//   wrap.style.backgroundColor = hsl();
// }

// function handleKeys(e) {
//   if(e.keyCode == 38 && l < 100) l++;
//   if(e.keyCode == 40 && l > 0) l--;
  
//   $hsl.innerHTML = hsl();
//   wrap.style.backgroundColor = hsl();
// }

let colors = [
  [200, 50, 40]
];

function loadColors() {
  colors.forEach((color) => {
    const colorDiv = document.createElement("div");
    colorDiv.setAttribute("class", "wrap");
    document.body.appendChild(colorDiv);
  })
}

document.body.onload = loadColors;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}