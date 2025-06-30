# Projeto Final - Frontend

## Descrição

Frontend da aplicação **Digital Store**, desenvolvido em React com Vite, consumindo a API do backend para gerenciamento de usuários e produtos. Interface moderna, responsiva e com navegação SPA.

---

## Pré-requisitos

- Node.js (v18 ou superior)
- npm

---

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/tianosouza/projeto-final
   cd projeto-final/frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente (se necessário):**

   - Por padrão, o frontend espera que o backend esteja rodando em `http://localhost:3000`.
   - Se precisar alterar a URL da API, crie um arquivo `.env` na raiz do frontend e adicione:
     ```
     VITE_API_URL=http://localhost:3000
     ```

---

## Rodando o projeto

```bash
npm run dev
```

O frontend estará disponível em: [http://localhost:5173](http://localhost:5173) (ou a porta exibida no terminal).

---

## Estrutura de Pastas

```
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## Funcionalidades

- Listagem de produtos e categorias
- Visualização de detalhes do produto
- Carrinho de compras
- Cadastro e login de usuário
- Página de pedidos, contato, sobre e mais
- Integração com backend para autenticação e operações CRUD

---

## Observações

- Certifique-se de que o backend está rodando antes de acessar funcionalidades que dependem da API.
- As imagens e dados de produtos podem ser mockados ou consumidos da API, conforme configuração do projeto.
- Para customizar informações do site (nome, endereço, menus), edite os arquivos em `src/data/SiteData/`.

---

## Scripts úteis

- `npm run dev` - Inicia o frontend em modo desenvolvimento
- `npm run build` - Gera a versão de produção
- `npm run preview` - Visualiza a build de produção localmente

---

## Dúvidas?

Abra uma issue ou entre em contato com o responsável pelo
