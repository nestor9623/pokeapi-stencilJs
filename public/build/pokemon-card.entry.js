import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-6c533261.js';
import { P as PokeApiService } from './pokeApiService.service-6ab7793b.js';
import { b as mapInfoMove, m as mapDataLanguages, g as getPrincipalType } from './utils-2f6e5dcf.js';

const pokemonCardCss = "@import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);.bg-color-black{background-color:#000000 !important}.color-black{color:#000000 !important}.bg-color-white{background-color:#ffffff !important}.color-white{color:#ffffff !important}.bg-color-grass{background-color:#3E9709 !important}.color-grass{color:#3E9709 !important}.bg-color-grass-light{background-color:#7EB95B !important}.color-grass-light{color:#7EB95B !important}.bg-color-fire{background-color:#FC0C0B !important}.color-fire{color:#FC0C0B !important}.bg-color-fire-light{background-color:#FD5D5C !important}.color-fire-light{color:#FD5D5C !important}.bg-color-water{background-color:#0A7ABC !important}.color-water{color:#0A7ABC !important}.bg-color-water-light{background-color:#5BA6D2 !important}.color-water-light{color:#5BA6D2 !important}.bg-color-normal{background-color:#CCC9AA !important}.color-normal{color:#CCC9AA !important}.bg-color-normal-light{background-color:#DDDBC6 !important}.color-normal-light{color:#DDDBC6 !important}.bg-color-flying{background-color:#5EB9B2 !important}.color-flying{color:#5EB9B2 !important}.bg-color-flying-light{background-color:#93D0CB !important}.color-flying-light{color:#93D0CB !important}.bg-color-bug{background-color:#91BA2E !important}.color-bug{color:#91BA2E !important}.bg-color-bug-light{background-color:#BDDD6E !important}.color-bug-light{color:#BDDD6E !important}.bg-color-poison{background-color:#A819D7 !important}.color-poison{color:#A819D7 !important}.bg-color-poison-light{background-color:#C565E4 !important}.color-poison-light{color:#C565E4 !important}.bg-color-electric{background-color:#FFFA24 !important}.color-electric{color:#FFFA24 !important}.bg-color-electric-light{background-color:#FFFB6D !important}.color-electric-light{color:#FFFB6D !important}.bg-color-ground{background-color:#E1D158 !important}.color-ground{color:#E1D158 !important}.bg-color-ground-light{background-color:#EDE293 !important}.color-ground-light{color:#EDE293 !important}.bg-color-fighting{background-color:#E81319 !important}.color-fighting{color:#E81319 !important}.bg-color-fighting-light{background-color:#EF6165 !important}.color-fighting-light{color:#EF6165 !important}.bg-color-psychic{background-color:#EC0E63 !important}.color-psychic{color:#EC0E63 !important}.bg-color-psychic-light{background-color:#F55792s !important}.color-psychic-light{color:#F55792s !important}.bg-color-rock{background-color:#776A3E !important}.color-rock{color:#776A3E !important}.bg-color-rock-light{background-color:#94834F !important}.color-rock-light{color:#94834F !important}.bg-color-ice{background-color:#1995A1 !important}.color-ice{color:#1995A1 !important}.bg-color-ice-light{background-color:#65B8C0 !important}.color-ice-light{color:#65B8C0 !important}.bg-color-ghost{background-color:#8E55A4 !important}.color-ghost{color:#8E55A4 !important}.bg-color-ghost-light{background-color:#B38DC2 !important}.color-ghost-light{color:#B38DC2 !important}.bg-color-dragon{background-color:#8A55FD !important}.color-dragon{color:#8A55FD !important}.bg-color-dragon-light{background-color:#B18DFD !important}.color-dragon-light{color:#B18DFD !important}.bg-color-dark{background-color:#5F4632 !important}.color-dark{color:#5F4632 !important}.bg-color-dark-light{background-color:#916852 !important}.color-dark-light{color:#916852 !important}.bg-color-steel{background-color:#7B8E8A !important}.color-steel{color:#7B8E8A !important}.bg-color-steel-light{background-color:#BBC5C4 !important}.color-steel-light{color:#BBC5C4 !important}.bg-color-fairy{background-color:#FFA0C2 !important}.color-fairy{color:#FFA0C2 !important}.bg-color-fairy-light{background-color:#FDD1E0 !important}.color-fairy-light{color:#FDD1E0 !important}.bg-color-gray{background-color:#b6b6b6 !important}.color-gray{color:#b6b6b6 !important}.w-0{width:0%}.h-0{height:0%}.w-1{width:1%}.h-1{height:1%}.w-2{width:2%}.h-2{height:2%}.w-3{width:3%}.h-3{height:3%}.w-4{width:4%}.h-4{height:4%}.w-5{width:5%}.h-5{height:5%}.w-6{width:6%}.h-6{height:6%}.w-7{width:7%}.h-7{height:7%}.w-8{width:8%}.h-8{height:8%}.w-9{width:9%}.h-9{height:9%}.w-10{width:10%}.h-10{height:10%}.w-11{width:11%}.h-11{height:11%}.w-12{width:12%}.h-12{height:12%}.w-13{width:13%}.h-13{height:13%}.w-14{width:14%}.h-14{height:14%}.w-15{width:15%}.h-15{height:15%}.w-16{width:16%}.h-16{height:16%}.w-17{width:17%}.h-17{height:17%}.w-18{width:18%}.h-18{height:18%}.w-19{width:19%}.h-19{height:19%}.w-20{width:20%}.h-20{height:20%}.w-21{width:21%}.h-21{height:21%}.w-22{width:22%}.h-22{height:22%}.w-23{width:23%}.h-23{height:23%}.w-24{width:24%}.h-24{height:24%}.w-25{width:25%}.h-25{height:25%}.w-26{width:26%}.h-26{height:26%}.w-27{width:27%}.h-27{height:27%}.w-28{width:28%}.h-28{height:28%}.w-29{width:29%}.h-29{height:29%}.w-30{width:30%}.h-30{height:30%}.w-31{width:31%}.h-31{height:31%}.w-32{width:32%}.h-32{height:32%}.w-33{width:33%}.h-33{height:33%}.w-34{width:34%}.h-34{height:34%}.w-35{width:35%}.h-35{height:35%}.w-36{width:36%}.h-36{height:36%}.w-37{width:37%}.h-37{height:37%}.w-38{width:38%}.h-38{height:38%}.w-39{width:39%}.h-39{height:39%}.w-40{width:40%}.h-40{height:40%}.w-41{width:41%}.h-41{height:41%}.w-42{width:42%}.h-42{height:42%}.w-43{width:43%}.h-43{height:43%}.w-44{width:44%}.h-44{height:44%}.w-45{width:45%}.h-45{height:45%}.w-46{width:46%}.h-46{height:46%}.w-47{width:47%}.h-47{height:47%}.w-48{width:48%}.h-48{height:48%}.w-49{width:49%}.h-49{height:49%}.w-50{width:50%}.h-50{height:50%}.w-51{width:51%}.h-51{height:51%}.w-52{width:52%}.h-52{height:52%}.w-53{width:53%}.h-53{height:53%}.w-54{width:54%}.h-54{height:54%}.w-55{width:55%}.h-55{height:55%}.w-56{width:56%}.h-56{height:56%}.w-57{width:57%}.h-57{height:57%}.w-58{width:58%}.h-58{height:58%}.w-59{width:59%}.h-59{height:59%}.w-60{width:60%}.h-60{height:60%}.w-61{width:61%}.h-61{height:61%}.w-62{width:62%}.h-62{height:62%}.w-63{width:63%}.h-63{height:63%}.w-64{width:64%}.h-64{height:64%}.w-65{width:65%}.h-65{height:65%}.w-66{width:66%}.h-66{height:66%}.w-67{width:67%}.h-67{height:67%}.w-68{width:68%}.h-68{height:68%}.w-69{width:69%}.h-69{height:69%}.w-70{width:70%}.h-70{height:70%}.w-71{width:71%}.h-71{height:71%}.w-72{width:72%}.h-72{height:72%}.w-73{width:73%}.h-73{height:73%}.w-74{width:74%}.h-74{height:74%}.w-75{width:75%}.h-75{height:75%}.w-76{width:76%}.h-76{height:76%}.w-77{width:77%}.h-77{height:77%}.w-78{width:78%}.h-78{height:78%}.w-79{width:79%}.h-79{height:79%}.w-80{width:80%}.h-80{height:80%}.w-81{width:81%}.h-81{height:81%}.w-82{width:82%}.h-82{height:82%}.w-83{width:83%}.h-83{height:83%}.w-84{width:84%}.h-84{height:84%}.w-85{width:85%}.h-85{height:85%}.w-86{width:86%}.h-86{height:86%}.w-87{width:87%}.h-87{height:87%}.w-88{width:88%}.h-88{height:88%}.w-89{width:89%}.h-89{height:89%}.w-90{width:90%}.h-90{height:90%}.w-91{width:91%}.h-91{height:91%}.w-92{width:92%}.h-92{height:92%}.w-93{width:93%}.h-93{height:93%}.w-94{width:94%}.h-94{height:94%}.w-95{width:95%}.h-95{height:95%}.w-96{width:96%}.h-96{height:96%}.w-97{width:97%}.h-97{height:97%}.w-98{width:98%}.h-98{height:98%}.w-99{width:99%}.h-99{height:99%}.w-100{width:100%}.h-100{height:100%}*,*:before,*:after{box-sizing:border-box}body{background:linear-gradient(to bottom, #8c7a7a 0%, #af877c 65%, #af877c 100%) fixed;background:url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/coc-background.jpg\") no-repeat center center fixed;background-size:cover;font:14px/20px \"Lato\", Arial, sans-serif;color:#9e9e9e;margin-top:30px}.slide-container{margin:auto;text-align:center}.wrapper{padding-top:40px;padding-bottom:40px}.wrapper:focus{outline:0}.wrapper:hover{cursor:pointer}.pokemon-card{background:white;width:300px;border-radius:19px;text-align:center;box-shadow:-1px 15px 30px -12px black}.pokemon-card__unit-name{font-size:26px;color:white;font-weight:900;text-transform:capitalize}.pokemon-card__image{height:230px;margin-bottom:35px;border-top-left-radius:14px;border-top-right-radius:14px}.pokemon-card__image--fondo{background:url(\"https://electronica-basica.com/wp-content/uploads/2020/01/circuito-electronico.jpg\") no-repeat;height:300px;background-size:100% 100%;display:flex;justify-content:center;align-items:center;border-top-left-radius:14px;border-top-right-radius:14px}.items{display:flex;flex-direction:column;align-items:center}.items span{font-weight:500;text-transform:capitalize;color:white;font-size:25px}.items img{width:30%}.pokemon-card__level{text-transform:uppercase;font-size:12px;font-weight:700;margin-bottom:3px}.pokemon-card__unit-description{padding:20px;margin-bottom:10px;display:flex;justify-content:space-around}.pokemon-card__unit-description span{border:solid;width:100px;border-radius:10px;border-color:white;text-transform:capitalize;color:white;font-size:large;font-weight:500;border-width:2px}.pokemon-card__unit-stats--item .one-third{border-right:1px solid black}.pokemon-card__unit-stats{color:white;font-weight:700;border-bottom-left-radius:14px;border-bottom-right-radius:14px}.pokemon-card__unit-stats .one-third{width:33%;float:left;padding:20px 15px}.pokemon-card__unit-stats .stat{font-size:24px;margin-bottom:10px}.pokemon-card__unit-stats .stat-value{text-transform:uppercase;font-weight:400;font-size:12px}.pokemon-card__unit-stats .no-border{border-right:none}.one-third2{width:33%;float:left;padding:20px 15px}.clearfix:after{visibility:hidden;display:block;font-size:0;content:\" \";clear:both;height:0}.slick-prev{left:100px}.slick-next{right:100px}";

const PokemonCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.cardSelected = createEvent(this, "cardSelected", 7);
    this.moves = [];
    this.types = [];
    this.pokeApiService = new PokeApiService();
  }
  async componentDidLoad() {
    this.types = [];
    this.moves = [];
    this.setDataPokemon(this.pokemonName);
  }
  async setDataPokemon(pokemonName) {
    await this.pokeApiService.getPokemonByidOrName(pokemonName).then(async (response) => {
      this.informacionPokemon = response;
      this.datosToStorage = {
        pokemonInfo: this.informacionPokemon,
        language: this.language
      };
      await this.getInfoType(response);
      await this.getInfoMove(response);
    });
  }
  clickArticle(data) {
    this.cardSelected.emit({ pokemon: data });
    this.openModal = true;
  }
  async getInfoMove(response) {
    response.moves.forEach(async (element, index) => {
      if (index < 4) {
        await this.pokeApiService.getDataByUrl(element.move.url).then(response => {
          const movimiento = mapInfoMove(response, this.language);
          this.moves.push(movimiento);
        });
      }
    });
  }
  async getInfoType(response) {
    response.types.forEach(async (element) => {
      await this.pokeApiService.getDataByUrl(element.type.url).then(data => {
        const poder = mapDataLanguages(data, this.language);
        this.types.push(poder);
      });
    });
  }
  closeModal() {
    this.openModal = false;
  }
  render() {
    var _a;
    return (h(Host, null, this.informacionPokemon ? (h("div", { class: "slide-container" }, h("div", { class: "wrapper", onClick: () => this.clickArticle(this.informacionPokemon.id) }, h("div", { class: "pokemon-card barbarian" }, h("div", { class: "pokemon-card__image--fondo" }, h("div", { class: "items" }, h("img", { src: this.informacionPokemon.sprites.other.dream_world.front_default, alt: (_a = this.informacionPokemon) === null || _a === void 0 ? void 0 : _a.id }), h("span", null, this.informacionPokemon.name))), h("div", { class: 'pokemon-card__unit-description bg-color-' + getPrincipalType(this.informacionPokemon.types) }, this.informacionPokemon.types.map(item => (h("span", { class: 'poder' }, item.type.name)))), h("div", { class: 'pokemon-card__unit-stats pokemon-card__unit-stats--item clearfix' + ' bg-color-' + getPrincipalType(this.informacionPokemon.types) }, this.informacionPokemon.stats.map(item => {
      if (item.stat.name === 'hp') {
        return h("div", { class: "one-third" }, h("div", { class: "stat" }, item.base_stat), h("div", { class: "stat-value" }, this.literals.hp));
      }
      if (item.stat.name === 'attack') {
        return h("div", { class: "one-third" }, h("div", { class: "stat" }, item.base_stat), h("div", { class: "stat-value" }, this.literals.attack));
      }
      if (item.stat.name === 'defense') {
        return h("div", { class: "one-third2" }, h("div", { class: "stat" }, item.base_stat), h("div", { class: "stat-value" }, this.literals.defense));
      }
    })))))) : (h("div", null, "Is Loading....")), h("pokemon-modal-dialog", { id: "open-modal", titulo: "Prueba", pokemon: this.informacionPokemon, moves: this.moves, open: this.openModal, onModalState: () => this.closeModal(), literals: this.literals })));
  }
  get element() { return getElement(this); }
};
PokemonCard.style = pokemonCardCss;

export { PokemonCard as pokemon_card };
