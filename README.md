# Hotels Travelking

This project is a web application for selecting and booking hotels using an API. It implements functions for displaying available rooms, a calendar, and working with modal windows. The project uses standard web technologies such as HTML, CSS (SASS), and JavaScript.

## Project Structure

- **`/styles`** — Folder for style files. It contains the SASS files used for styling the application.
- **`/Scripts`** — Folder containing JavaScript files with the project functionality:
  - `calendarFunc.js` — Additional functions for working with the calendar.
  - `functions.js` — Helper functions for working with modals and amenities.
  - `renderRooms.js` — Functions for displaying selected rooms.
  - `getDates.js` and `sendDatesToApi.js` — Scripts for sending requests to the API.

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

    After this, the application will open at [http://localhost:5173](http://localhost:5173).

## Features

- **Dynamic Calendar:** Users can interact with a calendar to select dates for hotel bookings.
- **Room Rendering:** The application dynamically displays available rooms based on API responses.
- **Modal Windows:** Modals are implemented for displaying detailed room information or booking forms.
- **Responsive Design:** The application is fully responsive and adjusts to different screen sizes for an optimal user experience.

## Technologies Used

- **HTML, CSS (SASS), JavaScript:** Core web technologies to build the structure, style, and functionality of the application.
- **Vite:** A build tool providing fast development and optimized production builds.
- **API Integration:** The application communicates with a backend API for fetching and submitting data.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to your forked repository:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request to the `main` branch of the original repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

# Hotels Travelking

Tento projekt je webová aplikace pro výběr a rezervaci hotelů pomocí API. Implementuje funkce pro zobrazení dostupných pokojů, kalendáře a práci s modálními okny. Projekt využívá standardní webové technologie jako HTML, CSS (SASS) a JavaScript.

## Struktura projektu

- **`/styles`** — Složka pro soubory stylů. Obsahuje SASS soubory používané pro stylování aplikace.
- **`/Scripts`** — Složka obsahující JavaScript soubory s funkcionalitou projektu:
  - `calendarFunc.js` — Další funkce pro práci s kalendářem.
  - `functions.js` — Pomocné funkce pro práci s modálními okny a vybavením.
  - `renderRooms.js` — Funkce pro zobrazení vybraných pokojů.
  - `getDates.js` a `sendDatesToApi.js` — Skripty pro odesílání požadavků na API.

## Instalace a spuštění

1. Klonujte repozitář:
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

    Po tomto kroku se aplikace otevře na [http://localhost:5173](http://localhost:5173).

## Funkce

- **Dynamický Kalendář:** Uživatelé mohou pracovat s kalendářem pro výběr termínů rezervace.
- **Zobrazení Pokojů:** Aplikace dynamicky zobrazuje dostupné pokoje na základě odpovědí z API.
- **Modální Okna:** Implementována modální okna pro zobrazení detailů pokojů nebo rezervačních formulářů.
- **Responzivní Design:** Aplikace je plně responzivní a přizpůsobuje se různým velikostem obrazovek.

## Použité Technologie

- **HTML, CSS (SASS), JavaScript:** Jádrové webové technologie pro tvorbu struktury, stylu a funkčnosti aplikace.
- **Vite:** Nástroj pro sestavení, který poskytuje rychlý vývoj a optimalizované produkční sestavení.
- **API Integrace:** Aplikace komunikuje s backendovým API pro získání a odesílání dat.

## Přispívání

Příspěvky jsou vítány! Postupujte podle těchto kroků:

1. Forkujte repozitář.
2. Vytvořte novou větev pro vaši funkci nebo opravu chyby:
    ```bash
    git checkout -b feature-name
    ```
3. Proveďte své změny a potvrďte je:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Nahrajte změny do vaší forkované verze:
    ```bash
    git push origin feature-name
    ```
5. Otevřete pull request na větev `main` původního repozitáře.

## Licence

Tento projekt je licencován pod MIT Licencí. Další informace naleznete v souboru `LICENSE`.

---

# Hotels Travelking

Этот проект представляет собой веб-приложение для выбора и бронирования отелей с использованием API. В нем реализованы функции отображения доступных номеров, календаря и работы с модальными окнами. В проекте используются стандартные веб-технологии, такие как HTML, CSS (SASS) и JavaScript.

## Структура проекта

- **`/styles`** — Папка для файлов стилей. В ней находятся SASS-файлы, которые используются для стилизации приложения.
- **`/Scripts`** — Папка, содержащая JavaScript-файлы с функциональностью проекта:
  - `calendarFunc.js` — Дополнительные функции для работы с календарем.
  - `functions.js` — Вспомогательные функции для работы с модальными окнами и удобствами.
  - `renderRooms.js` — Функции для отображения выбранных номеров.
  - `getDates.js` и `sendDatesToApi.js` — Скрипты для отправки запросов к API.

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

## Участие в Разработке

Приветствуются любые предложения и улучшения! Следуйте этим шагам для участия:

1. Сделайте fork репозитория.
2. Создайте новую ветку для своей функции или исправления:
    ```bash
    git checkout -b feature-name
    ```
3. Внесите изменения и зафиксируйте их:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Отправьте изменения в свою fork-версию:
    ```bash
    git push origin feature-name
    ```
5. Откройте pull request на ветку `main` оригинального репозитория.

## Лицензия

Этот проект лицензирован под лицензией MIT. Подробнее в файле `LICENSE`.
