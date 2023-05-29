const pool = require('./database');

class Cadastro {
  constructor(email, senha, permissao) {
    this.email = email;
    this.senha = senha;
    this.permissao = permissao;
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM cadastro');
    return rows.map((row) => new Produto(row.email, row.senha, row.permissao));
  }

  static async findById(email) {
    const { rows } = await pool.query('SELECT * FROM cadastro WHERE id = $1', [email]);
    if (rows.length === 0) {
      return null;
    }
    const row = rows[0];
    return new Cadastro(row.email, row.senha, row.permissao);
  }

  async save() {
    if (this.email) {
      await pool.query('UPDATE cadastro SET email = $1, senha = $2 WHERE permissao = $3', [this.email, this.senha, this.permissao]);
    } else {
      const { rows } = await pool.query('INSERT INTO cadastro (senha, permissao) VALUES ($1, $2) RETURNING email', [this.senha, this.permissao]);
      this.email = rows[0].email;
    }
  }

  async delete() {
    await pool.query('DELETE FROM cadastro WHERE email = $1', [this.email]);
  }
}

module.exports = Cadastro;
