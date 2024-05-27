const validateAge = (request, response, next) => {
  const {body} = request;
  if (body.idade == undefined || body.idade === '') {
    return response.status(400)
        .json({message: 'O campo "idade" é obrigatório'});
  }
  // eslint-disable-next-line max-len
  if (isNaN(parseInt(body.idade)) || parseInt(body.idade) < 0 || parseInt(body.idade) > 130) {
    return response.status(400)
        // eslint-disable-next-line max-len
        .json({message: 'O campo "idade" deve ser inteiro positivo e valor possível'});
  }
  next();
};

module.exports = {validateAge};
