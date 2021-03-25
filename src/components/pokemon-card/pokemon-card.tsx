import { Component, Host, h, Prop, Event, EventEmitter, State, Element } from '@stencil/core';
import { PokeApiService } from '../services/pokeApiService.service';
import { getPrincipalType, mapDataLanguages, mapInfoMove } from '../../utils/utils';
import { Move } from '../models/pokemon.model';


@Component({
  tag: 'pokemon-card',
  styleUrl: 'pokemon-card.scss',
  shadow: true,
})
export class PokemonCard {
  @Prop() pokemonName;
  @Prop() literals;
  @Prop() language;
  @State() informacionPokemon: any;
  @Event() cardSelected: EventEmitter<{ pokemon: any }>;
  @State() openModal;
  @State() moves: Move[] = [];
  @State() types = [];
  @Element() element: HTMLElement;
  datosToStorage: any;
  pokeApiService = new PokeApiService();
  async componentDidLoad() {
    this.types = [];
    this.moves = [];
    this.setDataPokemon(this.pokemonName);
  }


  async setDataPokemon(pokemonName: string): Promise<void> {
    await this.pokeApiService.getPokemonByidOrName(pokemonName).then(async response => {
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
        const poder = mapDataLanguages(data , this.language);
        this.types.push(poder);
      });
    });
  }


  closeModal() {
    this.openModal = false;
  }
  render() {
    return (
      <Host>
        {this.informacionPokemon ? (

          <div class="slide-container">

            <div class="wrapper" onClick={() => this.clickArticle(this.informacionPokemon.id)}>
              <div class="pokemon-card barbarian">
                <div class="pokemon-card__image--fondo">
                  <div class="items">
                    {/* <img src={'https://projectpokemon.org/images/normal-sprite/' + this.informacionPokemon.name + '.gif'} alt={this.informacionPokemon.name} /> */}
                    <img src={this.informacionPokemon.sprites.other.dream_world.front_default} alt={this.informacionPokemon?.id} />
                    <span>{this.informacionPokemon.name}</span>
                  </div>
                </div>
                <div class={'pokemon-card__unit-description bg-color-' + getPrincipalType(this.informacionPokemon.types)}>
                  {this.informacionPokemon.types.map(item => (
                    <span class={'poder'}>{item.type.name}</span>
                  ))}
                  {/* {this.tipoElemento.map(item => {
                    return <div>
                      <span class={'poder'}>{item.name}</span>
                    </div>
                  }
                  )} */}
                </div>
                <div class={'pokemon-card__unit-stats pokemon-card__unit-stats--item clearfix' + ' bg-color-' + getPrincipalType(this.informacionPokemon.types)} >
                  {
                    this.informacionPokemon.stats.map(item => {
                      if (item.stat.name === 'hp') {
                        return <div class="one-third">
                          <div class="stat">{item.base_stat}</div>
                          <div class="stat-value">{this.literals.hp}</div>
                        </div>
                      }
                      if (item.stat.name === 'attack') {
                        return <div class="one-third">
                          <div class="stat">{item.base_stat}</div>
                          <div class="stat-value">{this.literals.attack}</div>
                        </div>
                      }
                      if (item.stat.name === 'defense') {
                        return <div class="one-third2">
                          <div class="stat">{item.base_stat}</div>
                          <div class="stat-value">{this.literals.defense}</div>
                        </div>
                      }
                    })
                  }

                </div>

              </div>
            </div>
          </div>
        ) : (
            <div>Is Loading....</div>
          )}
        <pokemon-modal-dialog id="open-modal" titulo="Prueba" pokemon={this.informacionPokemon} moves={this.moves} open={this.openModal} onModalState={() => this.closeModal()} literals={this.literals}></pokemon-modal-dialog>
      </Host>
    );
  }
}
