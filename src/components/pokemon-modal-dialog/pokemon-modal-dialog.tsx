import { Component, h, Host, Prop, Event, EventEmitter, State } from '@stencil/core';
import { generateRandomsWithZise, getPrincipalType } from '../../utils/utils';
import { Move } from '../models/pokemon.model';
import { PokeApiService } from '../services/pokeApiService.service';
import { get, set } from '../services/storageService.service';
@Component({
  tag: 'pokemon-modal-dialog',
  styleUrl: 'pokemon-modal-dialog.scss',
  shadow: true,
})
export class PokemonModalDialog {
  @Prop() open = false;
  @Prop() transparent = false;
  @Prop() titulo;
  @Prop() pokemon;
  @Event() modalState: EventEmitter<boolean>;
  @Prop() moves: Move[];
  @Prop() literals;
  @State() pokemonCom;
  @State() language: string;
  componentDidLoad() {

  }
  pokeApiService = new PokeApiService();
  async closeModal() {
    this.modalState.emit(false);
    this.language = await get("language");
    const sizeArray = await get("totalPokemones"); // more than 900 someone are undefined
    const number = generateRandomsWithZise(0 , 500 , 1);
    if(number[0] > 999){
      debugger;
      number[0] = number[0].padStart(4,'0');
    } else {
      this.setRandomnPokemon(number[0]);
    }
    const objectSet = {
      language: this.language,
      pokemonInfo: this.pokemon
    }
    set("pokemon", objectSet);
  }

  async setRandomnPokemon(id): Promise<void> {
    await this.pokeApiService.getPokemonByidOrName(id).then(async response => {
      this.pokemonCom = response;
      const datosToStorage = {
        pokemon: this.pokemonCom,
        language: this.language
      };
      set("pokemonCom" , datosToStorage);
      // await this.getInfoType(response);
      // await this.getInfoMove(response);
   });
  }
  getHeightPokemon(value) {
    return value / 10;
  }

  render() {
    return (
      <Host>
        {
          this.open ? <div class={'overlay ' + (this.open ? 'is-visible' : '') + ' ' + (this.transparent ? 'is-transparent' : '')}>
            <div class="modal-window">
              <div class="modal-window__content">
                <section class="product">
                  <div class="pokemon__photo">
                    <div class="pokemon__photo--stats">
                      <div class="title">
                        <h1>{this.pokemon.name} #{this.pokemon.id}</h1>
                      </div>
                      <div class={'personal-info color-' + getPrincipalType(this.pokemon.types)}>
                        {this.literals.experience}: {this.pokemon.base_experience} <br />
                        {this.literals.weight}: {this.pokemon.weight} Kg<br />
                        {this.literals.height}: {(this.pokemon.height / 10) < 1 ? (this.pokemon.height / 10) * 100 + ' Centimetros' : (this.pokemon.height / 10) + ' Metros'}
                      </div>
                    </div>
                    <div class="photo-container">
                      <div class={'photo-main bg-color-' + getPrincipalType(this.pokemon.types) + '-light'}>
                        <img src={this.pokemon.sprites.other.dream_world.front_default} alt="green apple slice" />
                      </div>
                      <div class="photo-album">
                        <img src={this.pokemon.sprites.back_default} alt="img de espalda" />
                        <img src={this.pokemon.sprites.front_default} alt="img de frente" />
                      </div>
                    </div>
                  </div>
                  <div class="pokemon__info">
                    <h3>Tipo Pokemon</h3>
                    <div class={'poderes color-' + getPrincipalType(this.pokemon.types)}>
                      {
                        this.pokemon.types.map(item => {
                          return <span>{item.type.name}</span>
                        })
                      }
                    </div>
                    <h3>Algunos movimientos</h3>
                    <div class="movimientos">
                      {
                        this.moves.map((item, index) => {
                          if (index < 4) {
                            return <div class="movimientos__principal">
                              <span class={'color-' + getPrincipalType(this.pokemon.types)}>{item.name}</span>
                              <p>{item.text}</p>
                            </div>
                          }
                        })
                      }
                    </div>
                    <stencil-route-link url={`/battle`}>
                      <button class={'batalla--btn bg-color-' + getPrincipalType(this.pokemon.types)} onClick={() => this.closeModal()}>Batalla</button>
                    </stencil-route-link>
                  </div>
                </section>
              </div>
            </div>
          </div> : <div></div>
        }
      </Host>
    );
  }
}


