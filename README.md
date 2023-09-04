**MealApp**

**PL** 🇵🇱

MealApp to aplikacja internetowa, która umożliwia wyszukiwanie przepisów kulinarnych na podstawie **wprowadzonych składników**, oddzielonych przecinkami. Po wpisaniu składników i kliknięciu przycisku **"Szukaj"**, na stronie wyświetlane są **zdjęcia** oraz **nazwy przepisów** odpowiadających podanym składnikom. Kliknięcie na wybranym przepisie przenosi użytkownika na dedykowaną **stronę przepisu**, gdzie dostępne są **szczegółowe informacje**, w tym lista składników, instrukcje przygotowania, czas potrzebny na przygotowanie dania, ilość porcji oraz **wskaźnik zdrowia** (Health Score).

Dane niezbędne do działania aplikacji są dostarczane poprzez **API** dostępne na stronie **spoonacular.com**. Warto zaznaczyć, że w wersji **darmowej** API ogranicza liczbę zapytań do **150**, co powinno wystarczyć na potrzeby tego projektu.

Strona główna aplikacji jest dostępna pod adresem kończącym się na **".\home"**, natomiast strony z przepisami posiadają **unikalne identyfikatory** dostępne pod adresem **".\recipe\id_skladniku"**.

**Instalacja i Uruchomienie** <br>

Na ten moment w plikach znajduje się klucz, który prawdopodobnie nie będzie już aktywny. Dlatego w celu uruchomienia aplikacji po zalogowaniu się na stronie **spoonacular.com**, musimy wygenerować nowy klucz API i wstawić go w miejsce nie działającego klucza.

Po sklonowaniu repozytorium należy uruchomić aplikację za pomocą kilku prostych kroków:

1. W konsoli wprowadzić komendę **`npm install`** w celu zainstalowania niezbędnych paczek.
2. Następnie użyć polecenia **`npm start`**, aby uruchomić aplikację.

**Wykorzystane Technologie**

- **React:** React to biblioteka JavaScript, która znakomicie sprawdza się do tworzenia interfejsów użytkownika. Zapewnia ona strukturalny sposób tworzenia komponentów interfejsu użytkownika, co ułatwia budowę dynamicznych aplikacji internetowych.

- **Reactstrap:** Reactstrap to biblioteka umożliwiająca korzystanie z komponentów Bootstrap jako komponentów React. Dzięki niej można tworzyć responsywne i atrakcyjne wizualnie interfejsy użytkownika w aplikacjach React.

- **Spoonacular:** Spoonacular to API wykorzystywane do pobierania przepisów kulinarnych. Udostępnia ono dostęp do rozległej bazy danych przepisów, co czyni je cennym źródłem informacji do budowy aplikacji do wyszukiwania przepisów.

<hr>

**EN** 🇬🇧

**MealApp**

MealApp is a web application that allows you to search for culinary recipes based on **entered ingredients**, separated by commas. After entering the ingredients and clicking the **"Search"** button, the page displays **photos** and **names of recipes** that match the entered ingredients. Clicking on a selected recipe takes the user to a dedicated **recipe page**, where **detailed information** is available, including the list of ingredients, preparation instructions, preparation time, number of servings, and a **health score**.

The data required for the application to function is provided through an **API** available at **spoonacular.com**. It is worth noting that in the **free version** of the API, there is a limit of **150** requests, which should be sufficient for the purposes of this project.

The main page of the application is available at the endpoint ending with **".\home"**, while recipe pages have **unique identifiers** available at the endpoint **".\recipe\ingredient_id"**.

**Installation and Running**

At the moment, there is a key in the files that is likely no longer active. Therefore, to run the application after logging in to **spoonacular.com**, we need to generate a new API key and replace it in place of the non-working key.

After cloning the repository, run the following commands in the console:

1. `npm install` to install the necessary packages.
2. `npm start` to start the application.

**Technologies Used**

- **React:** React is a JavaScript library that excels at creating user interfaces. It provides a structured way to create user interface components, making it easy to build dynamic web applications.

- **Reactstrap:** Reactstrap is a library that allows you to use Bootstrap components as React components. It simplifies the process of creating responsive and visually appealing user interfaces in React applications.

- **Spoonacular:** Spoonacular is an API used to fetch culinary recipes. It provides access to an extensive database of recipes, making it a valuable source of information for building a recipe search application.



  
