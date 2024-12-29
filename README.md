# Hotels Travelking

This project is a web application for selecting and booking hotels using an API. It includes features for displaying available rooms, a calendar, and working with modals. The project uses standard web technologies like HTML, CSS (SASS), and JavaScript.

## Project Structure

- **`/styles`** — Folder for style files. It contains SASS files used for styling the application.
- **`/Scripts`** — Folder containing JavaScript files for the project functionality:
  - `calendarFunc.js` — Additional functions for working with the calendar.
  - `calendar.js` — Main script for the calendar functionality.
  - `functions.js` — Helper functions for modals and amenities.
  - `getDates.js` — Script for retrieving selected dates.
  - `sendDatesToApi.js` — Script for sending date data to the API.
  - `renderRooms.js` — Functions for rendering available rooms.
  - `openImageModal.js` — Script for opening image modals.
  - `content.js` — Script for managing content on the page.

## Installation and Running

1. Clone the repository:
    ```bash
    git clone https://github.com/vldslvvasilec/hotelsTravelking.git
    ```

2. Navigate to the project directory:
    ```bash
    cd hotelsTravelking
    ```

3. Install dependencies using Vite:
    ```bash
    npm install
    ```

4. Run the project in development mode:
    ```bash
    npm run dev
    ```

    The application will open at [http://localhost:5173](http://localhost:5173).

## Features

- **Dynamic Calendar:** Users can interact with the calendar to select booking dates.
- **Room Display:** The application dynamically displays available rooms based on API responses.
- **Modals:** Modal windows are implemented to display room details or booking forms.
- **Responsive Design:** The application is fully responsive and adapts to various screen sizes.

## Technologies Used

- **HTML, CSS (SASS), JavaScript:** Core web technologies for creating the structure, styles, and functionality of the app.
- **Vite:** Build tool that provides fast development and production optimization.
- **API Integration:** The app interacts with a backend API to retrieve and send data.
---

# Hotels Travelking

Tento projekt je webová aplikace pro výběr a rezervaci hotelů pomocí API. Obsahuje funkce pro zobrazení dostupných pokojů, kalendář a práci s modálními okny. Projekt využívá standardní webové technologie jako HTML, CSS (SASS) a JavaScript.

## Struktura projektu

- **`/styles`** — Složka pro soubory stylů. Obsahuje SASS soubory používané pro stylování aplikace.
- **`/Scripts`** — Složka obsahující JavaScript soubory pro funkčnost projektu:
  - `calendarFunc.js` — Další funkce pro práci s kalendářem.
  - `calendar.js` — Hlavní skript pro práci s kalendářem.
  - `functions.js` — Pomocné funkce pro modální okna a vybavení.
  - `getDates.js` — Skript pro získání vybraných dat.
  - `sendDatesToApi.js` — Skript pro odesílání dat do API.
  - `renderRooms.js` — Funkce pro zobrazení dostupných pokojů.
  - `openImageModal.js` — Skript pro otevření modálních oken s obrázky.
  - `content.js` — Skript pro správu obsahu na stránce.

## Instalace a spuštění

1. Naklonujte repozitář:
    ```bash
    git clone https://github.com/vldslvvasilec/hotelsTravelking.git
    ```

2. Přejděte do adresáře projektu:
    ```bash
    cd hotelsTravelking
    ```

3. Nainstalujte závislosti pomocí Vite:
    ```bash
    npm install
    ```

4. Spusťte projekt v režimu vývoje:
    ```bash
    npm run dev
    ```

    Aplikace se otevře na [http://localhost:5173](http://localhost:5173).

## Funkce

- **Dynamický kalendář:** Uživatelé mohou interagovat s kalendářem pro výběr dat rezervace.
- **Zobrazení pokojů:** Aplikace dynamicky zobrazuje dostupné pokoje na základě odpovědí API.
- **Modální okna:** Implementována modální okna pro zobrazení detailů pokoje nebo rezervačních formulářů.
- **Responzivní design:** Aplikace je plně responzivní a přizpůsobuje se různým velikostem obrazovky.

## Použité technologie

- **HTML, CSS (SASS), JavaScript:** Hlavní webové technologie pro tvorbu struktury, stylů a funkčnosti aplikace.
- **Vite:** Nástroj pro sestavení, který poskytuje rychlý vývoj a optimalizaci pro produkci.
- **Integrace s API:** Aplikace komunikuje s backend API pro získávání a odesílání dat.
---

# Hotels Travelking

Этот проект представляет собой веб-приложение для выбора и бронирования отелей с использованием API. В нем реализованы функции отображения доступных номеров, календаря и работы с модальными окнами. В проекте используются стандартные веб-технологии, такие как HTML, CSS (SASS) и JavaScript.

## Структура проекта

- **`/styles`** — Папка для файлов стилей. В ней находятся SASS-файлы, которые используются для стилизации приложения.
- **`/Scripts`** — Папка, содержащая JavaScript-файлы с функциональностью проекта:
  - `calendarFunc.js` — Дополнительные функции для работы с календарем.
  - `calendar.js` — Основной скрипт для работы с календарем.
  - `functions.js` — Вспомогательные функции для работы с модальными окнами и удобствами.
  - `getDates.js` — Скрипт для получения выбранных дат.
  - `sendDatesToApi.js` — Скрипт для отправки запросов к API с выбранными датами.
  - `renderRooms.js` — Функции для отображения выбранных номеров.
  - `openImageModal.js` — Скрипт для открытия модальных окон с изображениями.
  - `content.js` — Скрипт для управления контентом на странице.

## Установка и запуск

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/vldslvvasilec/hotelsTravelking.git
    ```

2. Перейдите в директорию проекта:
    ```bash
    cd hotelsTravelking
    ```

3. Установите зависимости с помощью Vite:
    ```bash
    npm install
    ```

4. Запустите проект в режиме разработки:
    ```bash
    npm run dev
    ```

    После этого откроется приложение по адресу [http://localhost:5173](http://localhost:5173).

## Возможности

- **Динамический Календарь:** Пользователи могут взаимодействовать с календарем для выбора дат бронирования.
- **Отображение Номеров:** Приложение динамически отображает доступные номера на основе ответов API.
- **Модальные Окна:** Реализованы модальные окна для отображения деталей номера или форм бронирования.
- **Адаптивный Дизайн:** Приложение полностью адаптивно и подстраивается под различные размеры экранов.

## Используемые Технологии

- **HTML, CSS (SASS), JavaScript:** Основные веб-технологии для создания структуры, стилей и функциональности приложения.
- **Vite:** Инструмент для сборки, обеспечивающий быструю разработку и оптимизацию для продакшена.
- **Интеграция с API:** Приложение взаимодействует с backend API для получения и отправки данных.
