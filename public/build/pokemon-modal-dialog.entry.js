import { r as registerInstance, f as createEvent, h, e as Host } from './index-6c533261.js';
import { P as PokeApiService } from './pokeApiService.service-6ab7793b.js';
import { c as generateRandomsWithZise, g as getPrincipalType } from './utils-2f6e5dcf.js';
import { g as get, s as set } from './storageService.service-d16cf165.js';

const pokemonModalDialogCss = ".bg-color-black{background-color:#000000 !important}.color-black{color:#000000 !important}.bg-color-white{background-color:#ffffff !important}.color-white{color:#ffffff !important}.bg-color-grass{background-color:#3E9709 !important}.color-grass{color:#3E9709 !important}.bg-color-grass-light{background-color:#7EB95B !important}.color-grass-light{color:#7EB95B !important}.bg-color-fire{background-color:#FC0C0B !important}.color-fire{color:#FC0C0B !important}.bg-color-fire-light{background-color:#FD5D5C !important}.color-fire-light{color:#FD5D5C !important}.bg-color-water{background-color:#0A7ABC !important}.color-water{color:#0A7ABC !important}.bg-color-water-light{background-color:#5BA6D2 !important}.color-water-light{color:#5BA6D2 !important}.bg-color-normal{background-color:#CCC9AA !important}.color-normal{color:#CCC9AA !important}.bg-color-normal-light{background-color:#DDDBC6 !important}.color-normal-light{color:#DDDBC6 !important}.bg-color-flying{background-color:#5EB9B2 !important}.color-flying{color:#5EB9B2 !important}.bg-color-flying-light{background-color:#93D0CB !important}.color-flying-light{color:#93D0CB !important}.bg-color-bug{background-color:#91BA2E !important}.color-bug{color:#91BA2E !important}.bg-color-bug-light{background-color:#BDDD6E !important}.color-bug-light{color:#BDDD6E !important}.bg-color-poison{background-color:#A819D7 !important}.color-poison{color:#A819D7 !important}.bg-color-poison-light{background-color:#C565E4 !important}.color-poison-light{color:#C565E4 !important}.bg-color-electric{background-color:#FFFA24 !important}.color-electric{color:#FFFA24 !important}.bg-color-electric-light{background-color:#FFFB6D !important}.color-electric-light{color:#FFFB6D !important}.bg-color-ground{background-color:#E1D158 !important}.color-ground{color:#E1D158 !important}.bg-color-ground-light{background-color:#EDE293 !important}.color-ground-light{color:#EDE293 !important}.bg-color-fighting{background-color:#E81319 !important}.color-fighting{color:#E81319 !important}.bg-color-fighting-light{background-color:#EF6165 !important}.color-fighting-light{color:#EF6165 !important}.bg-color-psychic{background-color:#EC0E63 !important}.color-psychic{color:#EC0E63 !important}.bg-color-psychic-light{background-color:#F55792s !important}.color-psychic-light{color:#F55792s !important}.bg-color-rock{background-color:#776A3E !important}.color-rock{color:#776A3E !important}.bg-color-rock-light{background-color:#94834F !important}.color-rock-light{color:#94834F !important}.bg-color-ice{background-color:#1995A1 !important}.color-ice{color:#1995A1 !important}.bg-color-ice-light{background-color:#65B8C0 !important}.color-ice-light{color:#65B8C0 !important}.bg-color-ghost{background-color:#8E55A4 !important}.color-ghost{color:#8E55A4 !important}.bg-color-ghost-light{background-color:#B38DC2 !important}.color-ghost-light{color:#B38DC2 !important}.bg-color-dragon{background-color:#8A55FD !important}.color-dragon{color:#8A55FD !important}.bg-color-dragon-light{background-color:#B18DFD !important}.color-dragon-light{color:#B18DFD !important}.bg-color-dark{background-color:#5F4632 !important}.color-dark{color:#5F4632 !important}.bg-color-dark-light{background-color:#916852 !important}.color-dark-light{color:#916852 !important}.bg-color-steel{background-color:#7B8E8A !important}.color-steel{color:#7B8E8A !important}.bg-color-steel-light{background-color:#BBC5C4 !important}.color-steel-light{color:#BBC5C4 !important}.bg-color-fairy{background-color:#FFA0C2 !important}.color-fairy{color:#FFA0C2 !important}.bg-color-fairy-light{background-color:#FDD1E0 !important}.color-fairy-light{color:#FDD1E0 !important}.bg-color-gray{background-color:#b6b6b6 !important}.color-gray{color:#b6b6b6 !important}.w-0{width:0%}.h-0{height:0%}.w-1{width:1%}.h-1{height:1%}.w-2{width:2%}.h-2{height:2%}.w-3{width:3%}.h-3{height:3%}.w-4{width:4%}.h-4{height:4%}.w-5{width:5%}.h-5{height:5%}.w-6{width:6%}.h-6{height:6%}.w-7{width:7%}.h-7{height:7%}.w-8{width:8%}.h-8{height:8%}.w-9{width:9%}.h-9{height:9%}.w-10{width:10%}.h-10{height:10%}.w-11{width:11%}.h-11{height:11%}.w-12{width:12%}.h-12{height:12%}.w-13{width:13%}.h-13{height:13%}.w-14{width:14%}.h-14{height:14%}.w-15{width:15%}.h-15{height:15%}.w-16{width:16%}.h-16{height:16%}.w-17{width:17%}.h-17{height:17%}.w-18{width:18%}.h-18{height:18%}.w-19{width:19%}.h-19{height:19%}.w-20{width:20%}.h-20{height:20%}.w-21{width:21%}.h-21{height:21%}.w-22{width:22%}.h-22{height:22%}.w-23{width:23%}.h-23{height:23%}.w-24{width:24%}.h-24{height:24%}.w-25{width:25%}.h-25{height:25%}.w-26{width:26%}.h-26{height:26%}.w-27{width:27%}.h-27{height:27%}.w-28{width:28%}.h-28{height:28%}.w-29{width:29%}.h-29{height:29%}.w-30{width:30%}.h-30{height:30%}.w-31{width:31%}.h-31{height:31%}.w-32{width:32%}.h-32{height:32%}.w-33{width:33%}.h-33{height:33%}.w-34{width:34%}.h-34{height:34%}.w-35{width:35%}.h-35{height:35%}.w-36{width:36%}.h-36{height:36%}.w-37{width:37%}.h-37{height:37%}.w-38{width:38%}.h-38{height:38%}.w-39{width:39%}.h-39{height:39%}.w-40{width:40%}.h-40{height:40%}.w-41{width:41%}.h-41{height:41%}.w-42{width:42%}.h-42{height:42%}.w-43{width:43%}.h-43{height:43%}.w-44{width:44%}.h-44{height:44%}.w-45{width:45%}.h-45{height:45%}.w-46{width:46%}.h-46{height:46%}.w-47{width:47%}.h-47{height:47%}.w-48{width:48%}.h-48{height:48%}.w-49{width:49%}.h-49{height:49%}.w-50{width:50%}.h-50{height:50%}.w-51{width:51%}.h-51{height:51%}.w-52{width:52%}.h-52{height:52%}.w-53{width:53%}.h-53{height:53%}.w-54{width:54%}.h-54{height:54%}.w-55{width:55%}.h-55{height:55%}.w-56{width:56%}.h-56{height:56%}.w-57{width:57%}.h-57{height:57%}.w-58{width:58%}.h-58{height:58%}.w-59{width:59%}.h-59{height:59%}.w-60{width:60%}.h-60{height:60%}.w-61{width:61%}.h-61{height:61%}.w-62{width:62%}.h-62{height:62%}.w-63{width:63%}.h-63{height:63%}.w-64{width:64%}.h-64{height:64%}.w-65{width:65%}.h-65{height:65%}.w-66{width:66%}.h-66{height:66%}.w-67{width:67%}.h-67{height:67%}.w-68{width:68%}.h-68{height:68%}.w-69{width:69%}.h-69{height:69%}.w-70{width:70%}.h-70{height:70%}.w-71{width:71%}.h-71{height:71%}.w-72{width:72%}.h-72{height:72%}.w-73{width:73%}.h-73{height:73%}.w-74{width:74%}.h-74{height:74%}.w-75{width:75%}.h-75{height:75%}.w-76{width:76%}.h-76{height:76%}.w-77{width:77%}.h-77{height:77%}.w-78{width:78%}.h-78{height:78%}.w-79{width:79%}.h-79{height:79%}.w-80{width:80%}.h-80{height:80%}.w-81{width:81%}.h-81{height:81%}.w-82{width:82%}.h-82{height:82%}.w-83{width:83%}.h-83{height:83%}.w-84{width:84%}.h-84{height:84%}.w-85{width:85%}.h-85{height:85%}.w-86{width:86%}.h-86{height:86%}.w-87{width:87%}.h-87{height:87%}.w-88{width:88%}.h-88{height:88%}.w-89{width:89%}.h-89{height:89%}.w-90{width:90%}.h-90{height:90%}.w-91{width:91%}.h-91{height:91%}.w-92{width:92%}.h-92{height:92%}.w-93{width:93%}.h-93{height:93%}.w-94{width:94%}.h-94{height:94%}.w-95{width:95%}.h-95{height:95%}.w-96{width:96%}.h-96{height:96%}.w-97{width:97%}.h-97{height:97%}.w-98{width:98%}.h-98{height:98%}.w-99{width:99%}.h-99{height:99%}.w-100{width:100%}.h-100{height:100%}.overlay{opacity:0;visibility:hidden;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0, 0, 0, 0.42);-webkit-transition:opacity 0.5s, visibility 0s 0.5s;transition:opacity 0.5s, visibility 0s 0.5s;display:flex;align-items:center;justify-content:center}.is-visible{opacity:1;visibility:visible;-webkit-transition:opacity 0.5s;transition:opacity 0.5s}.is-transparent{opacity:0}.modal-window{background:white;width:75%;height:75%;z-index:999}.modal-window__content{width:100%;height:100%}*{box-sizing:border-box}html,body{height:100%}body{display:grid;grid-template-rows:1fr;font-family:\"Raleway\", sans-serif;background-color:#01e37f}h3{font-size:0.7em;letter-spacing:1.2px;color:#a6a6a6}img{max-width:100%;filter:drop-shadow(1px 1px 3px #a6a6a6)}.product{display:grid;grid-template-columns:0.9fr 1fr;margin:auto;padding:2.5em 0;min-width:600px;background-color:white;border-radius:5px}.product2{display:none}.pokemon__photo{position:relative}.pokemon__photo--stats{margin-left:2rem}.photo-container{position:absolute;left:-2.5em;display:grid;grid-template-rows:1fr;width:100%;border-radius:6px;box-shadow:4px 4px 25px -2px rgba(0, 0, 0, 0.3)}.photo-main{border-radius:6px 6px 0 0;display:flex;justify-content:center;align-items:center}.photo-main img{left:-3.5em;top:2em;max-width:110%;filter:saturate(150%) contrast(120%) hue-rotate(10deg) drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3))}.photo-album{padding:0.7em 1em;border-radius:0 0 6px 6px;background-color:#fff;display:flex;flex-flow:row wrap;justify-content:space-around}.pokemon__info{padding:0.8em 0}.title h1{margin-bottom:0.1em;color:black;font-size:1.5em;font-weight:900;text-transform:capitalize}.title span{font-size:0.7em;color:#a6a6a6}.personal-info{font-size:12px;font-weight:500;margin-bottom:10px}.personal-info span{padding-left:0.15em;font-size:2.9em}.poderes{display:flex;justify-content:space-around;text-transform:capitalize;font-weight:600;color:#ff3f40;font-size:1.2em}.poderes span{border-radius:102px;width:100px;font-weight:500;font-size:16px;background-color:#d5d5d5;text-align:center}.movimientos{clear:left;margin-bottom:1rem;display:flex;flex-flow:column;text-transform:capitalize;font-weight:500}.movimientos__principal{border-bottom:ridge;border-radius:6px;border-color:#bdbdbd;border-width:1px}.movimientos__principal span{margin:1.5em 0;font-size:15px}.movimientos__principal p{font-size:12px}.batalla--btn{padding:1.5em 3.1em;border:none;border-radius:7px;font-size:0.8em;font-weight:700;letter-spacing:1.3px;color:#fff;box-shadow:2px 2px 25px -7px #4c4c4c;cursor:pointer}.batalla--btn:active{transform:scale(0.97)}";

const PokemonModalDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalState = createEvent(this, "modalState", 7);
    this.open = false;
    this.transparent = false;
    this.pokeApiService = new PokeApiService();
  }
  componentDidLoad() {
  }
  async closeModal() {
    this.modalState.emit(false);
    this.language = await get("language");
    const sizeArray = await get("totalPokemones"); // more than 900 someone are undefined
    const number = generateRandomsWithZise(0, 500, 1);
    if (number[0] > 999) {
      debugger;
      number[0] = number[0].padStart(4, '0');
    }
    else {
      this.setRandomnPokemon(number[0]);
    }
    const objectSet = {
      language: this.language,
      pokemonInfo: this.pokemon
    };
    set("pokemon", objectSet);
  }
  async setRandomnPokemon(id) {
    await this.pokeApiService.getPokemonByidOrName(id).then(async (response) => {
      this.pokemonCom = response;
      const datosToStorage = {
        pokemon: this.pokemonCom,
        language: this.language
      };
      set("pokemonCom", datosToStorage);
      // await this.getInfoType(response);
      // await this.getInfoMove(response);
    });
  }
  getHeightPokemon(value) {
    return value / 10;
  }
  render() {
    return (h(Host, null, this.open ? h("div", { class: 'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '') }, h("div", { class: "modal-window" }, h("div", { class: "modal-window__content" }, h("section", { class: "product" }, h("div", { class: "pokemon__photo" }, h("div", { class: "pokemon__photo--stats" }, h("div", { class: "title" }, h("h1", null, this.pokemon.name, " #", this.pokemon.id)), h("div", { class: 'personal-info color-' + getPrincipalType(this.pokemon.types) }, this.literals.experience, ": ", this.pokemon.base_experience, " ", h("br", null), this.literals.weight, ": ", this.pokemon.weight, " Kg", h("br", null), this.literals.height, ": ", (this.pokemon.height / 10) < 1 ? (this.pokemon.height / 10) * 100 + ' Centimetros' : (this.pokemon.height / 10) + ' Metros')), h("div", { class: "photo-container" }, h("div", { class: 'photo-main bg-color-' + getPrincipalType(this.pokemon.types) + '-light' }, h("img", { src: this.pokemon.sprites.other.dream_world.front_default, alt: "green apple slice" })), h("div", { class: "photo-album" }, h("img", { src: this.pokemon.sprites.back_default, alt: "img de espalda" }), h("img", { src: this.pokemon.sprites.front_default, alt: "img de frente" })))), h("div", { class: "pokemon__info" }, h("h3", null, "Tipo Pokemon"), h("div", { class: 'poderes color-' + getPrincipalType(this.pokemon.types) }, this.pokemon.types.map(item => {
      return h("span", null, item.type.name);
    })), h("h3", null, "Algunos movimientos"), h("div", { class: "movimientos" }, this.moves.map((item, index) => {
      if (index < 4) {
        return h("div", { class: "movimientos__principal" }, h("span", { class: 'color-' + getPrincipalType(this.pokemon.types) }, item.name), h("p", null, item.text));
      }
    })), h("stencil-route-link", { url: `/battle` }, h("button", { class: 'batalla--btn bg-color-' + getPrincipalType(this.pokemon.types), onClick: () => this.closeModal() }, "Batalla"))))))) : h("div", null)));
  }
};
PokemonModalDialog.style = pokemonModalDialogCss;

export { PokemonModalDialog as pokemon_modal_dialog };