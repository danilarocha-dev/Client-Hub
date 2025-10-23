<p align="center">
  <img src="https://i.imgur.com/U3f2s7v.png" alt="Client-Hub Logo" width="200"/>
</p>

<h1 align="center">Client-Hub</h1>

<p align="center">
  <strong>A simple and efficient client management system.</strong>
</p>

<p align="center">
  <a href="#live-demo">Live Demo</a> •
  <a href="#functionalities">Functionalities</a> •
  <a href="#folder-structure">Folder Structure</a> •
  <a href="#built-with">Built With</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#available-scripts">Available Scripts</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

---

## Live Demo

A live demo of the application is available at [https://client-hub-demo.com](https://client-hub-demo.com).

*(Note: This is a placeholder link.)*

---

## Functionalities

- **User Authentication:**
  - Sign up with name, email, and password.
  - Passwords are encrypted before being stored.
  - Login with email and password.
- **Client Management:**
  - Add, edit, and delete clients.
  - List clients in a table.
  - Validation to prevent duplicate emails and CPF/CNPJ.

---

## Folder Structure

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Botao/
│   │   ├── CampoTexto/
│   │   └── Formulario/
│   ├── pages/
│   │   ├── CadastroUsuarioPage.tsx
│   │   ├── ClientPage.tsx
│   │   └── LoginPage.tsx
│   ├── services/
│   │   ├── clientService.ts
│   │   └── storageService.ts
│   ├── types/
│   │   ├── Client.ts
│   │   └── User.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.ts
```

---

## Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [cpf-cnpj-validator](https://github.com/fjorgemota/cpf-cnpj-validator)
- [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js)

---

## Getting Started

Follow the instructions below to set up and run the project in your local development environment.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/client-hub.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd client-hub
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the application in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the application for production in the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs the linter to check the code quality.

### `npm run preview`

Runs the application in production mode.

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature`).
6.  Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.