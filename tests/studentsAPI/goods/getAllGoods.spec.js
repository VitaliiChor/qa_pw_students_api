import { test } from '../../_fixtures/fixtures';

test('GET all goods', async ({ studentsApi }) => {
  const response = await studentsApi.getAllGoods();

  await studentsApi.assertSuccessResponseCode(response);
  await studentsApi.assertBodyIsNotEmpty(response);
});
