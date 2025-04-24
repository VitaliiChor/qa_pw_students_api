import { test as base } from '@playwright/test';
import { StudentsAPIClient } from '../../src/api/StudentsAPIClient';

export const test = base.extend<{
  studentsApi;
}>({
  studentsApi: async ({ request }, use) => {
    const client = new StudentsAPIClient(request);

    await use(client);
  },
});
