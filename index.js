// é preciso usar recursos já prontos que impeçam a reinvençao da roda.
import express from 'express';

const host = '0.0.0.0'; // todas as interfaces de rede disponiveis
//em um computador há diversos programas sendo executados
// cada programa é identificado por um número, esse numero é a porta
const porta = 3000;
const app = express();

app.use(express.static('./publico'));

//listen = escutar por requisições do usuários
app.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
});
