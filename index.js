// é preciso usar recursos já prontos que impeçam a reinvençao da roda.
import express from 'express';
import autenticar from './segurança/autenticar.js';
import { verificarAutenticacao } from './segurança/autenticar.js';
import session from 'express-session';

const host = '0.0.0.0'; // todas as interfaces de rede disponiveis
//em um computador há diversos programas sendo executados
// cada programa é identificado por um número, esse numero é a porta
const porta = 3000;
const app = express();

// a biblioteca qs será utilizada para tratar os parâmetros da requisição
app.use(express.urlencoded({ extended: true }));

//aqui esta sendo configurado o uso da biblioteca session
app.use(session({
    secret: 'segredo', //chave criptografia
    resave: true,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 15
    }
}));

app.use(express.static('./publico'));


//endpoint http://localhost:3000/login
app.get('/login',(requisicao, resposta) => {
    resposta.redirect('/login.html');
});

app.post('/login', autenticar);

app.use(verificarAutenticacao, express.static('./privado')); 

//listen = escutar por requisições do usuários
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});
