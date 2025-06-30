# Projeto Final - Backend

## Descrição

API RESTful para gerenciamento de usuários e produtos, com autenticação JWT, documentação Swagger e integração com banco de dados via Prisma.

---

## Pré-requisitos

- Node.js (v18 ou superior)
- npm
- Banco de dados SQLite (já configurado por padrão no Prisma, mas pode ser adaptado para outros bancos)
- [Opcional] Docker (caso queira rodar o banco em container)

---

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/tianosouza/projeto-final
   cd projeto-final/backend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   - Copie o arquivo `.env.example` para `.env` e ajuste as variáveis conforme necessário.
   - Exemplo de `.env`:
     ```
     JWT_SECRET=sua_chave_secreta
     ```

4. **Gere o client do Prisma:**

   ```bash
   npx prisma generate
   ```

5. **Rode as migrations para criar o banco:**

   ```bash
   npx prisma migrate dev
   ```

6. **Crie o usuário padrão (executado automaticamente após o install):**

   O script `scripts/createDefaultUser.js` será executado automaticamente após o `npm install`, criando um usuário admin caso não exista.

---

## Rodando o projeto

### Em modo desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Documentação da API

Acesse a documentação Swagger em:

```
http://localhost:3000/api-docs
```

---

## Testes

Execute todos os testes automatizados com:

```bash
npm test
```

---

## Endpoints principais

- **Usuários**

  - `POST /users` - Cria usuário
  - `POST /users/login` - Login
  - `GET /users` - Lista usuários (requer autenticação)
  - `PUT /users/:id` - Atualiza usuário (requer autenticação)
  - `DELETE /users/:id` - Deleta usuário (requer autenticação)

- **Produtos**
  - `GET /products` - Lista produtos
  - `POST /products` - Cria produto (requer autenticação)
  - `PUT /products/:id` - Atualiza produto (requer autenticação)
  - `DELETE /products/:id` - Deleta produto (requer autenticação)

Consulte a documentação Swagger para detalhes de payloads e respostas.

---

## Usuário padrão

Após o primeiro `npm install`, será criado automaticamente:

- **Email:** admin@admin.com
- **Senha:** admin

---

## Observações

- Para acessar rotas protegidas, faça login e utilize o token JWT retornado no header `Authorization: Bearer <token>`.
- O projeto segue padrão MVC, com separação de camadas (controllers, use cases, repositories).
- O banco padrão é SQLite, mas pode ser alterado no arquivo `prisma/schema.prisma`.

---

## Scripts úteis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm test` - Executa os testes automatizados
- `npx prisma studio` - Interface visual para o banco de dados

---


