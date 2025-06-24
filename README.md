# Projeto final do Curso de Desenvolvedor Web FullStack

## Integrantes

- Cristiano Pinheiro de Souza  
- Walison Rocha  
- Cleidivano Lopes Da Silva 

## Estrutura do Projeto

```plaintext
projeto-final/
├── backend/
|   ├── prisma/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── env.js
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── User.js
│   │   │   └── Product.js
│   │   └── repositories/
│   │       ├── IUserRepository.js
│   │       └── IProductRepository.js
│   ├── infra/
│   │   ├── prisma/
│   │   │   ├── client.js
│   │   │   ├── PrismaUserRepository.js
│   │   │   └── PrismaProductRepository.js
│   │   └── http/
│   │       ├── middlewares/
│   │       │   ├── authMiddleware.js
│   │       │   └── errorHandler.js
│   │       ├── controllers/
│   │       │   ├── UserController.js
│   │       │   └── ProductController.js
│   │       └── routes/
│   │           ├── userRoutes.js
│   │           └── productRoutes.js
│   ├── useCases/
│   │   ├── user/
│   │   │   ├── createUser/
│   │   │   │   └── CreateUserUseCase.js
│   │   │   └── authenticateUser/
│   │   │       └── AuthenticateUserUseCase.js
│   │   └── product/
│   │       ├── createProduct/
│   │       │   └── CreateProductUseCase.js
│   │       └── listProducts/
│   │           └── ListProductsUseCase.js
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
├── .env
└── .gitignore
└── README.md
