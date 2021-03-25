import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-list></pokemon-list>');

    const element = await page.find('pokemon-list');
    expect(element).toHaveClass('hydrated');
  });
});
