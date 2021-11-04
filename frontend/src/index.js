import "./style.css";
import { Wrap } from "./components/Wrap.js";

// TODO: Store these in EEPROM
let colors = [
    [150, 150, 40],
];

let wraps = [];
const wrapsParent = document.getElementById("container");

function initializeWraps() {
    colors.forEach((color) => {
        const wrap = new Wrap(...color, true, wrapsParent);
        wraps.push(wrap);
    });

    document.addEventListener('keydown', (e) => {
        wraps.forEach((wrap) => {
            if (!wrap.isFolded){
                if (e.code == "ArrowUp" && wrap.lightness < 100) wrap.increaseLightness(); 
                if (e.code == "ArrowDown" && wrap.lightness > 0) wrap.decreaseLightness();
            }
        })
    });

    wrapsParent.addEventListener('delete-wrap', (e) => {
        let wrapID = wraps.indexOf(e.detail);
        wraps.splice(wrapID, 1);        
    })
}

document.body.onload = initializeWraps;
document.getElementById("add-wrap").addEventListener('click', () => {
    wraps.push(new Wrap(...[50, 50, 50], false, wrapsParent))
});

document.getElementById("save-wraps").addEventListener('click', () => {
    let newColors = wraps.map((wrap) => wrap.rgb)
    console.log(newColors);
});