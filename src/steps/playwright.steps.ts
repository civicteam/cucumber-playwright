import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given } from '@cucumber/cucumber';

Given('Go to the civic dashboard', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.waitForLoadState("domcontentloaded")
});
