import { newSpecPage } from '@stencil/core/testing';
import { SelectPokemon } from '../select-pokemon';

describe('select-pokemon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectPokemon],
      html: `<select-pokemon></select-pokemon>`,
    });
    expect(page.root).toEqualHtml(`
      <select-pokemon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </select-pokemon>
    `);
  });
});
