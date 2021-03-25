import { Component, h, State, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locate';
import { mapDataLanguages } from '../../utils/utils';
import { Pokemon } from '../models/pokemon.model';
import { PokeApiService } from '../services/pokeApiService.service';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {

  @State() strings: any;
  lenguajes: Pokemon[];
  pokeApiService = new PokeApiService();
  temas = [{ id: '1', name: 'Dark' }, { id: '2', name: 'Ligth' }];
  @State() options = [];
  @State() selectedLanguage: string = 'en';
  @State() themeSelected: string = '1';
  @Element() element: HTMLElement;



  async componentWillLoad() {
    await this.getLanguages();
    this.strings = await getLocaleComponentStrings(this.element, 'en'); // principal screen
  }

  async getLanguages() {
    await this.pokeApiService.getAllLanguages().then(async response => {
      for (let i = 0; i < response.results.length; i++) {
        await this.pokeApiService.getDataByUrl(response.results[i].url).then(data => {
          const datos = mapDataLanguages(data, 'en');
          if (datos?.id) {
            this.options.push(datos);
          }
        })
      }
    });
  }

  async clickOption(event, opcion: number) {
    if (opcion === 1) { // logic for languages
      this.selectedLanguage = event.detail.replace('us' , 'en');
      this.strings = await getLocaleComponentStrings(this.element, this.selectedLanguage); // principal screen
      console.log(this.strings);
    } else if (opcion === 2) { // logic for theme
      this.themeSelected = event.detail;
    } else {
      this.themeSelected = '1';
      this.selectedLanguage = 'en';
    }
  }

  goToListPokemon() {
  }

  render() {
    return (
      <div class={this.themeSelected === '1' ? 'principal-dark' : 'principal-light'}>
        <div class="header">
          <h2>{this.strings.marquePrincipalScreen}</h2>
        </div>
        <div class="principal__container">
          <div class="principal__options">
            <select-pokemon options={this.options} titulo={this.strings.language} onValueSelect={event => this.clickOption(event, 1)}></select-pokemon>
            <select-pokemon options={this.temas} titulo={this.strings.temeTitle} onValueSelect={event => this.clickOption(event, 2)}></select-pokemon>
          </div>
          <div class={this.themeSelected === '1' ? 'principal-dark__button' : 'principal-light__button'}>
            <stencil-route-link url={`/pokemon/${this.selectedLanguage}`}>
              <span class='start-btn'>{this.strings.battle}</span>
            </stencil-route-link>
          </div>
        </div>
      </div>
    );
  }
}
