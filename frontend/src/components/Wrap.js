import { constructHSLString, hslToRgb, rgbToHsl } from "../utils.js";
import trash from  "../trash.svg"
console.log(trash)
class Wrap {
    constructor(hue, saturation, lightness, isFolded, parent) {
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.isFolded = isFolded;
        this.parent = parent;

        this.createDOMNode();
        this.initializeEventHandlers();
    }

    get rgb(){
        let constraint = (x) => Math.min(Math.max(x, 0), 1);

        return hslToRgb(
            constraint(this.hue/360), 
            constraint(this.saturation/100), 
            constraint(this.lightness/100)
        );
    }

    createDOMNode() {
        this._el = document.createElement("div");
        this.parent.appendChild(this._el);
        this.setFoldedClass();
        this.createDOMControls();
        this.render();
    }

    createDOMControls(){
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "<img src=" + trash + ">";

        deleteButton.addEventListener("click", () => {
            this.remove();
        })

        let controls = document.createElement("div");
        controls.setAttribute("class", "wrap-controls");

        controls.appendChild(deleteButton);
        this._el.appendChild(controls);
    }

    render() {
        this._el.style.backgroundColor = constructHSLString(
            this.hue,
            this.saturation,
            this.lightness
        );
    }

    setFoldedClass() {
        this._el.setAttribute("class", this.isFolded ? "wrap-folded" : "wrap");
    }

    initializeEventHandlers() {
        this._el.addEventListener("mousemove", (e) => {
            this.mouseMoveHandler(e);
        });

        this._el.addEventListener("click", (e) => {
            this.isFolded = !this.isFolded;
            this.setFoldedClass();
        });
    }

    remove(){
        this.parent.dispatchEvent(new CustomEvent("delete-wrap", {detail: this}));
        this._el.remove();
    }

    mouseMoveHandler(e) {
        // Hue is relative to horizontal position of the mouse
        // Saturation is relative to vertical position of the mouse
        if (!this.isFolded) {
            this.hue = Math.round(
                e.offsetX / (e.originalTarget.clientWidth / 360)
            );
            this.saturation = Math.round(
                e.offsetY / (e.originalTarget.clientHeight / 100)
            );
            this.render();
        }
    }

    increaseLightness() {
        this.lightness++;
        this.render();
    }

    decreaseLightness() {
        this.lightness--;
        this.render();
    }
}

export { Wrap };
