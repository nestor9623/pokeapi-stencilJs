import { newSpecPage } from '@stencil/core/testing';
import { PokemonList } from '../pokemon-list';

describe('pokemon-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonList],
      html: `<pokemon-list></pokemon-list>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-list>
    `);
  });
});
