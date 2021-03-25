import { r as registerInstance, h, e as Host, g as getElement } from './index-6c533261.js';
import { P as PokeApiService } from './pokeApiService.service-6ab7793b.js';
import { g as getLocaleComponentStrings } from './locate-68519c4f.js';
import { a as mapMoves, f as formatStats } from './utils-2f6e5dcf.js';
import { g as get } from './storageService.service-d16cf165.js';

const typeEffectiveness = {
  normal: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.5,
    ghost: 0,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  fire: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 1,
    grass: 2,
    ice: 2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 2,
    rock: 0.5,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 2,
    fairy: 1
  },
  water: {
    normal: 1,
    fire: 2,
    water: 0.5,
    electric: 1,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 1,
    fairy: 1
  },
  electric: {
    normal: 1,
    fire: 1,
    water: 2,
    electric: 0.5,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 0,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 1,
    fairy: 1
  },
  grass: {
    normal: 1,
    fire: 0.5,
    water: 2,
    electric: 1,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 0.5,
    ground: 2,
    flying: 0.5,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    ghost: 1,
    dragon: 0.5,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  ice: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 1,
    grass: 2,
    ice: 0.5,
    fighting: 1,
    poison: 1,
    ground: 2,
    flying: 2,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  fighting: {
    normal: 2,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 2,
    fighting: 1,
    poison: 0.5,
    ground: 1,
    flying: 0.5,
    psychic: 0.5,
    bug: 0.5,
    rock: 2,
    ghost: 0,
    dragon: 1,
    dark: 2,
    steel: 2,
    fairy: 0.5
  },
  poison: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 2,
    ice: 1,
    fighting: 1,
    poison: 0.5,
    ground: 0.5,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 0.5,
    ghost: 0.5,
    dragon: 1,
    dark: 1,
    steel: 0,
    fairy: 2
  },
  ground: {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 2,
    grass: 0.5,
    ice: 1,
    fighting: 1,
    poison: 2,
    ground: 1,
    flying: 0,
    psychic: 1,
    bug: 0.5,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 2,
    fairy: 1
  },
  flying: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 0.5,
    grass: 2,
    ice: 1,
    fighting: 2,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 2,
    rock: 0.5,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  psychic: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 2,
    ground: 1,
    flying: 1,
    psychic: 0.5,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 0,
    steel: 0.5,
    fairy: 1
  },
  bug: {
    normal: 1,
    fire: 0.5,
    water: 1,
    electric: 1,
    grass: 2,
    ice: 1,
    fighting: 0.5,
    poison: 0.5,
    ground: 1,
    flying: 0.5,
    psychic: 2,
    bug: 1,
    rock: 1,
    ghost: 0.5,
    dragon: 1,
    dark: 2,
    steel: 0.5,
    fairy: 0.5
  },
  rock: {
    normal: 1,
    fire: 2,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 2,
    fighting: 0.5,
    poison: 1,
    ground: 0.5,
    flying: 2,
    psychic: 1,
    bug: 2,
    rock: 1,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 1
  },
  ghost: {
    normal: 0,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 2,
    bug: 1,
    rock: 1,
    ghost: 2,
    dragon: 1,
    dark: 0.5,
    steel: 1,
    fairy: 1
  },
  dragon: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 1,
    steel: 0.5,
    fairy: 0
  },
  dark: {
    normal: 1,
    fire: 1,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 0.5,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 2,
    bug: 1,
    rock: 1,
    ghost: 2,
    dragon: 1,
    dark: 0.5,
    steel: 1,
    fairy: 0.5
  },
  steel: {
    normal: 1,
    fire: 0.5,
    water: 0.5,
    electric: 0.5,
    grass: 1,
    ice: 2,
    fighting: 1,
    poison: 1,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 2,
    ghost: 1,
    dragon: 1,
    dark: 1,
    steel: 0.5,
    fairy: 2
  },
  fairy: {
    normal: 1,
    fire: 0.5,
    water: 1,
    electric: 1,
    grass: 1,
    ice: 1,
    fighting: 2,
    poison: 0.5,
    ground: 1,
    flying: 1,
    psychic: 1,
    bug: 1,
    rock: 1,
    ghost: 1,
    dragon: 2,
    dark: 2,
    steel: 0.5,
    fairy: 1
  }
};

