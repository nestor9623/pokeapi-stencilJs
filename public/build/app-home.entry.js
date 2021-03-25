import { r as registerInstance, h, g as getElement } from './index-6c533261.js';
import { P as PokeApiService } from './pokeApiService.service-6ab7793b.js';
import { g as getLocaleComponentStrings } from './locate-68519c4f.js';
import { m as mapDataLanguages } from './utils-2f6e5dcf.js';

const appHomeCss = ":host .principal__container{display:flex;justify-content:center;align-items:center;flex-flow:column;min-height:50vh}:host .principal-dark{background:url(\"../../utils/images/fondo.jpg\");height:100%;width:100%;left:0;top:0;overflow:hidden;position:fixed;background-size:100% 100%}:host .principal-dark .header{display:flex;align-items:center;justify-content:center;color:#f5df00;padding:5rem}:host .principal-dark__button .start-btn{text-align:center;display:inline-block;margin:5px;font-weight:bold;padding:10px 10px 10px 10px;background-color:lightgray;text-shadow:-1px -1px black, 1px 1px white;color:gray;-webkit-border-radius:7px;-moz-border-radius:7px;-o-border-radius:7px;border-radius:7px;box-shadow:0 0.2em gray;cursor:pointer}:host .principal-light{background:url(\"../../utils/images/fondo.jpg\");height:100%;width:100%;left:0;top:0;overflow:hidden;position:fixed;background-size:100% 100%}:host .principal-light .header{display:flex;align-items:center;justify-content:center;color:#ffff;padding:5rem}:host .principal-light__button .start-btn{text-align:center;display:inline-block;margin:5px;font-weight:bold;padding:10px 10px 10px 10px;background-color:#fff;color:#000000;-webkit-border-radius:7px;-moz-border-radius:7px;-o-border-radius:7px;border-radius:7px;box-shadow:0 0.2em gray;cursor:pointer}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pokeApiService = new PokeApiService();
    this.temas = [{ id: '1', name: 'Dark' }, { id: '2', name: 'Ligth' }];
    this.options = [];
    this.selectedLanguage = 'en';
    this.themeSelected = '1';
  }
  async componentWillLoad() {
    await this.getLanguages();
    this.strings = await getLocaleComponentStrings(this.element, 'en'); // principal screen
  }
  async getLanguages() {
    await this.pokeApiService.getAllLanguages().then(async (response) => {
      for (let i = 0; i < response.results.length; i++) {
        await this.pokeApiService.getDataByUrl(response.results[i].url).then(data => {
          const datos = mapDataLanguages(data, 'en');
          if (datos === null || datos === void 0 ? void 0 : datos.id) {
            this.options.push(datos);
          }
        });
      }
    });
  }
  async clickOption(event, opcion) {
    if (opcion === 1) { // logic for languages
      this.selectedLanguage = event.detail.replace('us', 'en');
      this.strings = await getLocaleComponentStrings(this.element, this.selectedLanguage); // principal screen
      console.log(this.strings);
    }
    else if (opcion === 2) { // logic for theme
      this.themeSelected = event.detail;
    }
    else {
      this.themeSelected = '1';
      this.selectedLanguage = 'en';
    }
  }
  goToListPokemon() {
  }
  render() {
    return (h("div", { class: this.themeSelected === '1' ? 'principal-dark' : 'principal-light' }, h("div", { class: "header" }, h("h2", null, this.strings.marquePrincipalScreen)), h("div", { class: "principal__container" }, h("div", { class: "principal__options" }, h("select-pokemon", { options: this.options, titulo: this.strings.language, onValueSelect: event => this.clickOption(event, 1) }), h("select-pokemon", { options: this.temas, titulo: this.strings.temeTitle, onValueSelect: event => this.clickOption(event, 2) })), h("div", { class: this.themeSelected === '1' ? 'principal-dark__button' : 'principal-light__button' }, h("stencil-route-link", { url: `/pokemon/${this.selectedLanguage}` }, h("span", { class: 'start-btn' }, this.strings.battle))))));
  }
  get element() { return getElement(this); }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
