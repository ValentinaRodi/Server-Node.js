# Server-Node.js

Создан сервер на Node.js с использование модулей Http и Fs.**

Установлен пакет [nodemon]

Обработчик входящего запроса:

- Ответ на запрос `?hello=<name>` - **строка** `Hello, <name>.`, код ответа 200.
- Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** `Enter a name`, код ответа 400.
- Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200.
- Если никакие параметры не переданы, то ответ **строка** `Hello!`, код ответа 200.
- Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500.

Описание
- В файле package.json в секции scripts есть `dev` который запускает nodemon и `start` который запускает сервер в
  обычном режиме.
- Чтение файла с пользователями происходит в отдельном модуле, который подключается в главный файл.
- Для указания пути при чтении файла используется модуль `path`.
- Порт, на котором происходит запуск сервера, передается через переменную окружения (по умолчанию 3000).
- После запуска сервера в консоль выводится сообщение о том по какому адресу и на каком порту запущен сервер.
- В зависимости от того какой ответ отдается - меняется 'Content-Type'.

# Стэк:

• Node.js
• Nodemon
• Fs
