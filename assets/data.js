export const projects = [
    { id: 'telcore', name: 'TELCORE', category: 'Сетевая инфраструктура', description: 'Платформа управления заявками и выездными бригадами.', detail: 'Диспетчеризация, работа выездных бригад, материалы, контроль исполнения, статусы и отчётность. Продукт развивается как облачное и локальное решение.', stage: 'Подготовка к бета-тестированию', tags: ['SaaS', 'Телеком', 'Автоматизация'], accent: 'mint' },
    { id: 'testlab', name: 'TestLab', category: 'Образование', description: 'Платформа тестирования знаний и Android-приложение.', detail: 'TestLab Web v2.0.2 (21.10.2026) с централизованной системой релизов и отдельное работающее Android-приложение TestLab Mobile v1.5.0. Истории версий Web и Mobile независимы.', stage: 'Web v2.0.2 · Mobile v1.5.0', tags: ['Обучение', 'Тесты', 'Android'], accent: 'blue' },
    { id: 'venueos', name: 'VenueOS', category: 'Автоматизация заведений', description: 'Единая платформа управления заведениями.', detail: 'Проектируемая система для ресторанов и других заведений: учёт, кассовые процессы, персонал и управление. Цель — объединить востребованные функции разных решений, а не заявлять об уже готовом продукте.', stage: 'Проектирование', tags: ['HoReCa', 'POS', 'Управление'], accent: 'amber' },
    { id: 'telekompolia', name: 'Телекомполия', category: 'GameDev', description: 'Симулятор развития телекоммуникационной компании.', detail: 'Игровая концепция с карьерным и управленческим развитием, учебными механиками и сетевой тематикой.', stage: 'Концепция', tags: ['Игры', 'Симулятор', 'Обучение'], accent: 'violet' }
];
// Only publish user-approved entries. The initial dataset contains non-release
// development notes, not invented release versions or completion percentages.
export const updates = [
    { id: 'testlab-web-202', project: 'testlab', date: '2026-10-21', title: 'TestLab Web v2.0.2 — единая система релизов', text: 'История версий перенесена в platform_releases (Supabase), Dashboard и личный кабинет получают актуальные релизы централизованно. Полный список изменений — ниже в блоке релизов.', kind: 'Релиз', version: '2.0.2', public: true },
    { id: 'telcore-beta', project: 'telcore', date: '2026-10-30', title: 'Подготовка TELCORE к бета-тестированию', text: 'Фокус на проверке существующих модулей, исправлении ошибок и безопасности. Новые функции до бета-запуска отложены.', kind: 'Разработка', public: true },
    { id: 'testlab-android', project: 'testlab', date: '2026-10-22', title: 'TestLab Mobile v1.5.0', text: 'Рабочее Android-приложение. Ранее обнаруженный сбой запуска устранён; дальнейшие проверки продолжаются.', kind: 'Тестирование', public: true },
    { id: 'telcore-materials', project: 'telcore', date: '2026-10-24', title: 'Работа с учётом материалов', text: 'Проверка операций с материалами заявок, журнала изменений и прав доступа.', kind: 'Разработка', public: true }
];
export const milestones = [
    { id: 't1', project: 'telcore', title: 'Базовые кабинеты и реестр заявок', done: true, description: 'Диспетчер, бригады, руководитель' },
    { id: 't2', project: 'telcore', title: 'Материалы и история изменений', done: true, description: 'Учёт плановых и использованных материалов' },
    { id: 't3', project: 'telcore', title: 'Проверка безопасности и сценариев', done: false, description: 'Тестирование с одной компанией' },
    { id: 't4', project: 'telcore', title: 'Бета-тестирование', done: false, description: 'Целевая дата — 25 ноября 2026 года' },
    { id: 'l1', project: 'testlab', title: 'TestLab Web v2.0.2', done: true, description: 'Централизованная история версий и единый источник данных о релизах' },
    { id: 'l2', project: 'testlab', title: 'Рабочий запуск Android', done: true, description: 'Приложение запускается, согласована Mobile v1.5.0' },
    { id: 'v1', project: 'venueos', title: 'Техническое задание и сценарии', done: true, description: 'Проработка требований к управлению заведениями' },
    { id: 'v2', project: 'venueos', title: 'Первый рабочий прототип', done: false, description: 'Разработка после утверждения основных сценариев' },
    { id: 'g1', project: 'telekompolia', title: 'Концепция симулятора', done: true, description: 'Игровые направления и основные механики' },
    { id: 'g2', project: 'telekompolia', title: 'Первый играбельный прототип', done: false, description: 'Следующий этап после приоритетных проектов' }
];
export const formatDate = (value) => new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value + 'T12:00:00Z'));
export const versionInfo = {
    telcore: { label: 'v0.9.0-beta.1', note: 'Согласованное обозначение планируемой первой бета-сборки; релиз ещё не опубликован' },
    testlab: { label: 'Web v2.0.2 · Mobile v1.5.0', note: 'Web: релиз от 21.10.2026; Android — отдельная действующая ветка версий' },
    venueos: { label: 'Без номера версии', note: 'На стадии технического проектирования' },
    telekompolia: { label: 'Без номера версии', note: 'Концепция и план первой играбельной версии' }
};
export const workItems = [
    { id: 'tc1', project: 'telcore', group: 'Заявки', title: 'Реестр и создание заявок', detail: 'Категории работ, приоритеты, статусы, SLA, поиск и карточка заявки.', status: 'done' },
    { id: 'tc2', project: 'telcore', group: 'Заявки', title: 'Импорт из Excel', detail: 'Загрузка данных заявок и разбор полей адресов и координат.', status: 'done' },
    { id: 'tc3', project: 'telcore', group: 'Бригады', title: 'Мобильный кабинет бригад', detail: 'Просмотр назначенных заказов и обновление рабочих статусов.', status: 'done' },
    { id: 'tc4', project: 'telcore', group: 'Бригады', title: 'Карта точек заявки', detail: 'Точки назначения и подключения отображаются раздельно.', status: 'done' },
    { id: 'tc5', project: 'telcore', group: 'Материалы', title: 'Плановые и фактические материалы', detail: 'Учёт материалов и журнал изменений операций.', status: 'done' },
    { id: 'tc6', project: 'telcore', group: 'Контроль', title: 'Приёмка диспетчером', detail: 'Подтверждение выполненной работы или возврат на доработку.', status: 'done' },
    { id: 'tc7', project: 'telcore', group: 'Доступ', title: 'Тарифы и пробный период', detail: 'База тарифов, лицензионные функции и 14-дневный пробный сценарий.', status: 'done' },
    { id: 'tc8', project: 'telcore', group: 'Проверки', title: 'Сквозное тестирование для одной компании', detail: 'Проверка полномочий, регистрации, кабинетов и жизненного цикла заявки.', status: 'doing' },
    { id: 'tc9', project: 'telcore', group: 'Релиз', title: 'Подготовка первой бета-сборки', detail: 'Исправления ошибок, проверка безопасности и развёртывание.', status: 'doing' },
    { id: 'tc10', project: 'telcore', group: 'Развёртывание', title: 'Перенос на собственный сервер', detail: 'Отложен до завершения бета-этапа.', status: 'planned' },
    { id: 'tl1', project: 'testlab', group: 'Веб', title: 'Веб-платформа тестирования', detail: 'Существующая веб-версия для проведения тестирования.', status: 'done' },
    { id: 'tl2', project: 'testlab', group: 'Android', title: 'Рабочая мобильная версия', detail: 'Android-приложение запускается; согласована версия Mobile v1.5.0.', status: 'done' },
    { id: 'tl3', project: 'testlab', group: 'Android', title: 'Главный экран и результаты', detail: 'Работа с тестами, результатами и переключением рабочих пространств в мобильной версии.', status: 'done' },
    { id: 'tl4', project: 'testlab', group: 'Проверки', title: 'Проверка согласованных сценариев', detail: 'Продолжение тестирования функций и корректности отображения данных.', status: 'doing' },
    { id: 'tl5', project: 'testlab', group: 'Релизы', title: 'Централизованные релизы Web v2.0.2', detail: 'История обновлений в platform_releases; текущая версия автоматически определяется по последнему опубликованному релизу, Dashboard и кабинет используют единый источник.', status: 'done' },
    { id: 'tl6', project: 'testlab', group: 'Релизы', title: 'Раздельные истории Web и Mobile', detail: 'Веб- и Android-приложения развиваются параллельно с независимой историей версий.', status: 'done' },
    { id: 'tl7', project: 'testlab', group: 'Интерфейс', title: 'Унификация фирменного логотипа', detail: 'Логотип унифицирован на страницах веб-приложения TestLab.', status: 'done' },
    { id: 'vo1', project: 'venueos', group: 'ТЗ', title: 'Концепция комплексной системы', detail: 'Ресторан, бар, караоке и другие форматы заведений в единой системе.', status: 'done' },
    { id: 'vo2', project: 'venueos', group: 'ТЗ', title: 'Сценарии смен и кассовых операций', detail: 'Правила закрытия смен, скидок и одноразовых кодов согласованы на уровне требований.', status: 'done' },
    { id: 'vo3', project: 'venueos', group: 'Проектирование', title: 'Систематизация технического задания', detail: 'Проверка полноты сценариев и границ первой реализации.', status: 'doing' },
    { id: 'vo4', project: 'venueos', group: 'Разработка', title: 'Рабочий прототип и кассовый интерфейс', detail: 'Реализация после завершения приоритетного бета-этапа TELCORE.', status: 'planned' },
    { id: 'gp1', project: 'telekompolia', group: 'Концепция', title: 'Игровая модель телеком-бизнеса', detail: 'Обучающий симулятор с инженерными и экономическими решениями.', status: 'done' },
    { id: 'gp2', project: 'telekompolia', group: 'Концепция', title: 'Форматы single-player и multiplayer', detail: 'Обозначены режимы игрока, тренера и кабинет участников.', status: 'done' },
    { id: 'gp3', project: 'telekompolia', group: 'Планирование', title: 'Реалистичный 3D-мир Алматы', detail: 'Выбран визуальный подход для первой играбельной версии.', status: 'done' },
    { id: 'gp4', project: 'telekompolia', group: 'Разработка', title: 'Первый играбельный прототип', detail: 'Основные игровые механики и первый рабочий сценарий.', status: 'planned' }
];
export const releases = [
    { id: 'testlab-web-v2.0.2', project: 'testlab', channel: 'Web', version: '2.0.2', date: '2026-10-21', title: 'TestLab Web v2.0.2', description: 'Единая система релизов · 21.10.2026', current: true, notes: [
            'История обновлений Web TestLab переведена на централизованное хранение в Supabase.',
            'Текущая версия платформы определяется автоматически по последнему опубликованному релизу.',
            'Dashboard переведён на единую систему получения информации о текущем релизе.',
            'Личный кабинет получает Patch Notes непосредственно из platform_releases.',
            'Больше не нужно вручную менять номер версии в HTML-страницах.',
            'app-config.js очищен от данных, относящихся к версиям и истории релизов.',
            'Фирменный логотип TestLab унифицирован на страницах веб-приложения.',
            'Web и TestLab Mobile получили независимые централизованные истории релизов.',
            'Подготовлена архитектура для дальнейшего параллельного развития Web и Android.'
        ] },
    { id: 'testlab-mobile-v1.5.0', project: 'testlab', channel: 'Mobile', version: '1.5.0', title: 'TestLab Mobile v1.5.0', description: 'Согласованная версия работающего Android-приложения', current: true, notes: [
            'Android-приложение устанавливается и запускается на устройствах.',
            'История версий Android ведётся независимо от Web TestLab.'
        ] }
];
