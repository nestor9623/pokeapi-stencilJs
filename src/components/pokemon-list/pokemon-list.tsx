import { Component, Host, h, State, Element, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { getLocaleComponentStrings } from '../../utils/locate';
import { Pokemon } from '../models/pokemon.model';
import { PokeApiService } from '../services/pokeApiService.service';
import { set } from '../services/storageService.service';

@Component({
  tag: 'pokemon-list',
  styleUrl: 'pokemon-list.scss',
  shadow: true,
})
export class PokemonList {
  itemsPorPagina = 20;
  offset = 0;
  openModal = false;
  pokeApiService = new PokeApiService();
  @State() strings: any;
  @State() pokemons: Pokemon[];
  @State() pokemonCount: number;
  @Element() element: HTMLElement;
  @Prop() match: MatchResults;

  async componentWillLoad(): Promise<void> {
    this.loadPage();
    this.strings = await getLocaleComponentStrings(this.element, this.match.params.language);
  }

  loadPage = (): void => {
    this.pokemons = [];
    this.pokeApiService.loadPage(this.offset, this.itemsPorPagina).then(response => {
      this.pokemons = response.results;
      this.pokemonCount = response.count;
      set("totalPokemones" , this.pokemonCount);
    });
  };

  handlePaging(paging: { offset: number }): void {
    this.offset = paging.offset;
    this.loadPage();
  }

  clickCardEvent = async (event): Promise<void> => {
    await set("language" , this.match.params.language);
    this.openModal = !this.openModal;
    console.log('informacion recibida', event.detail.pokemon);
  }

  render() {
    if (this.match) {
      return (
        <Host>
          <div class="principal">
            <stencil-route-link url='/'>
              <header class="header-principal">
                <h2>{this.strings.listTitle}</h2>
              </header>
            </stencil-route-link>

            {this.pokemons?.length ? (
              <div class="main-article">
                {this.pokemons.map(pokemon => (
                  <pokemon-card pokemon-name={pokemon.name} onCardSelected={event => this.clickCardEvent(event)} literals={this.strings} language={ this.match.params.language}/>
                ))}
              </div>
            ) : (
                <div>Loading...</div>
              )}
            <pokemon-paginator count={this.pokemonCount} offset={this.offset} itemsPerPage={this.itemsPorPagina} onPaging={event => this.handlePaging(event.detail)} />
          </div>
        </Host>
      );
    }
  }
}
