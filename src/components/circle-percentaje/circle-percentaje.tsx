import { Component, h } from '@stencil/core';

@Component({
  tag: 'circle-percentaje',
  styleUrl: 'circle-percentaje.scss',
  shadow: true,
})
export class CirclePercentaje {

  render() {
    return (
        <div class="container">
         <progress max="100" value="80"></progress>
        </div>
    );
  }

}
