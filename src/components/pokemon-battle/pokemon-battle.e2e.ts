import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-battle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-battle></pokemon-battle>');

    const element = await page.find('pokemon-battle');
    expect(element).toHaveClass('hydrated');
  });
});
