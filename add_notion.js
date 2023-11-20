import { link } from "./get_request.js";

const submitBtn = document.getElementById('submit-btn');
const notionInput = document.getElementById('notion-input');
const form = document.getElementById('notion-form');
const apiUrl = 'http://127.0.0.1:8000/api/notions/';

submitBtn.addEventListener('click', async (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  const newNotion = notionInput.value;

  try {
    const response = await fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notion: newNotion }),
    });

    if (response.ok) {
      console.log('Заметка успешно добавлена!');
      // Можно добавить здесь обновление данных на странице или другую логику
    } else {
      console.error('Ошибка при добавлении заметки:', response.status);
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }

  // Очищаем поле ввода после отправки
  notionInput.value = '';
});

