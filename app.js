const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const controller = require('./controller');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota para a tela de login
app.get('/register', (req, res) => {
    res.render('register', { error: null });
});

app.post('/register', controller.register);

app.get('/', (req, res) => {
    res.redirect('/register');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});