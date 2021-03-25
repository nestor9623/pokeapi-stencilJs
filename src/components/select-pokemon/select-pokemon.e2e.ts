import { newE2EPage } from '@stencil/core/testing';

describe('select-pokemon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<select-pokemon></select-pokemon>');

    const element = await page.find('select-pokemon');
    expect(element).toHaveClass('hydrated');
  });
});
