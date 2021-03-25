import { newE2EPage } from '@stencil/core/testing';

describe('paginador', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<paginador></paginador>');

    const element = await page.find('paginador');
    expect(element).toHaveClass('hydrated');
  });
});
