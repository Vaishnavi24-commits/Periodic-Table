# Element Explorer [Periodic Table]

**Periodic Table Explorer** is a fully responsive and feature-rich web application designed to provide users with an interactive and informative way to explore the periodic table. The project is built using **HTML**, **CSS**, **Bootstrap**, and **JavaScript**, featuring dynamic functionalities and a rich UI/UX experience.

---

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Pages and Functionalities](#pages-and-functionalities)
   - [Periodic Table Page](#periodic-table-page)
   - [Element Details Page](#element-details-page)
   - [About Page](#about-page)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation](#setup-and-installation)
6. [Future Enhancements](#future-enhancements)
7. [Contributors](#contributors)

---

## Features

### **Core Functionalities**
- Interactive periodic table with hover and click effects.
- Detailed modal popup for each element with:
  - Image of the element.
  - Atomic details (mass, number, configuration, etc.).
  - Link to a dedicated page for the element.
- Group and category filtering for element highlights.
- Responsive design for all screen sizes.

### **Additional Features**
- "About" page with detailed information about the periodic table’s history, structure, and significance.
- Search bar to locate elements by name, symbol, atomic number, or category.
- Smooth animations and transitions for UI interactions.

---

## Project Structure

```
/project
|-- /css
|   |-- styles.css              # Custom CSS for the project
|-- /js
|   |-- script.js               # JavaScript logic for dynamic features
|-- /images
|   |-- logo.png                # Project logo
|-- /details
|   |-- hydrogen.html           # Detailed pages for individual elements
|   |-- helium.html
|   |-- ...
|-- /docs
|   |--periodic_table.pdf       # Periodic Table PDF File
|-- index.html                  # Periodic Table main page
|-- about.html                  # Detailed "About" page for the periodic table
```

---

## Pages and Functionalities

### **Periodic Table Page** (`index.html`)
The central page displaying the periodic table with interactive features:
- Displays 118 elements in rows and groups.
- Dynamic modals to view detailed element information.
- Group filtering buttons to highlight specific categories like alkali metals or noble gases.

### **Element Details Page** (`details/{elementname}.html`)
Each element has a dedicated page that provides:
- Atomic properties: mass, number, configuration, state, etc.
- History of the element’s discovery.
- Uses and applications in real life.
- Visual and interactive content (e.g., videos).

### **About Page** (`about.html`)
An in-depth page about the periodic table, covering:
- Historical context and Dmitri Mendeleev’s contributions.
- Explanation of rows (periods) and columns (groups).
- Categorization and trends in the periodic table.
- Future advancements and relevance.

---

## Technologies Used

- **HTML5**: Structure and semantic elements.
- **CSS3**: Styling, responsive layouts, animations.
- **Bootstrap**: Grid system and responsive components.
- **JavaScript**: Dynamic functionalities (search, modals, filtering).

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AnkushGitRepo/periodic-table-explorer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd periodic-table-explorer
   ```

3. Open the `index.html` file in a browser to view the application locally.

4. Optional: Use a local server for better performance:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

---

## Future Enhancements

- **Dark Mode**: Implement a toggle for dark/light themes.
- **Search Enhancements**: Add fuzzy matching for search terms.
- **Dynamic Content**: Fetch element data from an API for scalability.
- **User Interactions**: Add a quiz mode for learning about elements interactively.

---

## Contributors

- [Ankush Gupta](https://www.linkedin.com/in/ankushgupta18/)
- Het Gohil
- [Shlok Jani](https://www.linkedin.com/in/shlok-jani-a5a98732b/)
- Dhwani Parmar
- Siddhi Brahmabhatt
