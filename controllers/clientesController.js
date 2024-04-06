const clientesService = require('../services/clientesService');
const findAll = async (request, response) => {
 const clientes = await clientesService.findAll();
 return response.status(200).json(clientes);
};

const save = async (request, response) => {
    const result = await clientesService.save(request.body);
    return result ?
    response.status(200).json() :
    response.status(400).json({ "[ERROR/SERVER]" : "Falha ao salvar cliente" });
};

const update = async (cliente) => {
    const query = 'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?';
    const isOk = await (await connection).execute(query,
    [cliente.nome, cliente.sobrenome, cliente.email, cliente.idade, cliente.id]);
    return isOk[0].affectedRows === 1;
}

const remove = async (id) => {
    const query = 'DELETE FROM clientes WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

module.exports = {
    findAll,
    save,
    remove,
    update
};
   
   
