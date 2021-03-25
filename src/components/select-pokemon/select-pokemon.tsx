import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'select-pokemon',
  styleUrl: 'select-pokemon.scss',
  shadow: true,
})
export class SelectPokemon {
  selectedReceiverIds = [102, 103];
  @Prop() options;
  @Prop() titulo;
  @Event() valueSelect: EventEmitter<string>;

  componentDidLoad() {
    // console.log('opciones recibidas en select', this.options);
  }

  handleSecondSelect(event) {
    this.valueSelect.emit(event.target.value);
  }

  render() {
    return (
      <div class="select_principal">
        <label htmlFor="browser" class="label-image">{this.titulo}</label>
        <select class="select-css" onInput={(event) => this.handleSecondSelect(event)}>
          {this.options.map(item => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
      </div>
    );
  }

}
