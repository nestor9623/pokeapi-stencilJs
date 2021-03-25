import { newSpecPage } from '@stencil/core/testing';
import { PokemonBattle } from '../pokemon-battle';

describe('pokemon-battle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonBattle],
      html: `<pokemon-battle></pokemon-battle>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-battle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-battle>
    `);
  });
});
