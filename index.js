const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get("/",  (req, res) => {
    res.send("Hello, World!");
});

app.get("/oi",  (req, res) => {
    res.send("Olá, mundo!");
});

/*
Lista de EndPoints da aplicação CRUD de Mensagens.
CRUD: create; Read (single & all); Update; Delete;
- [GET] /Mensagens - Retorna a lista de mensagens.
- [GET] /Mensagens/{id} - Retorna apenas uma unica mensagens pelo id.
- [POST] /Mensagens - Cria  uma nova mensagem.
- [PUT] /Mensagens/{id} - Atualiza uma Mensagem pelo ID.
- [DELETE] /Mensagens/{id} - Remove uma mensagem pelo ID.
*/

const Mensagens = [
    {
        "id": 1,
        "texto": "Primeiro texto"
    },
    {
        "id": 2,
        "texto": "Segundo Texto"
    },
    {
        "id": 3,
        "texto": "Terceiro texto"
    },

];

//[GET] /Mensagens - Retorna a lista de mensagens.
app.get('/Mensagens', (req, res) => {
    res.send(Mensagens.filter(Boolean));
})

//[GET] /Mensagens/{id} - Retorna apenas uma unica mensagens pelo id.
app.get('/Mensagens/:id', (req, res) => {
    const id = req.params.id -1;
    const mensagem = Mensagens [id];
    if(!mensagem)
    {
        res.send('Mensagem não encontrada!!');
        return;
    }
    res.send(mensagem);
})

//[POST] /Mensagens - Cria  uma nova mensagem.
app.post('/Mensagens', (req, res) => {
    const mensagem = req.body;
    if(!mensagem || !mensagem.texto)
    {
        res.send('Mensagem INvalida');
        return;
    }
    mensagem.id = Mensagens.length + 1;
    Mensagens.push(mensagem);
    res.send(mensagem);
})
 
//[PUT] /Mensagens/{id} - Atualiza uma Mensagem pelo ID.
app.put('/Mensagens/:id', (req, res) => {
    const id = req.params.id -1;
    const mensagem = Mensagens[id];
    const Ntexto = req.body.texto;
    if(!Ntexto)
    {
        res.send('Mensagem invalida!!!');
        return;
    }
    mensagem.texto = Ntexto;
    res.send(mensagem);
})

//[DELETE] /Mensagens/{id} - Remove uma mensagem pelo ID.
app.delete('/Mensagens/:id', (req, res) => {
    const id = req.params.id -1;
    delete Mensagens [id];
    res.send('Mensagem removida com sucesso!!'); 
})

app.listen(3000, function() {
    console.info('App rodando em http://localhost:3000')
});