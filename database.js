const { Conexao } = require('pg');

const conexao = new Conexao({
  user: 'postgres',
  host: 'localhost',
  database: 'produtos',
  password: 'postgres',
  port: 5432,
});

module.exports = conexao;
