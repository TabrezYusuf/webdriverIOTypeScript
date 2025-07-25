
describe('Login UI Test', () => {
  it('should load Google homepage', async () => {
    await browser.url('https://www.google.com');
    const title = await browser.getTitle();
    console.log('Page title:', title);
  });
});
