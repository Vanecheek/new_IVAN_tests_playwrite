import { test, expect, request } from '@playwright/test';

test.describe('API Tests JsonPlaceholder', () => {
  
  test('GET-запит: Отримати всі пости', async ({ request }) => {
    const response = await request.get('/posts');
    expect(response.status()).toBe(200); // Перевіряємо, чи статус 200
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true); // Перевіряємо, що відповідь є масивом
  });

  test('POST-запит: Створити новий пост', async ({ request }) => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    const response = await request.post('/posts', {
      data: newPost,
    });

    expect(response.status()).toBe(201); // Статус створення
    const data = await response.json();
    expect(data.title).toBe(newPost.title); // Перевіряємо, чи співпадає заголовок
  });

});