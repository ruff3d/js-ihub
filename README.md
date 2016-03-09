# js-ihub

## Рассписание курса

### Занятие #1
- Знакомство с проектом
- Настройка проекта
- Написать REST API отдающий статический JSON
- Получить и отобразить данные на клиенте

### Занятие #2
- Сверстать представление
- Отобразить данные динамически с помощью jQuery

### Занятие #3
- Использовать БД в REST API

### Занятие #4
- Реализовать полноценный SPA на React.js

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
      "id": 1,
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
      "name": "My task"
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
