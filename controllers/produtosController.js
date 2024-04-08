const produtosService = require('../services/produtosService');
const findAll = async (request, response) => {
 const produtos = await produtosService.findAll();
 return response.status(200).json(produtos);
};

const save = async (request, response) => {
    const result = await produtosService.save(request.body);
    return result ?
    response.status(200).json() :
    response.status(400).json({ "[ERROR/SERVER]" : "Falha ao salvar produtos" });
};

const update = async (produto) => {
    const query = 'UPDATE produtos SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?';
    const isOk = await (await connection).execute(query,
   [produto.nome, produto.sobrenome, produto.email, produto.idade,
   produto.id]);
    return isOk[0].affectedRows === 1;
}

const remove = async (id) => {
    const query = 'DELETE FROM produtos WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

module.exports = {
    findAll,
    save,
    remove,
    update
};
   
   
