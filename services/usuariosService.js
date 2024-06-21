const connection = require('../configs/dbConfiguration');
const findAll = async () => {
  const usuários = await (await connection)
      .execute('SELECT * FROM usuários');
  return usuários[0];
};

const update = async (usuario) => {
  // eslint-disable-next-line max-len
  const query = 'UPDATE usuários SET nome = ?, descricao = ?,preco = ?, data_atualizado = ? WHERE id = ?';
  const isOk = await (await connection).execute(query,
      // eslint-disable-next-line max-len
      [usuario.nome, usuario.sobrenome, usuario.email, usuario.idade, usuario.id]);
  return isOk[0].affectedRows === 1;
};

const save = async (usuario) => {
  // eslint-disable-next-line max-len
  const query = 'INSERT INTO usuários(nome, descricao, preco,  data_atualizado) VALUES (?, ?, ?, ?)';
  const isOk = await (await connection).execute(query,
      [usuario.nome, usuario.sobrenome, usuario.email, usuario.idade]);
  return isOk[0].affectedRows === 1;
};

const remove = async (id) => {
  const query = 'DELETE FROM usuários WHERE id = ?';
  const isOk = await (await connection).execute(query, [id]);
  return isOk[0].affectedRows === 1;
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};


