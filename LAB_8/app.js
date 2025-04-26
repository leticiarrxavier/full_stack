const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Rota principal para o projeto
app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo ao Projeto de Cadastro e Login</h1>');
});

// Rota para a página de cadastro
app.get('/cadastra', (req, res) => {
    res.render('cadastro');
});

// Rota para a página de login
app.get('/login', (req, res) => {
    res.render('login');
});

// Rota para tratar o cadastro (POST)
app.post('/cadastra', (req, res) => {
    const { username, password } = req.body;
    // Aqui você pode salvar o usuário no banco de dados
    console.log(`Usuário cadastrado: ${username}`);
    res.redirect('/login');
});

// Rota para tratar o login (POST)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Aqui você pode verificar as credenciais no banco de dados
    if (username === "admin" && password === "admin123") {
        res.render('resposta', { message: "Login bem-sucedido!" });
    } else {
        res.render('resposta', { message: "Credenciais inválidas." });
    }
});

// Iniciar o servidor na porta 80
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});