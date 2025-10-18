//função conjunto de instruções//
//função principal de validação vai ser chamada pelo evento oninput do HTML//
function validarFormulario() {

    //Passo1: capturar os elementos do DOM (tela)
    //cria uma variavel chamada emailInput, acessa o documento .html e "pega" o elemento pelo id email.
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarInput = document.getElementById('confirmarSenha');
    const mensagemErro = document.getElementById('mensagemErro');
    const mensagemSenha = document.getElementById('mensagemErroSenha');
    const mensagemConfirmar = document.getElementById('mensagemErroConfirmacao');
    const btnEnviar = document.getElementById('btnEnviar');

    //Passo 2: verificar o valor a ser validado
    const email = emailInput.value.trim(); //.trim () remove o espaço em branco
    const senha = senhaInput.value;
    const confirmarSenha = confirmarInput.value;

    //validação para verificar o formato de emial está correto (@email.com)
    //regex -> expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //beatriz.portela@docente.senai.br//
    let isValido = false;
     //todo endereço de email que for digitado, vai ser invalido ate que a validação acuse que ele é valido



    //Passo 3: Aplicar as regras de validação
    if (email == "") {
        //campo vazio não é um erro, mas também não é válido pra continuar
        mensagemErro.textContent = "Digite seu e-mail para continuar.";
        // limpar as classes de sucesso/erro
        mensagemErro.className = "mensagem-Status";
        isValido = false;
    } else if (emailRegex.test(email)) {
        //email valido
        mensagemErro.textContent = "E-mail válido";
        mensagemErro.className = 'mensagem-Status sucesso';
        isValido = true;
    } else {
        mensagemErro.textContent = "E-mail inválido";
        mensagemErro.className = 'mensagem-Status erro';
        isValido = false;
    }

    //------------SENHA-----------//
    if (senha.length <= 6){
        mensagemSenha.textContent = "A senha deve ter no mínimo 6 caracteres.";
        mensagemSenha.className = 'mensagem-Status erro';
        valido = false;
    } else {
        mensagemSenha.textContent = "Senha Válida";
        mensagemSenha.className = 'mensagem-Status sucesso';
    }
    //-------------Validação-------------//
    if(senha !== confirmarSenha) {
        mensagemConfirmar.textContent = "As senhas devem coincidir";
        mensagemConfirmar.className = 'mensagem-Status erro';
        valido = false;
    }else if (confirmarSenha !== "") {
        mensagemConfirmar.textContent = "Senhas Coincididas";
        mensagemConfirmar.className = 'mensagem-Status sucesso';
    } else {
        mensagemConfirmar.textContent = "";
    }





    //Interação com a tela: habilitar ou desabilitar o botão enviar
    btnEnviar.disabled = !isValido;

    //Passo 4: Fazer o envio do formulário e exibir um alerta de sucesso
    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // se o botão enviar estiver habilitado, significa que a validação passou
        if (!document.getElementById('btnEnviar').disabled) {
            alert('cadastro enviado com sucesso: ' + document.getElementById('email').value);
            //é aqui que fariamos uma chama para um api, por exemplo
        }
    });
}

  validarFormulario();