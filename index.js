const express = require('express')
const app = express()

app.get("/",  (req, res) => {
    res.send("Hello, World!");
});

app.get("/oi",  (req, res) => {
    res.send("Olá, mundo!");
});

/*
Lista de EndPoints da aplicação CRUD de Mensagens.
CRUD: create; Read (single & all); Update; Delete;
- [GET] /Mensagens/{id} - Retorna apenas uma unica mensagens pelo id.
- [POST] /Mensagens - Cria  uma nova mensagem.
- [PUT] /Mensagens/{id} - Atualiza uma Mensagem pelo ID.
- [DELETE] /Mensagens/{id} - Remove uma mensagem pelo ID.
*/

const Mensagens = [
    "Essa é a preimeira Mensagem",
    "Essa é a segunda Mensagem",
    "Essa é a terceira Mensagem",
    "Essa é a quarta Mensagem",
    "Essa é a quinta Mensagem"
];

app.get('/Mensagens', (req, res) => {
    res.send(Mensagens);
})

app.get('/Mensagens/:id', (req, res) => {
    const id = req.params.id -1;
    const mensagem = Mensagens [id];
    res.send(mensagem);
})

app.listen(3000, function() {
    console.info('App rodando em http://localhost:3000')
});