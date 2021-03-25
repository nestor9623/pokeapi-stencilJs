import { r as registerInstance, h, e as Host, g as getElement } from './index-6c533261.js';
import { P as PokeApiService } from './pokeApiService.service-6ab7793b.js';
import { g as getLocaleComponentStrings } from './locate-68519c4f.js';
import { s as set } from './storageService.service-d16cf165.js';

const pokemonListCss = ":host{display:block}:host .header-principal h2{text-align:center;color:white}:host .principal{background:url(\"../../utils/images/fondo.jpg\") no-repeat;height:100%;width:100%;overflow:hidden;background-position:center;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;background-size:100% 100%}:host .principal a{text-decoration:none}:host .main-article{display:flex;flex-flow:row wrap;justify-content:center}:host .main-article pokemon-card{margin:2rem;flex-grow:1}@media (min-width: 400px){:host section h1 fa-icon{display:inline}}@media (min-width: 768px){:host pokemon-card{max-width:16.5rem}}";

const PokemonList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemsPorPagina = 20;
    this.offset = 0;
    this.openModal = false;
    this.pokeApiService = new PokeApiService();
    this.loadPage = () => {
      this.pokemons = [];
      this.pokeApiService.loadPage(this.offset, this.itemsPorPagina).then(response => {
        this.pokemons = response.results;
        this.pokemonCount = response.count;
        set("totalPokemones", this.pokemonCount);
      });
    };
    this.clickCardEvent = async (event) => {
      await set("language", this.match.params.language);
      this.openModal = !this.openModal;
      console.log('informacion recibida', event.detail.pokemon);
    };
  }
  async componentWillLoad() {
    this.loadPage();
    this.strings = await getLocaleComponentStrings(this.element, this.match.params.language);
  }
  handlePaging(paging) {
    this.offset = paging.offset;
    this.loadPage();
  }
  render() {
    var _a;
    if (this.match) {
      return (h(Host, null, h("div", { class: "principal" }, h("stencil-route-link", { url: '/' }, h("header", { class: "header-principal" }, h("h2", null, this.strings.listTitle))), ((_a = this.pokemons) === null || _a === void 0 ? void 0 : _a.length) ? (h("div", { class: "main-article" }, this.pokemons.map(pokemon => (h("pokemon-card", { "pokemon-name": pokemon.name, onCardSelected: event => this.clickCardEvent(event), literals: this.strings, language: this.match.params.language }))))) : (h("div", null, "Loading...")), h("pokemon-paginator", { count: this.pokemonCount, offset: this.offset, itemsPerPage: this.itemsPorPagina, onPaging: event => this.handlePaging(event.detail) }))));
    }
  }
  get element() { return getElement(this); }
};
PokemonList.style = pokemonListCss;

export { PokemonList as pokemon_list };
