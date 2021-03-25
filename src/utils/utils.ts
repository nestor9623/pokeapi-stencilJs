import { Move } from "../components/models/pokemon.model";
import { isNil } from 'lodash';

import Chance from 'chance';
const chance = new Chance();

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function getPrincipalType(list: any[]) {
  return list.filter(x => x.slot === 1)[0].type.name;
}

export function mapInfoMove(data, language): Move {
  const text = data.flavor_text_entries.find(
    item => item.language.name === language // language
  );

  const nombrePoder = data.names.find(
    item => item.language.name === language // language
  )
  const move: Move = {
    name: nombrePoder.name.replace("-", " "),
    text: text.flavor_text,
    type: data.type.name,
    power: data.power
  };

  return move;
}

export function mapDataLanguages(data, language) {
  const text = data.names.find(
    item => item.language.name === language // language
  );
  return isNil(text?.name) ? null : { id: data.iso3166, name: text.name };
}


export function generateRandomsWithZise(desde: number, hasta: number, cantidad: number) {
  var uniques = chance.unique(chance.natural, cantidad, { min: desde, max: hasta });
  return uniques;
}

export function mapMoves(data) {
  const text = data.flavor_text_entries.find(
    item => item.language.name === "en"
  );
  const move: Move = {
    name: data.name.replace("-", " "),
    text: text.flavor_text,
    type: data.type.name,
    power: data.power
  };
  return move;
}

export function formatStats(stats) {
  // creating a object with stat name as property
  let statArray = stats.reduce((newObj, s) => {
    newObj[s.stat.name] = s.base_stat;

    return newObj;
  }, {});

  if (statArray["attack"] < statArray["special-attack"]) {
    statArray["attack"] = statArray["special-attack"];
  }

  if (statArray["defense"] < statArray["special-defense"]) {
    statArray["defense"] = statArray["special-defense"];
  }

  delete statArray["special-attack"];
  delete statArray["special-defense"];

  statArray.hp = 200 + statArray.hp * 2;

  //console.log(statArray);

  return statArray;
}
