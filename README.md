# js-ihub

## Рассписание курса

### Занятие #1
- Знакомство с проектом
- Настройка проекта
- Написать REST API отдающий статический JSON (ДЗ: API end-point update)
- Получить (AJAX) и отобразить данные (JS + HTML) на клиенте

### Занятие #2
- Отрендерить шаблоны на сервере
- Подключить стили
- Отобразить данные динамически с помощью шаблонов и jQuery (ДЗ: изменить состояние таска с запросом на сервер, вернуть список всех тасков, обновить только измененные таски в DOM)

### Занятие #3
- Browserify + Babel + ...
- Начать полноценный SPA на React.js (ДЗ: компонент)

### Занятие #4
- Закончить SPA (ДЗ: доделать фичи)

### Занятие #5
- Использовать БД в REST API (ДЗ: запрос к БД)

## REST API

`/api/projects`

- `GET` получить все проекты
  - ответ
```json
[
      {
        "id": 1,
        "name": "My project",
        "tasks": []
      }
]
```
- `POST` создать новый проект
  - запрос
```json
{
      "name": "My project"
}
```
  - ответ
```json
{
      "id": 1,
      "name": "My project",
      "tasks": []
}
```

`/api/projects/{project_id}`

- `GET` получить проект
  - ответ
```json
{
      "id": 1,
      "name": "My project",
      "tasks": []
}
```
- `PUT` изменить проект
  - запрос
```json
{
      "name": "My awesome project",
      "tasks": []
}
```
  - ответ
```json
{
      "id": 1,
      "name": "My awesome project",
      "tasks": []
}
```
- `DELETE` удалить проект
  - ответ
```json
[
      {
        "id": 1,
        "name": "My project",
        "tasks": []
      }
]
```

`/api/projects/{project_id}/tasks`

- `GET` получить все задания в проекте
  - ответ
```json
[
      {
        "id": 1,
        "projectID": 1,
        "name": "My task",
        "deadline": 1457529375881,
        "done": false
      }
]
```
- `POST` создать новое задание в проекте
  - запрос
```json
{
      "name": "My task",
      "deadline": 1457529375881
}
```
  - ответ
```json
{
      "id": 1,
      "projectID": 1,
      "name": "My task",
      "deadline": 1457529375881,
      "done": false
}
```

`/api/projects/{project_id}/tasks/{task_id}`

- `GET` получить задание из проекта
  - ответ
```json
{
      "id": 1,
      "projectID": 1,
      "name": "My task",
      "deadline": 1457529375881,
      "done": false
}
```
- `PUT` изменить задание в проекте
  - запрос
```json
{
      "done": true
}
```
  - ответ
```json
{
      "id": 1,
      "projectID": 1,
      "name": "My task",
      "deadline": 1457529375881,
      "done": true
}
```
- `DELETE` удалить задание из проекта
  - ответ
```json
[
      {
        "id": 1,
        "projectID": 1,
        "name": "My task",
        "deadline": 1457529375881,
        "done": false
      }
]
```
