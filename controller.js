const model = require('./model');

async function register(req, res) {
    const { username, password } = req.body;
    try {
        await model.createUser(username, password);
        res.redirect('/register?success=true');  // Redirecionar para a mesma página com um parâmetro de sucesso
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.render('register', { error: 'Erro ao cadastrar usuário' });
    }
}

module.exports = {
    register
};
