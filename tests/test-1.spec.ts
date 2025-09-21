import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.twinspires.com/bet/program/classic/horseshoe-indianapolis/ind/Thoroughbred/1/basic/');
});
