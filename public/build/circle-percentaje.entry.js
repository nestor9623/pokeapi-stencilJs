import { r as registerInstance, h } from './index-6c533261.js';

const circlePercentajeCss = "";

const CirclePercentaje = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "container" }, h("progress", { max: "100", value: "80" })));
  }
};
CirclePercentaje.style = circlePercentajeCss;

export { CirclePercentaje as circle_percentaje };
