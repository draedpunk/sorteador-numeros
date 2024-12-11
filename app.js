function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    if (de >= ate){
        alert("Certifique-se de que o número no campo inicial (Do número...) seja MENOR que o número no campo final (Até o numero...)")
        throw new Error("Número do primeiro campo maior que o número no segundo campo. Execução interrompida.");
        // também poderia ser utilizado o return; vazio
    }
    
    if (quantidade > ate) {
        alert("Certifique-se de que a quantidade de números sorteados seja menor que os números do intervalo");
        throw new Error("Quantidade de números sorteados possíveis maior o intervalo inserido. Execução interrompida.");
    } else {
        for (let i = 0; i < quantidade; i++){
            numero = obterNumeroAleatorio(de, ate);
    
            // se for true, o loop vai rodar até um numero nao repetido sair
            while (sorteados.includes(numero)){ 
                numero = obterNumeroAleatorio(de, ate);
            }
    
            sorteados.push(numero);
    
        }
    
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
        alterarEstadoBotao();
    
        function obterNumeroAleatorio(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
                
        }
    }
}

// altera APENAS a cor do botao "reiniciar"
function alterarEstadoBotao(){
    let botao = document.getElementById("btn-reiniciar");
    // se ele estiver CINZA, entra no if e isso sera removido para adicionar a cor normal (azul)
    if (botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else { // aqui faz o contrario: vai remover o azul e botar cinza
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }

}

// vai limpar todos os campos 
function reiniciar(){
    // pegao valor e substitui por uma string vazia
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    // recebe o texto original
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarEstadoBotao();
}

//Projeto final OK!!!