import { newSpecPage } from '@stencil/core/testing';
import { PokemonCard } from '../pokemon-card';

describe('pokemon-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonCard],
      html: `<pokemon-card></pokemon-card>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-card>
    `);
  });
});
