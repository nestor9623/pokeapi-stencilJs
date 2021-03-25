import { newSpecPage } from '@stencil/core/testing';
import { CirclePercentaje } from '../circle-percentaje';

describe('circle-percentaje', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CirclePercentaje],
      html: `<circle-percentaje></circle-percentaje>`,
    });
    expect(page.root).toEqualHtml(`
      <circle-percentaje>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </circle-percentaje>
    `);
  });
});
