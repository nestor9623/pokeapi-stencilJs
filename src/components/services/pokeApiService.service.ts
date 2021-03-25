import {  PokeApiListResult, Pokemon } from "../models/pokemon.model";

export class PokeApiService {
  private readonly pokeBaseUrl = 'https://pokeapi.co/api/v2/';
  private readonly pokeLangugages = 'https://pokeapi.co/api/v2/language';

  loadPage(offset: number, size: number): Promise<PokeApiListResult<Pokemon>> {
    return fetch(`${this.pokeBaseUrl}pokemon?offset=${offset}&limit=${size}`)
      .then(response => response.json());
  }

  getPokemonByidOrName(param: string): Promise<PokeApiListResult<Pokemon>> {
    return fetch(`${this.pokeBaseUrl}pokemon/${param}`)
      .then(response => response.json());
  }

  getDataByUrl(url: string): Promise<PokeApiListResult<Pokemon>> {
    return fetch(url)
      .then(response => response.json());
  }

  getAllLanguages(): Promise<PokeApiListResult<Pokemon>> {
    return fetch(this.pokeLangugages)
      .then(response => response.json());
  }

  async getMoveByUrl(urlNavigate: string) {
    return fetch(urlNavigate)
      .then(response => response.json());
  }
}
