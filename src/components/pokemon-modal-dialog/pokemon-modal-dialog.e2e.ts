import { newE2EPage } from '@stencil/core/testing';

describe('pokemon-modal-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<pokemon-modal-dialog></pokemon-modal-dialog>');

    const element = await page.find('pokemon-modal-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
