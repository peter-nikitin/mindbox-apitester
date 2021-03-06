# pre4eker
Pre4eker - это GUI для работы с API Mindbox: https://developers.mindbox.ru/docs/processing-calculate.

Демо: https://pre4eker.nikitin-petr.ru/

![Pre4eker - это GUI для работы с API Mindbox](https://i.ibb.co/x1ygCcv/Screenshot-2020-05-27-at-19-53-45.png)


### Что такое пречек?
Пречек - это предварительный рассчет скидок в магазине. 

Например, вы хотите купить футболку в магазине, где у вас есть накопленные баллы. Чтобы посчитать вам скидку с учетом именно ваших баллов (а не чужих), касса должна много всего: ваш телефон/карту, баланс, все доступные акции, акции только для вас. Чтобы каждому магазину не программировать есть Mindbox - система, которая знает всех клиентов и их балансы, все продукты и активные акции. Чтобы посчитать персональную скидку касса должна только отправить запрос в API Mindbox и обработать полученный ответ. 

Всем клиентам Mindbox помогают менеджеры, которые пишут ТЗ на интеграцию, обучают клиента, помогают настраивать акции в системе. В процессе настройки акций сотрудникам Mindbox часто приходится проверять, правильно ли настроены акции и что они рассчитывают в разных ситуациях. Для этого прихоится через Postman собирать руками заросы и ковырятся в больших JSON'ax.

Чтобы облегчить жизнь менеджеров я сделал интерфейс, через который можно собрать запрос и посмотреть ответ. Минимум JSON и ковыряния в коде. 

## Режимы работы
- Форма конструтор - это набор полей с помощью которых собирается тело запроса. 
- Код запроса - это работа с телом запроса в формате JSON кода. Здесь вы можете вставить имеющийся код запроса, например, из логов клиента. Ну или проверить/скачать код запроса, который собрали через форму
- Код ответа - это полный текст кода ответа  API Mindbox. Нужен для того, чтобы можно было вставить имеющейся код ответа и посмотреть, какие акции применились. Ну и еще чтобы можно было скачать ответ себе и показать разработчикам. 

## Из чего состоит
- Front-end - это React+Redux. Тут собрана вся логика приложения по подготовке запроса и обработке ответа. 
- Backend - NodeJS + Express. На сервере происходит только проксирование запроса в Mindbox. 

