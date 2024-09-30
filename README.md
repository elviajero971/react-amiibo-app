
# React Amiibo App

## 🚀 Introduction

This repository contains a **React** application built with **JavaScript** that consumes the Amiibo API. The purpose of this app is to fetch and display data related to Amiibo figures, showcasing different collections, series, and characters. It is designed to be modular, scalable, and responsive across various devices.

## 🎯 Features
- **Fetches data** from the public Amiibo API.
- Displays a list of Amiibos with filtering options by series and characters.
- Provides detailed information for each Amiibo figure.
- Responsive design for a seamless experience on both mobile and desktop devices.
- Modular component architecture with reusable styles and components.

## 🗂️ Project Structure

Here's an overview of the folder structure of this project:

```bash
.
├── .github                 # GitHub Actions workflows
│   └── workflows           # CI/CD workflows
│       └── main.yml        # Main workflow file
├── public                  # Static assets (HTML, images, etc.)
│   └── index.html          # Entry point for the application
├── src                     # Main application source code
│   ├── components          # Reusable React components
│   │   └── maincontainer   # Main container components
│   │       ├── displaycontent  # Components to display Amiibo content
│   │       │   └── card        # Card components for Amiibo figures
│   │       └── navbar          # Navbar components
│   │           └── navitem     # Navigation items for filtering
│   └── index.js            # Application entry point
├── App.js                  # Main application component
├── index.css               # Global styles for the application
├── index.js                # Application entry point
├── package.json            # Project dependencies and scripts
├── README.md               # This file
└── .gitignore              # Ignored files in Git
```

### Key Folders:
- **`components/`**: Contains reusable UI components, organized by purpose (e.g., `navbar`, `maincontainer`, `displaycontent`).
- **`css/`**: Styles specific to components or global styles used across the app.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (version 14.x or higher)
- **npm** or **yarn**

### Installation

Clone this repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/elviajero971/react-amiibo-app.git

# Navigate to the project directory
cd react-amiibo-app

# Install dependencies using npm or yarn
npm install
# OR
yarn install
```

### Running the Application

After the installation is complete, start the development server:

```bash
npm start
# OR
yarn start
```

This will start the application and you can view it in your browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application:

```bash
npm run build
# OR
yarn build
```

This will generate optimized static files in the `build/` folder, which can be deployed to any hosting service.

This command runs the test suite defined in the repository, ensuring all components and functionality work as expected.

## 🧩 Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: For component-level styling.
- **Amiibo API**: For fetching Amiibo-related data.

## 🤝 Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. All contributions, feedback, and suggestions are welcome!

## 🌐 Live Demo

You can view the live version of this Amiibo app at: [https://amiibos.nomadev.online](https://your-demo-link.com)

## 📬 Contact

- **Email**: [lucas.illiano@hotmail.com](mailto:lucas.illiano@hotmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/lucas-illiano/](https://www.linkedin.com/in/lucas-illiano/)
- **GitHub**: [https://github.com/elviajero971/](https://github.com/elviajero971/)

Feel free to reach out if you have any questions or want to collaborate on a project!
