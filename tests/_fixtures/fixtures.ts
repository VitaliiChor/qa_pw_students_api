import { mergeTests } from '@playwright/test';
import { test as genericTest } from './fixturesGeneric';
import { test as studentsAPITest } from './fixturesStudentsApi';

export const test = mergeTests(genericTest, studentsAPITest);

export { expect } from '@playwright/test';
