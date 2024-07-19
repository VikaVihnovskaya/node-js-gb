// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.

const express = require('express');
const fs = require('fs');
const path = require('path');
const jsonPathMain = path.join(__dirname, 'counterMainPage.json');
const jsonPathAbout = path.join(__dirname, 'counterAboutPage.json');
const app = express();
app.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(jsonPathMain, 'utf-8'));
  const counter = (data.counterMain += 1);
  fs.writeFileSync(jsonPathMain, JSON.stringify({ counterMain: counter }));
  res.send(
      `<h1>Главная страница. Добро пожаловать!</h1>
         <a href='/about'>Перейти на страницу About </a>
         <p>Количество посещений: ${counter}.</p>`
  );
});

app.get('/about', (req, res) => {
  const data = JSON.parse(fs.readFileSync(jsonPathAbout, 'utf-8'));
  const counter = (data.counterAbout += 1);
  fs.writeFileSync(jsonPathAbout, JSON.stringify({ counterAbout: counter }));
  res.send(
      `<h1>Добро пожаловать на страницу About!</h1>
         <a href='/'>Перейти на главную страницу </a>
         <p>Количество посещений: ${counter}.</p>`
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});