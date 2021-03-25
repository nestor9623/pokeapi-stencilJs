import { Component, Host, h, State, Element } from '@stencil/core';
import { get } from '../services/storageService.service';
import { Colors, Fighter, Text } from '../models/battle.model'
import { getLocaleComponentStrings } from '../../utils/locate';
import { formatStats, mapMoves } from '../../utils/utils';
import { infoPokemon, Move, PokemonData } from '../models/pokemon.model';
import { typeEffectiveness } from '../../utils/typeEffectiveness';
import { PokeApiService } from '../services/pokeApiService.service';
@Component({
  tag: 'pokemon-battle',
  styleUrl: 'pokemon-battle.scss',
  shadow: true,
})
export class PokemonBattle {
  maxLife: number = 100;
  language: string;
  initialOptios = [];
  colors: Colors = {
    yellow: "#cccf00",
    green: "#35aa31",
    red: "#d95f5f"
  };
  pokeApiService = new PokeApiService();
  @State() battleInfoText: string;
  @State() waitTime: number = 3000;
  @State() textoOpcion: string;
  @State() playerPokemon: any;
  @State() playerCom: any;
  @State() lifePersona: number;
  @State() lifeCom: number;
  @State() strings: any;
  @State() battleOptions: Text[] = [];
  @State() showOptions: boolean = true;
  @State() propertiesPlayer: infoPokemon;
  @State() propertiesCom: infoPokemon;
  @State() movesPokemonPlayer;
  @State() movesPokemonCom;
  @State() showMoves: boolean = false;
  @Element() element: HTMLElement;
  @State() showDamagePlayer: boolean = false;
  @State() showDamageCom: boolean = false;
  @State() damageTotal: number;
  @State() showBattleEnd: boolean = false;
  @State() infoWinner: Fighter;
  @State() comWin: boolean;
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
    }
  }

  async getInfoPokemonCom() {
    const datos = await get("pokemonCom");
    this.playerCom = this.formatPokemonData(datos.pokemon, true);
    this.propertiesCom = {
      hp: this.playerCom.stats.hp,
      color: this.colors.green,
      hpFaltante: this.playerCom.stats.hp
    }
  }


  async getLanguage(language) {
    this.strings = await getLocaleComponentStrings(this.element, language);
    this.textoOpcion = this.strings.toDo;
  }

  setOtions() {
    this.battleOptions.push(
      { id: 1, name: this.strings.fight },
      { id: 2, name: this.strings.bag },
      { id: 3, name: this.strings.pokemon },
      { id: 4, name: this.strings.run }
    );
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
          this.auxMessage(data.id)
          break;
        default:
          break;
      }
    } else {
      const enemyMove = this.randomEnemyMove();
      this.enterBattlePhase(data, enemyMove, false);
      this.showMoves = false;
      this.battleOptions = this.initialOptios;
    }
  }

  async movesPlayerPokemon(): Promise<any[]> {
    let n = 4;
    var shuffled = this.playerPokemon.moves.sort(function () { return .5 - Math.random() });

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

  async movesPlayerCom(): Promise<any[]> {
    let n = 4;
    var shuffled = this.playerCom.moves.sort(function () { return .5 - Math.random() });

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
        this.textoOpcion = 'No tiene más pokemones'
        this.showMessageDelay();
        break;
      case 4:
        this.textoOpcion = 'No puedes correr'
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

  formatPokemonData(pokemon: PokemonData, enemy: boolean) {
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

  capitalizeFirstLetter(str: string) {
    const strArray = str.split(" ");
    for (let i = 0, x = strArray.length; i < x; i++) {
      strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
    }
    return strArray.join(" ");
  }

  startAttack(attacker: Fighter, attackerMove: Move, defender: Fighter) {
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
    } else {
      defender.status.currentHp = appliedDamage;
      if (defender.isenemy) {
        // show com damage
        this.showDamagePlayer = false;
        this.showDamageCom = true;
        this.damageTotal = attacker.status.damageDealt
        setTimeout(() => {
          this.showDamageCom = false;
        }, 2000);
      } else {
        this.showDamagePlayer = true;
        this.showDamageCom = false;
        this.damageTotal = attacker.status.damageDealt
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
      }
    } else {
      this.propertiesPlayer = {
        hp: this.playerPokemon.stats.hp,
        hpFaltante: datos.status.currentHp,
        color: datos.status.currentHpColor
      }
    }
    return battleEnd;
  }

  calculatePercentage(pokemon: Fighter) {
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

  handleBattleEnd(winner: Fighter) {

    // if (winner === this.playerPokemon) {
    //   this.trophyService.addTrophyById(winner.id);
    //    }
    this.showBattleEnd = true;
    this.infoWinner = winner;
  }

  getBattleInfoText(
    id: number,
    pokemonName: string = null,
    moveName: string = null,
    effectiveness: number = 1
  ) {
    let battleInfo: Text[] = [
      { id: 0, name: "" },
      { id: 1, name: `Que va hacer ${pokemonName} ?` },
      { id: 2, name: `${pokemonName} utilizo ${moveName}! ` },
      { id: 3, name: `Es super efectivo!` },
      { id: 4, name: `Es ultra efectivo!` },
      { id: 5, name: `No es tan efectivo` },
      { id: 6, name: `Es extremadamente ineficaz ...` },
      { id: 7, name: `No afecta al oponente...` },
    ];

    function getInfoName(id: number) {
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
  calculateDamage(attacker: Fighter, defender: Fighter, move: Move) {
    let stabMultiplier: number = 1;

    if (attacker.types.find((type) => type === move.type)) {
      stabMultiplier = 1.25;
    }
    let typeMultiplier: number = this.calculateTypeEffectiveness(
      move,
      defender
    );

    let damage = Math.round(
      0.75 *
      move.power *
      (attacker.stats.attack / defender.stats.defense) *
      typeMultiplier *
      stabMultiplier
    );

    console.log(`--------------
${attacker.name} attacked ${defender.name} and dealt ${damage} damage.
--------------
* MOVE POWER: ${move.power * 0.75}
* ATTACK x DEFENSE: ${attacker.stats.attack} / ${defender.stats.defense
      } = ${attacker.stats.attack / defender.stats.defense}
* TYPE MULTIPLIER: ${typeMultiplier}
* STAB MULTIPLIER: ${stabMultiplier}
--------------`);

    return damage;
  }

  calculateTypeEffectiveness(move: Move, defender: Fighter) {
    return defender.types.reduce((acc, type: any) => {
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

  handleMoveSelect(playerMove: Move) {
    const enemyMove = this.randomEnemyMove();
    this.enterBattlePhase(playerMove, enemyMove, false);
  }

  enterBattlePhase(playerMove: Move, enemyMove: Move, comAttack: boolean) {
    let firstAttacker,
      firstAttackerMove,
      secondAttacker,
      secondAttackerMove;

    if (!comAttack) {
      firstAttacker = this.playerPokemon;
      firstAttackerMove = playerMove;
      secondAttacker = this.playerCom;
      secondAttackerMove = enemyMove;
    } else {
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
    } else if (battleFinish) {
      // show winner
      if (firstAttacker.id === this.playerPokemon.id) {
        this.comWin = false;
      } else {
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
    return (
      <Host>
        <div class={this.showBattleEnd ? 'modal-wrapper' : 'modal-none'}>
          <div class="modal-body">
            <div class="modal-header">
              <h2 class="heading">{this.comWin ? this.infoWinner?.name + ' ha sido el gandor !!' : 'Tu pokemon ' + this.infoWinner?.name + ' el ganador !!'}</h2>
            </div>
            <div class="modal-body center">
              <div class="trophy">
                <div class="trophy--principal">
                  <img src="https://i.pinimg.com/originals/fd/e0/54/fde0541c9fd2b97473fefdcde63b8611.png" />
                </div>
                <div class="trophy--pokemon">
                  <img src={this.infoWinner?.sprites.front_default} alt="green apple slice" />
                  <img src={this.infoWinner?.sprites.back_default} alt="green apple slice" />
                </div>
              </div>
              <div class="img">
                <button onClick={() => this.playAgain()}> Volver a jugar </button>
                <button onClick={() => this.goBack()}> Salir </button>
              </div>
            </div>
          </div>
          <a href="#!" class="outside-trigger"></a>
        </div>
        <div class="principal">
          <a href="javascript:history.back()">POKEMON BATTLE</a>
          <div class="header">
            <h2>{this.playerPokemon?.name} vs {this.playerCom?.name}</h2>
          </div>
          <div class="contenedor-personajes">
            <div class="personaje">
              <div class={this.showDamagePlayer ? 'com--damage' : 'com--none'}>
                -{this.damageTotal}
              </div>
              <div class="personaje--hp">
                <span>{this.playerPokemon.name}</span>
                <div class="life">
                  <span>HP</span>
                  <progress max={this.propertiesPlayer.hp} value={this.propertiesPlayer.hpFaltante}></progress>
                </div>
                <span>{this.propertiesPlayer.hpFaltante} / {this.propertiesPlayer.hp}</span>
              </div>
              <div class="personaje--img">
                <img src={this.playerPokemon.sprites.back_default} alt="green apple slice" />
              </div>
            </div>
            <div class="com">
              <div class={this.showDamageCom ? 'com--damage' : 'com--none'}>
                -{this.damageTotal}
              </div>
              <div class="com--hp">
                <span>{this.playerCom.name}</span>
                <div class="life">
                  <span>HP</span>
                  <progress max={this.propertiesCom.hp} value={this.propertiesCom.hpFaltante}></progress>
                </div>
                <span>{this.propertiesCom.hpFaltante} / {this.propertiesCom.hp}</span>
              </div>
              <div class="com--img">
                <img src={
                (this.playerCom.id > 100 ? 'https://projectpokemon.org/images/sprites-models/bw-animated/'+ this.playerCom.id +'.gif' : 'https://projectpokemon.org/images/sprites-models/bw-animated/0'+ this.playerCom.id +'.gif' )} alt="green apple slice" />
              </div>
              <img src="../../utils/images/fondo_pelea_footer.png" />
            </div>
          </div>
          <div class={'opciones'}>
            <div class={'opciones--text ' + (this.showOptions ? 'visible' : 'hidde')}>
              {this.textoOpcion}
            </div>
            <div class={'opciones--buttons ' + (this.showOptions ? 'visible' : 'hidde')}>
              {
                this.battleOptions.map(item => {
                  return <button onClick={() => this.clickOption(item)}>{item.name}</button>
                })
              }
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
