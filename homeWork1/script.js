// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
let countMainPage = 0;
let countAnotherPage = 0;
const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    countMainPage++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
        `<h1>Главная страница. Добро пожаловать!</h1>
         <a href='http://localhost:3000/about'>Перейти на страницу About </a>
         <p>Количество посещений: ${countMainPage}.</p>`
    );
  } else if (req.url === "/about") {
    countAnotherPage++;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end(
        `<h1>Добро пожаловать на страницу About!</h1>
         <a href='http://localhost:3000'>Перейти на главную страницу </a>
         <p>Количество посещений: ${countAnotherPage}.</p>`
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
    res.end("<h1>Страница не найдена! </h1>");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});