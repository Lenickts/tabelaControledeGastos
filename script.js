const matrizGastos =[
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0],
]


//Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0 ;
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = "";
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');
function limparGastos() {
    matrizGastos.forEach((item) => item[1] = 0); // Zera todos os valores
    atualizarInterface(); // Atualiza a tela
    limparCampos(); // Limpa o input
}

//Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value);
const obterCategoriaInformada = () => obterElemento('categoria').value;

//Obter categoria da Matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);


//Atualizar valor da categoria/matriz
    const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

    const atualizarInterface = () =>{
        matrizGastos.forEach(([nome, valor])=>{
            const elemento = obterElemento(nome);
            elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
        })
    }


//Principal
function adicionarGasto(){
    
    // 1. Obter o valor como texto bruto do campo
    var valorCampo = obterElemento('valor').value;

    // 2. Remover espaços em branco
    var valorCampoLimpo = valorCampo.trim();

    // 3. Converter o valor limpo para número
    var valorInformado = parseFloat(valorCampoLimpo);

    // 4. Obter a categoria selecionada
    var categoriaInformada = obterCategoriaInformada();

    // 5. Verificar se o valor é vazio, nulo ou não numérico
    if (valorCampoLimpo === "" || isNaN(valorInformado)) {
        alert("Por favor, insira um valor numérico válido.");
        return;
    }

    // 6. Verificar se o valor é negativo
    if (valorNegativo(valorInformado)) {
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }

    // 7. Obter as referências na matriz
    var categoria = obterCategoria(matrizGastos, categoriaInformada);
    var total = obterCategoria(matrizGastos, "Total");

    // 8. Atualizar valores da categoria e do total
    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);

    // 9. Atualizar a interface e limpar os campos
    atualizarInterface();
    limparCampos();
}







/*
1.Pegar o valor informado
2.pegar a categoria
3. impedir números negativos
4. de acordo com a categoria, atualize o valor
    4.1 criar variaveis para controlar ou armazenar os valores de cada uma das categorias
5. atualizar interface
6. limpar campos
*/