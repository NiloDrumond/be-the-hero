const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 *  Rota / Recurso
 */

/**
 *  Métodos HTTP:
 *  
 *  GET: Buscar uma informação do back-end
 *  POST: Criar uma informação no back-end
 *  PUT: Alterar uma informação no back-end
 *  DELTE: Deletar uma informação no back-end
 */

/**
 *  Tipos de parâmetros:
 * 
 *  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *  Route Params: Parâmetros utilizados para identificar recursos
 *  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsft SQL Server
 *  NoSQL: MongoDB, CouchDB
 */

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').select('*').where()
 */ 

 /**
  * Entities:
  *     ONG
  *     Caso(incident)
  * 
  * Functionalidades:
  *     Login de ONG
  *     Logout de ONG
  *     Cadastro de ONG
  *     Listar casos específicos de uma ONG
  *     Cadastrar novos casos
  *     Deletar casos
  *     Listar todos os casos
  *     Entrar em contato com a ONG
  */

app.listen(3333);
