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
    const valorInformado = obterValorInformado();
    const categoriaInformada = obterCategoriaInformada();

    if(valorNegativo(valorInformado)){
        alert("Valor inválido. O valor não pode ser negativo.");
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, "Total");
    
    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
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