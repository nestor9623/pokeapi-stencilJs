import { newSpecPage } from '@stencil/core/testing';
import { PokemonModalDialog } from '../pokemon-modal-dialog';

describe('pokemon-modal-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PokemonModalDialog],
      html: `<pokemon-modal-dialog></pokemon-modal-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <pokemon-modal-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </pokemon-modal-dialog>
    `);
  });
});
