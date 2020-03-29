const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Métodos
 * 
 * GET: Busca/listar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no Back-end 
 * DELETE: Deletar informçaõ no Back-end
 */

 /**
  * Tipos de de parâmetros
  * 
  * Query Parems: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parêmetros ultilizados para identificar recusos
  * Request Body: Corpo da requisição, ultilizado para criar ou alterar o usuario
  */

  /**
   * BANCO DE DADOS
   * SQUL, mySQL, SQlite.....
   * 
   */


app.listen(3333);