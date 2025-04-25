import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as goodsAPITest } from './fixturesGoodsAPI';

export const test = mergeTests(genericTest, goodsAPITest);

export { expect } from '@playwright/test';
