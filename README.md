<p align="center">
  <img src="https://i.imgur.com/U3f2s7v.png" alt="Client-Hub Logo" width="200"/>
</p>

<h1 align="center">Client-Hub</h1>

<p align="center">
  <strong>Um sistema de gerenciamento de clientes simples e eficiente.</strong>
</p>

<p align="center">
  <a href="#demonstração-ao-vivo">Demonstração ao Vivo</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#estrutura-de-pastas">Estrutura de Pastas</a> •
  <a href="#construído-com">Construído com</a> •
  <a href="#começando">Começando</a> •
  <a href="#scripts-disponíveis">Scripts Disponíveis</a> •
  <a href="#contribuindo">Contribuindo</a> •
  <a href="#licença">Licença</a>
</p>

---

## Demonstração ao Vivo

Uma demonstração ao vivo da aplicação está disponível em [https://client-hub-demo.com](https://client-hub-demo.com).

*(Nota: Este é um link de exemplo.)*

---

## Funcionalidades

- **Autenticação de Usuário:**
  - Cadastre-se com nome, e-mail e senha.
  - As senhas são criptografadas antes de serem armazenadas.
  - Faça login com e-mail e senha.
- **Gerenciamento de Clientes:**
  - Adicione, edite e exclua clientes.
  - Liste os clientes em uma tabela.
  - Validação para evitar e-mails e CPF/CNPJ duplicados.

---

## Estrutura de Pastas

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

## Construído com

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [cpf-cnpj-validator](https://github.com/fjorgemota/cpf-cnpj-validator)
- [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js)

---

## Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/client-hub.git
    ```
2.  Navegue até o diretório do projeto:
    ```sh
    cd client-hub
    ```
3.  Instale as dependências:
    ```sh
    npm install
    ```

---

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:5173](http://localhost:5173) para visualizá-la no navegador.

A página será recarregada se você fizer edições.
Você também verá quaisquer erros de lint no console.

### `npm run build`

Compila a aplicação para produção na pasta `dist`.
Ele agrupa corretamente o React em modo de produção e otimiza a compilação para o melhor desempenho.

### `npm run lint`

Executa o linter para verificar a qualidade do código.

### `npm run preview`

Executa a aplicação em modo de produção.

---

## Contribuindo

Contribuições são bem-vindas! Por favor, siga estes passos para contribuir:

1.  Faça um fork do repositório.
2.  Crie uma nova branch (`git checkout -b feature/sua-feature`).
3.  Faça suas alterações.
4.  Faça o commit de suas alterações (`git commit -m 'Adiciona alguma feature'`).
5.  Faça o push para a branch (`git push origin feature/sua-feature`).
6.  Abra um pull request.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
