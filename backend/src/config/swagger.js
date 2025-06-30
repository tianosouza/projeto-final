const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Projeto Final - Backend',
      version: '1.0.0',
      description: 'Documentação da API de Usuários e Produtos',
    },
    servers: [
      { url: 'http://localhost:3000' },
      { url: 'https://backend-final-project.fly.dev' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: [
    './src/infra/http/routes/userRoutes.js',
    './src/infra/http/routes/productRoutes.js'
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;