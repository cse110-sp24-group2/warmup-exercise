describe('Calendar tests', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/src/index.html');
    });

    it('Grab next button', async () => {
        const nextButton = await page.$eval('#next-month', (next) => {
            return next.innerText;
        });
        expect(nextButton).toBe('Next');
    });
});