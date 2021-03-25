import { newE2EPage } from '@stencil/core/testing';

describe('circle-percentaje', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<circle-percentaje></circle-percentaje>');

    const element = await page.find('circle-percentaje');
    expect(element).toHaveClass('hydrated');
  });
});
