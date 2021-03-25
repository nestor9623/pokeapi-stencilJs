import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-card></pokemon-card>');

    const element = await page.find('pokemon-card');
    expect(element).toHaveClass('hydrated');
  });
});
