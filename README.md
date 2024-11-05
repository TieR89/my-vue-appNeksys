# Entity Manager

Entity Manager - это веб-приложение для управления сущностями с функциями создания, редактирования, удаления и фильтрации. 

## Публикация

https://tier89.github.io/my-vue-appNeksys/

## Возможности

- CRUD операции для сущностей
- Фильтрация сущностей по названию
- Управление статусом публикации
- Отложенная публикация с указанием даты
- Адаптивный дизайн
- SPA архитектура

## Технологии

- Vue 3 с Composition API
- TypeScript для типизации
- Pinia для управления состоянием
- Vue Router для маршрутизации
- Tailwind CSS для стилизации
- Axios для HTTP запросов
- Vuelidate для валидации форм
- DayJS для работы с датами

## Требования

- Node.js 16+
- npm или yarn
- Git

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/entity-manager.git
cd entity-manager
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
```

3. Создайте файл .env и настройте переменные окружения:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Запустите проект в режиме разработки:
```bash
npm run dev
# или
yarn dev
```

## Структура проекта

```
src/
├── assets/         # Статические ресурсы
├── components/     # Vue компоненты
├── router/         # Настройки маршрутизации
├── services/       # Сервисы для работы с API
├── stores/         # Хранилища Pinia
├── types/          # TypeScript типы
├── views/          # Компоненты-страницы
└── App.vue         # Корневой компонент
```

## Лицензия

MIT
