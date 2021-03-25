import { newSpecPage } from '@stencil/core/testing';
import { Paginator } from '.';

describe('list-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Paginator],
      html: `<paginador></paginador>`,
    });
    expect(page.root).toEqualHtml(`
      <paginador>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </paginador>
    `);
  });
});