const pokemonBattleCss = ":host .principal{background:url(\"../../utils/images/fondo.jpg\");height:100%;width:100%;left:0;top:0;overflow:hidden;position:fixed;background-size:100% 100%;display:flex;flex-direction:column;justify-content:center;align-items:center}:host .principal a{font-family:\"Press Start 2P\", cursive;color:#eaa821}:host .principal .header h2{text-align:center;font-family:\"Press Start 2P\", cursive;color:#eaa821}:host .principal .contenedor-personajes{display:flex;flex-direction:column;flex-flow:row;border:solid;border-radius:10px;background:url(\"https://image.freepik.com/free-vector/versus-vs-fight-battle-screen-background_1017-23762.jpg\");background-size:100% 100%;width:70%;height:70%}:host .principal .contenedor-personajes .personaje{width:100%;height:100%;display:flex;justify-content:flex-end;flex-flow:column;align-items:center}:host .principal .contenedor-personajes .personaje--img img{height:225px}:host .principal .contenedor-personajes .personaje--hp{-webkit-box-shadow:0px 0px 27px 6px rgba(0, 0, 0, 0.98);box-shadow:0px 0px 27px 6px rgba(0, 0, 0, 0.98);display:flex;flex-flow:column;background:white;padding:10px;border-radius:10px}:host .principal .contenedor-personajes .personaje--hp .life{font-family:\"Press Start 2P\", cursive;color:#eaa821;background:#3d513c;border-radius:6px}:host .principal .contenedor-personajes .personaje--hp .life span{font-size:12px}:host .principal .contenedor-personajes .personaje--hp .life progress{max-width:100%;max-height:100%;border:1px solid #ccc;margin:4px 6px;background:#dedede;background:-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#e9e9e9));background:-moz-linear-gradient(top, #ccc, #e9e9e9);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#cccccc\", endColorstr=\"#e9e9e9\");-moz-box-shadow:0 1px 0 #fff;-webkit-box-shadow:0 1px 0 #fff;box-shadow:0 1px 0 #fff;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}:host .principal .contenedor-personajes .personaje--hp span{text-transform:capitalize;font-weight:700;padding-right:3px}:host .principal .contenedor-personajes .com{width:100%;height:100%;display:flex;justify-content:center;flex-flow:column;align-items:center}:host .principal .contenedor-personajes .com--img{padding-bottom:2rem}:host .principal .contenedor-personajes .com--img img{height:180px}:host .principal .contenedor-personajes .com--hp{-webkit-box-shadow:0px 0px 27px 6px rgba(0, 0, 0, 0.98);box-shadow:0px 0px 27px 6px rgba(0, 0, 0, 0.98);background:white;padding:10px;border-radius:10px;display:flex;flex-flow:column}:host .principal .contenedor-personajes .com--hp .life{font-family:\"Press Start 2P\", cursive;color:#eaa821;background:#3d513c;border-radius:6px}:host .principal .contenedor-personajes .com--hp .life span{font-size:12px}:host .principal .contenedor-personajes .com--hp .life progress{max-width:100%;max-height:100%;border:1px solid #ccc;margin:4px 6px;background:#dedede;background:-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#e9e9e9));background:-moz-linear-gradient(top, #ccc, #e9e9e9);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#cccccc\", endColorstr=\"#e9e9e9\");-moz-box-shadow:0 1px 0 #fff;-webkit-box-shadow:0 1px 0 #fff;box-shadow:0 1px 0 #fff;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px}:host .principal .contenedor-personajes .com--damage{color:white;text-shadow:2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;font-weight:500;font-size:26px;animation:attack 1s 2 alternate}:host .principal .contenedor-personajes .com--none{display:none}:host .principal .contenedor-personajes .com span{text-transform:capitalize;font-weight:700;padding-right:3px}:host .opciones{width:70%;border:solid;border-top:hidden;height:75px;border-radius:6px;display:flex;flex-direction:row;background-color:white;font-family:\"Press Start 2P\", cursive}:host .opciones--text{display:flex;justify-content:center;align-items:center;font-size:14px}:host .opciones--text.visible{width:65%}:host .opciones--text.hidde{width:100%}:host .opciones--buttons{width:35%}:host .opciones--buttons button{box-shadow:inset 0px 1px 0px 0px #cf866c;background:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);background-color:#d0451b;border-radius:5px;border:1px solid #942911;cursor:pointer;color:#ffffff;font-family:\"Press Start 2P\", cursive;font-size:9px;text-shadow:0px 1px 0px #eb6932;width:50%;height:50%;text-transform:capitalize}:host .opciones--buttons button:hover{background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);background-color:#bc3315}:host .opciones--buttons button:active{position:relative;top:1px}:host .opciones--buttons.hidde{display:none}@keyframes attack{0%{transform:translateY(0) scale(1)}100%{transform:translateY(-1rem) scale(1.1)}}@keyframes shake{10%,90%{transform:translate3d(-0.5px, 0, 0)}20%,80%{transform:translate3d(0.5px, 0, 0)}30%,50%,70%{transform:translate3d(-0.5px, 0, 0)}40%,60%{transform:translate3d(0.5px, 0, 0)}}:host .modal-header{align-items:baseline;display:flex;justify-content:space-between;font-family:\"Press Start 2P\", cursive;color:#eaa821;font-size:12px;border-bottom:solid;border-width:1px}:host .close{background:none;border:none;cursor:pointer;display:flex;height:16px;text-decoration:none;width:16px}:host .close svg{width:16px}:host .modal-none{display:none}:host .modal-wrapper{align-items:center;background:#0e0e0ef5;bottom:0;display:flex;justify-content:center;left:0;position:fixed;right:0;top:0;z-index:1}:host .modal-wrapper .modal-body{background-color:white;border-radius:10px;padding:2rem}:host .modal-wrapper .modal-body.center{display:flex;justify-content:space-between;width:90%}:host .modal-wrapper .modal-body.center .trophy{border:solid;border-radius:10px;border-width:1px;display:flex;flex-direction:column;width:60%;-webkit-box-shadow:-6px 7px 5px 2px rgba(0, 0, 0, 0.75);-moz-box-shadow:-6px 7px 5px 2px rgba(0, 0, 0, 0.75);box-shadow:-6px 7px 5px 2px rgba(0, 0, 0, 0.75)}:host .modal-wrapper .modal-body.center .trophy img{width:30%}:host .modal-wrapper .modal-body.center .trophy--principal{display:flex;justify-content:center;padding-top:1rem}:host .modal-wrapper .modal-body.center .trophy--pokemon{display:flex;justify-content:center}:host .modal-wrapper .modal-body.center .img{width:40%;display:flex;flex-direction:column;justify-content:center}:host .modal-wrapper .modal-body.center .img button{font-family:\"Press Start 2P\", cursive;background:linear-gradient(to bottom, #eaa821 5%, #eaa821 100%);color:#1d1d1d;cursor:pointer;font-size:1em;padding:1.5rem;border:0;transition:all 0.5s;border-radius:10px;width:auto;position:relative;min-width:250px;margin:1rem;border:solid;border-color:black}:host .modal-wrapper .modal-body.center .img button::after{font-family:\"Font Awesome 5 Pro\";font-weight:400;position:absolute;left:80%;top:54%;right:0;bottom:0;opacity:0;transform:translate(-50%, -50%)}:host .modal-wrapper .modal-body.center .img button:hover{background:#b1b1bb;transition:all 0.5s;border-radius:10px;box-shadow:0px 6px 15px #0000ff61;padding:1.5rem 3rem 1.5rem 1.5rem;color:#ffffff}:host .modal-wrapper .modal-body.center .img button:hover::after{opacity:1;transition:all 0.5s;color:#ffffff}";

