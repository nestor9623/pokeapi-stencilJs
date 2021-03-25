import { r as registerInstance, f as createEvent, h } from './index-6c533261.js';

const selectPokemonCss = ".select_principal{display:flex;justify-content:space-around;color:white;padding:10px;flex-direction:column;width:100%}.select_principal .label-image{color:#f5df00;text-align:center;font-weight:600;font-size:18px;text-shadow:2px 0 0px #000000, 3px 2px 0px rgba(77, 0, 38, 0.5), 3px 0 3px #000000, 5px 0 3px #800015, 6px 2px 3px rgba(77, 0, 13, 0.5), 6px 0 9px #000000, 8px 0 9px #802a00, 9px 2px 9px rgba(77, 25, 0, 0.5), 9px 0 18px #ffd500, 11px 0 18px #806a00, 12px 2px 18px rgba(77, 66, 0, 0.5), 12px 0 30px #d4ff00, 14px 0 30px #6a8000, 15px 2px 30px rgba(64, 77, 0, 0.5), 15px 0 45px #80ff00, 17px 0 45px #408000, 17px 2px 45px rgba(38, 77, 0, 0.5)}.select-css{display:block;font-size:16px;font-family:sans-serif;font-weight:700;color:#444;line-height:1.3;padding:0.6em 1.4em 0.5em 0.8em;width:100%;max-width:100%;box-sizing:border-box;margin:0;border:1px solid #aaa;box-shadow:0 1px 0 1px rgba(0, 0, 0, 0.04);border-radius:0.5em;-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);background-repeat:no-repeat, repeat;background-position:right 0.7em top 50%, 0 0;background-size:0.65em auto, 100%}.select-css::-ms-expand{display:none}.select-css:hover{border-color:#888}.select-css:focus{border-color:#aaa;box-shadow:0 0 1px 3px rgba(59, 153, 252, 0.7);box-shadow:0 0 0 3px -moz-mac-focusring;color:#222;outline:none}.select-css option{font-weight:normal}.select-css:disabled,.select-css[aria-disabled=true]{color:graytext;background-image:url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%)}.select-css:disabled:hover,.select-css[aria-disabled=true]{border-color:#aaa}";

const SelectPokemon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueSelect = createEvent(this, "valueSelect", 7);
    this.selectedReceiverIds = [102, 103];
  }
  componentDidLoad() {
    // console.log('opciones recibidas en select', this.options);
  }
  handleSecondSelect(event) {
    this.valueSelect.emit(event.target.value);
  }
  render() {
    return (h("div", { class: "select_principal" }, h("label", { htmlFor: "browser", class: "label-image" }, this.titulo), h("select", { class: "select-css", onInput: (event) => this.handleSecondSelect(event) }, this.options.map(item => (h("option", { value: item.id }, item.name))))));
  }
};
SelectPokemon.style = selectPokemonCss;

export { SelectPokemon as select_pokemon };
