export default function autenticar(requisicao, resposta){
    const usuario = requisicao.body.usuario
    const senha   = requisicao.body.senha
    if(usuario == 'admin' && senha == 'admin'){
        requisicao.session.autenticado = true;
        //usuario autenticado
        resposta.redirect('/paginainicial.html')
    }
    else
    {
        resposta.write('<html>');
        resposta.write('<head>');
        resposta.write('<title>Falha no login</title>');
        resposta.write('<meta charset="utf-8">');
        resposta.write('<body>');
        resposta.write('<p>Usuário ou senha inválidos</p>');
        resposta.write('<a href="/login.html">Voltar para tela de login</a>');
        resposta.write('<body>');
        resposta.write('<html>');
        resposta.end();
    }
}

export function verificarAutenticacao(requisicao, resposta, executarProximoPasso){
    //HTTP ser um protocolo stateless, ou seja, o servidor não sabe quem é o usuario e quais informações ele tem
    //será preciso fazer uso do conceito de sessão para dar ao servidor capacidade de memorizar com quem ele esta conversando.
     if (requisicao.session.autenticado != undefined && requisicao.session.autenticado == true) {
        executarProximoPasso();
     }
     else
     {
        resposta.redirect('/login.html');
     }
}