const PokemonBattle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.maxLife = 100;
    this.initialOptios = [];
    this.colors = {
      yellow: "#cccf00",
      green: "#35aa31",
      red: "#d95f5f"
    };
    this.pokeApiService = new PokeApiService();
    this.waitTime = 3000;
    this.battleOptions = [];
    this.showOptions = true;
    this.showMoves = false;
    this.showDamagePlayer = false;
    this.showDamageCom = false;
    this.showBattleEnd = false;
  }
  async componentWillLoad() {
    this.intialState();
    await this.getInfoPokemonPlayer();
    await this.getInfoPokemonCom();
    await this.loadOptions();
    this.checkFirsAttack();
  }
  intialState() {
    this.playerPokemon = {};
    this.playerCom = {};
    this.battleOptions = [];
    this.lifePersona = this.maxLife;
    this.lifeCom = this.maxLife;
    this.showBattleEnd = false;
  }
  async loadOptions() {
    await this.getLanguage(this.language);
    this.setOtions();
    this.movesPokemonPlayer = await this.movesPlayerPokemon();
    this.movesPokemonCom = await this.movesPlayerCom();
  }
  async getInfoPokemonPlayer() {
    const datos = await get("pokemon");
    this.language = datos.language;
    this.playerPokemon = this.formatPokemonData(datos.pokemonInfo, false);
    this.propertiesPlayer = {
      hp: this.playerPokemon.stats.hp,
      color: this.colors.green,
      hpFaltante: this.playerPokemon.stats.hp
    };
  }
  async getInfoPokemonCom() {
    const datos = await get("pokemonCom");
    this.playerCom = this.formatPokemonData(datos.pokemon, true);
    this.propertiesCom = {
      hp: this.playerCom.stats.hp,
      color: this.colors.green,
      hpFaltante: this.playerCom.stats.hp
    };
  }
  async getLanguage(language) {
    this.strings = await getLocaleComponentStrings(this.element, language);
    this.textoOpcion = this.strings.toDo;
  }
  setOtions() {
    this.battleOptions.push({ id: 1, name: this.strings.fight }, { id: 2, name: this.strings.bag }, { id: 3, name: this.strings.pokemon }, { id: 4, name: this.strings.run });
    this.initialOptios = this.battleOptions;
  }
  checkFirsAttack() {
    if (this.playerCom.stats.speed >= this.playerPokemon.stats.speed) {
      const enemyMove = this.randomEnemyMove();
      const playerMove = this.randomPlayerMove();
      this.enterBattlePhase(playerMove, enemyMove, true);
    }
  }
  clickOption(data) {
    if (!this.showMoves) {
      switch (data.id) {
        case 1:
          this.showOptions = true;
          this.showMoves = true;
          this.textoOpcion = '¿Que poder va usar el pokemon?';
          this.battleOptions = this.movesPokemonPlayer;
          break;
        case 2:
        case 3:
        case 4:
          this.showOptions = false;
          this.showMoves = false;
          this.auxMessage(data.id);
          break;
        default:
          break;
      }
    }
    else {
      const enemyMove = this.randomEnemyMove();
      this.enterBattlePhase(data, enemyMove, false);
      this.showMoves = false;
      this.battleOptions = this.initialOptios;
    }
  }
  async movesPlayerPokemon() {
    let n = 4;
    var shuffled = this.playerPokemon.moves.sort(function () { return .5 - Math.random(); });
    var movimientos = shuffled.slice(0, n);
    let movesReturn = [];
    for (let i = 0; i < movimientos.length; i++) {
      await this.pokeApiService.getMoveByUrl(movimientos[i].move.url).then(response => {
        const datos = mapMoves(response);
        movesReturn.push(datos);
      });
    }
    return movesReturn;
  }
  async movesPlayerCom() {
    let n = 4;
    var shuffled = this.playerCom.moves.sort(function () { return .5 - Math.random(); });
    var movimientos = shuffled.slice(0, n);
    let movesReturn = [];
    for (let i = 0; i < movimientos.length; i++) {
      await this.pokeApiService.getMoveByUrl(movimientos[i].move.url).then(response => {
        const datos = mapMoves(response);
        movesReturn.push(datos);
      });
    }
    return movesReturn;
  }
  auxMessage(option) {
    switch (option) {
      case 2:
        this.textoOpcion = 'No tiene items en la bolsa';
        this.showMessageDelay();
        break;
      case 3:
        this.textoOpcion = 'No tiene más pokemones';
        this.showMessageDelay();
        break;
      case 4:
        this.textoOpcion = 'No puedes correr';
        this.showMessageDelay();
        break;
      default:
        break;
    }
  }
  showMessageDelay() {
    setTimeout(() => {
      this.textoOpcion = this.strings.toDo;
      this.showOptions = true;
    }, this.waitTime);
  }
  formatPokemonData(pokemon, enemy) {
    const statsFormated = formatStats(pokemon.stats);
    return {
      id: pokemon.id,
      sprites: pokemon.sprites,
      isenemy: enemy,
      name: this.capitalizeFirstLetter(pokemon.name),
      types: pokemon.types,
      moves: pokemon.moves,
      stats: statsFormated,
      status: {
        startAttack: false,
        currentAttackEffectiveness: "",
        damageDealt: 0,
        currentHp: statsFormated.hp,
        currentHpPercentage: 100,
        currentHpColor: this.colors.green,
        isAlive: true
      }
    };
  }
  capitalizeFirstLetter(str) {
    const strArray = str.split(" ");
    for (let i = 0, x = strArray.length; i < x; i++) {
      strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
    }
    return strArray.join(" ");
  }
  startAttack(attacker, attackerMove, defender) {
    attacker.status.startAttack = true;
    let battleEnd = false;
    // check selected move effectiveness on target
    let attackerMoveEffectiveness = this.calculateTypeEffectiveness(attackerMove, defender);
    // display on screen menu the attack text
    this.showOptions = false;
    this.showMoves = false;
    this.textoOpcion = this.getBattleInfoText(2, attacker.name, attackerMove.name, attackerMoveEffectiveness);
    this.showMessageDelay();
    // display on screen the move effectiveness
    attacker.status.currentAttackEffectiveness = this.getBattleInfoText(0, null, null, attackerMoveEffectiveness);
    // calculate damage dealt on target
    attacker.status.damageDealt = this.calculateDamage(attacker, defender, attackerMove);
    // apply damage on target's hp
    let appliedDamage = defender.status.currentHp - attacker.status.damageDealt;
    if (appliedDamage <= 0) {
      battleEnd = true;
      defender.status.currentHp = 0;
      defender.status.isAlive = false;
      setTimeout(() => {
        this.handleBattleEnd(attacker);
      }, 500);
    }
    else {
      defender.status.currentHp = appliedDamage;
      if (defender.isenemy) {
        // show com damage
        this.showDamagePlayer = false;
        this.showDamageCom = true;
        this.damageTotal = attacker.status.damageDealt;
        setTimeout(() => {
          this.showDamageCom = false;
        }, 2000);
      }
      else {
        this.showDamagePlayer = true;
        this.showDamageCom = false;
        this.damageTotal = attacker.status.damageDealt;
        setTimeout(() => {
          this.showDamagePlayer = false;
        }, 2000);
      }
    }
    // get damage percentage to display on screen
    const datos = this.calculatePercentage(defender);
    if (defender.isenemy) {
      this.propertiesCom = {
        hp: this.playerCom.stats.hp,
        hpFaltante: datos.status.currentHp,
        color: datos.status.currentHpColor
      };
    }
    else {
      this.propertiesPlayer = {
        hp: this.playerPokemon.stats.hp,
        hpFaltante: datos.status.currentHp,
        color: datos.status.currentHpColor
      };
    }
    return battleEnd;
  }
  calculatePercentage(pokemon) {
    const vidaRestante = (100 * pokemon.status.currentHp) / pokemon.stats.hp;
    if (vidaRestante < 50 && vidaRestante > 20) {
      pokemon.status.currentHpColor = this.colors.yellow;
    }
    if (vidaRestante < 20) {
      pokemon.status.currentHpColor = this.colors.red;
    }
    pokemon.status.currentHpPercentage = vidaRestante;
    return pokemon;
  }
  handleBattleEnd(winner) {
    // if (winner === this.playerPokemon) {
    //   this.trophyService.addTrophyById(winner.id);
    //    }
    this.showBattleEnd = true;
    this.infoWinner = winner;
  }
  getBattleInfoText(id, pokemonName = null, moveName = null, effectiveness = 1) {
    let battleInfo = [
      { id: 0, name: "" },
      { id: 1, name: `Que va hacer ${pokemonName} ?` },
      { id: 2, name: `${pokemonName} utilizo ${moveName}! ` },
      { id: 3, name: `Es super efectivo!` },
      { id: 4, name: `Es ultra efectivo!` },
      { id: 5, name: `No es tan efectivo` },
      { id: 6, name: `Es extremadamente ineficaz ...` },
      { id: 7, name: `No afecta al oponente...` },
    ];
    function getInfoName(id) {
      return battleInfo.find((info) => info.id === id).name;
    }
    let info = getInfoName(id);
    switch (effectiveness) {
      case 1:
        break;
      case 2:
        info = info + getInfoName(3);
        break;
      case 4:
        info = info + getInfoName(4);
        break;
      case 0.5:
        info = info + getInfoName(5);
        break;
      case 0.25:
        info = info + getInfoName(6);
        break;
      case 0:
        info = info + getInfoName(7);
        break;
      default:
        break;
    }
    return info;
  }
  calculateDamage(attacker, defender, move) {
    let stabMultiplier = 1;
    if (attacker.types.find((type) => type === move.type)) {
      stabMultiplier = 1.25;
    }
    let typeMultiplier = this.calculateTypeEffectiveness(move, defender);
    let damage = Math.round(0.75 *
      move.power *
      (attacker.stats.attack / defender.stats.defense) *
      typeMultiplier *
      stabMultiplier);
    console.log(`--------------
${attacker.name} attacked ${defender.name} and dealt ${damage} damage.
--------------
* MOVE POWER: ${move.power * 0.75}
* ATTACK x DEFENSE: ${attacker.stats.attack} / ${defender.stats.defense} = ${attacker.stats.attack / defender.stats.defense}
* TYPE MULTIPLIER: ${typeMultiplier}
* STAB MULTIPLIER: ${stabMultiplier}
--------------`);
    return damage;
  }
  calculateTypeEffectiveness(move, defender) {
    return defender.types.reduce((acc, type) => {
      return acc * typeEffectiveness[move.type][type.type.name];
    }, 1);
  }
  randomEnemyMove() {
    let randomMove = this.movesPokemonCom[Math.floor(Math.random() * this.movesPokemonCom.length)];
    return randomMove;
  }
  randomPlayerMove() {
    let randomMove = this.movesPokemonPlayer[Math.floor(Math.random() * this.movesPokemonPlayer.length)];
    return randomMove;
  }
  handleMoveSelect(playerMove) {
    const enemyMove = this.randomEnemyMove();
    this.enterBattlePhase(playerMove, enemyMove, false);
  }
  enterBattlePhase(playerMove, enemyMove, comAttack) {
    let firstAttacker, firstAttackerMove, secondAttacker, secondAttackerMove;
    if (!comAttack) {
      firstAttacker = this.playerPokemon;
      firstAttackerMove = playerMove;
      secondAttacker = this.playerCom;
      secondAttackerMove = enemyMove;
    }
    else {
      firstAttacker = this.playerCom;
      firstAttackerMove = enemyMove;
      secondAttacker = this.playerPokemon;
      secondAttackerMove = playerMove;
    }
    // first attack!
    const battleFinish = this.startAttack(firstAttacker, firstAttackerMove, secondAttacker);
    if (!comAttack && !battleFinish) {
      // second attack!
      setTimeout(() => {
        firstAttacker.status.startAttack = false;
        if (secondAttacker.status.isAlive) {
          const enemyWin = this.startAttack(secondAttacker, secondAttackerMove, firstAttacker);
          setTimeout(() => {
            secondAttacker.status.startAttack = false;
          }, this.waitTime);
          if (enemyWin) {
            this.comWin = true;
          }
        }
      }, this.waitTime);
    }
    else if (battleFinish) {
      // show winner
      if (firstAttacker.id === this.playerPokemon.id) {
        this.comWin = false;
      }
      else {
        this.comWin = true;
      }
    }
  }
  async playAgain() {
    this.showBattleEnd = false;
    this.intialState();
    await this.getInfoPokemonPlayer();
    await this.getInfoPokemonCom();
    await this.loadOptions();
    this.checkFirsAttack();
  }
  goBack() {
    history.back();
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (h(Host, null, h("div", { class: this.showBattleEnd ? 'modal-wrapper' : 'modal-none' }, h("div", { class: "modal-body" }, h("div", { class: "modal-header" }, h("h2", { class: "heading" }, this.comWin ? ((_a = this.infoWinner) === null || _a === void 0 ? void 0 : _a.name) + ' ha sido el gandor !!' : 'Tu pokemon ' + ((_b = this.infoWinner) === null || _b === void 0 ? void 0 : _b.name) + ' el ganador !!')), h("div", { class: "modal-body center" }, h("div", { class: "trophy" }, h("div", { class: "trophy--principal" }, h("img", { src: "https://i.pinimg.com/originals/fd/e0/54/fde0541c9fd2b97473fefdcde63b8611.png" })), h("div", { class: "trophy--pokemon" }, h("img", { src: (_c = this.infoWinner) === null || _c === void 0 ? void 0 : _c.sprites.front_default, alt: "green apple slice" }), h("img", { src: (_d = this.infoWinner) === null || _d === void 0 ? void 0 : _d.sprites.back_default, alt: "green apple slice" }))), h("div", { class: "img" }, h("button", { onClick: () => this.playAgain() }, " Volver a jugar "), h("button", { onClick: () => this.goBack() }, " Salir ")))), h("a", { href: "#!", class: "outside-trigger" })), h("div", { class: "principal" }, h("a", { href: "javascript:history.back()" }, "POKEMON BATTLE"), h("div", { class: "header" }, h("h2", null, (_e = this.playerPokemon) === null || _e === void 0 ? void 0 :
      _e.name, " vs ", (_f = this.playerCom) === null || _f === void 0 ? void 0 :
      _f.name)), h("div", { class: "contenedor-personajes" }, h("div", { class: "personaje" }, h("div", { class: this.showDamagePlayer ? 'com--damage' : 'com--none' }, "-", this.damageTotal), h("div", { class: "personaje--hp" }, h("span", null, this.playerPokemon.name), h("div", { class: "life" }, h("span", null, "HP"), h("progress", { max: this.propertiesPlayer.hp, value: this.propertiesPlayer.hpFaltante })), h("span", null, this.propertiesPlayer.hpFaltante, " / ", this.propertiesPlayer.hp)), h("div", { class: "personaje--img" }, h("img", { src: this.playerPokemon.sprites.back_default, alt: "green apple slice" }))), h("div", { class: "com" }, h("div", { class: this.showDamageCom ? 'com--damage' : 'com--none' }, "-", this.damageTotal), h("div", { class: "com--hp" }, h("span", null, this.playerCom.name), h("div", { class: "life" }, h("span", null, "HP"), h("progress", { max: this.propertiesCom.hp, value: this.propertiesCom.hpFaltante })), h("span", null, this.propertiesCom.hpFaltante, " / ", this.propertiesCom.hp)), h("div", { class: "com--img" }, h("img", { src: (this.playerCom.id > 100 ? 'https://projectpokemon.org/images/sprites-models/bw-animated/' + this.playerCom.id + '.gif' : 'https://projectpokemon.org/images/sprites-models/bw-animated/0' + this.playerCom.id + '.gif'), alt: "green apple slice" })), h("img", { src: "../../utils/images/fondo_pelea_footer.png" }))), h("div", { class: 'opciones' }, h("div", { class: 'opciones--text ' + (this.showOptions ? 'visible' : 'hidde') }, this.textoOpcion), h("div", { class: 'opciones--buttons ' + (this.showOptions ? 'visible' : 'hidde') }, this.battleOptions.map(item => {
      return h("button", { onClick: () => this.clickOption(item) }, item.name);
    }))))));
  }
  get element() { return getElement(this); }
};
PokemonBattle.style = pokemonBattleCss;

export { PokemonBattle as pokemon_battle };
