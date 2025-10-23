# Sistema de Gerenciamento de Clientes

Sistema de gerenciamento de clientes desenvolvido com React, TypeScript e Vite. A aplicação permite o cadastro e login de usuários, e o gerenciamento de uma lista de clientes.

## Funcionalidades

- **Autenticação de Usuários:**
  - Cadastro de novos usuários com nome, e-mail e senha.
  - As senhas são criptografadas antes de serem armazenadas.
  - Login de usuários com e-mail e senha.
- **Gerenciamento de Clientes:**
  - Adicionar, editar e excluir clientes.
  - Listagem de clientes em uma tabela.
  - Validação para evitar e-mails e CPF/CNPJ duplicados.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/) para componentes de UI.
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) para criptografia de senhas.
- [cpf-cnpj-validator](https://github.com/fjorgemota/cpf-cnpj-validator) para validação de CPF/CNPJ.
- [libphonenumber-js](https://github.com/catamphetamine/libphonenumber-js) para validação de números de telefone.

## Primeiros Passos

Siga as instruções abaixo para executar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd seu-repositorio
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:5173](http://localhost:5173) para visualizá-la no navegador.

A página será recarregada se você fizer edições.
Você também verá quaisquer erros de lint no console.

### `npm run build`

Compila a aplicação para produção na pasta `dist`.
Ele agrupa o React corretamente no modo de produção e otimiza a compilação para o melhor desempenho.

### `npm run lint`

Executa o linter para verificar a qualidade do código.

### `npm run preview`

Executa a aplicação em modo de produção.
