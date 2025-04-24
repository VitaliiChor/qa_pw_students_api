import { test } from '../../_fixtures/fixtures';

test('GET good by Id', async ({ studentsApi }) => {
  const response = await studentsApi.getGoodById(133);

  await studentsApi.assertSuccessResponseCode(response);
  await studentsApi.assertNameIsCorrect(response, 'Avocado');
  await studentsApi.assertColorIsCorrect(response, 'green');
});
