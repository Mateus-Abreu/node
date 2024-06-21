const usuáriosService = require('../services/usuáriosService');
const findAll = async (request, response) => {
  const usuários = await usuáriosService.findAll();
  return response.status(200).json(usuários);
};

const save = async (request, response) => {
  const result = await usuáriosService.save(request.body);
  return result ?
    response.status(200).json() :
    response.status(400).json({'[ERROR/SERVER]': 'Falha ao salvar usuários'});
};

const update = async (usuario) => {
  // eslint-disable-next-line max-len
  const query = 'UPDATE usuários SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?';
  const isOk = await (await connection).execute(query,
      [usuario.nome, usuario.sobrenome, usuario.email, usuario.idade,
        usuario.id]);
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


