// Exercicio 1 - Lista de Compras

function exercicio01() {
    const item1 = prompt("Digite um item de compra: ")
    const item2 = prompt("Digite um item de compra: ")
    const item3 = prompt("Digite um item de compra: ")
    const item4 = prompt("Digite um item de compra: ")
    const item5 = prompt("Digite um item de compra: ")

    const arrayCompras = [item1, item2, item3, item4, item5]
    console.log(arrayCompras);

    alert('Lista final de compras: ' + arrayCompras);

    const removerItem = prompt("Deseja remover um item? sim ou nao")
    console.log(removerItem);

    if (removerItem.toLowerCase() === "sim") {
        const produto = prompt("Qual item você quer remover?")
        console.log(produto);
        const temOproduto = arrayCompras.includes(produto)
        console.log(temOproduto);

        if (temOproduto === true) {
            const listaAtualizada = arrayCompras.filter(item => item !== produto)
            console.log(listaAtualizada);

            alert('Sua lista ficou assim sem o elemento retirado: ' + listaAtualizada)
        }
    } else {
        alert('Sua lista final de compras ficou assim: ' + arrayCompras)
    }
}

exercicio01()


//Exercicio 2 - Cadastro de Contato


function exercicio02() {
    const nome = prompt("Digite seu nome: ")
    const tel = prompt("Digite seu número: ")
    const email = prompt("Digite seu email: ")

    const cadastro = {
        nome: nome,
        tel: tel,
        email: email
    }

    alert(`
    nome: ${cadastro.nome}
    tel: ${cadastro.tel}
    email: ${cadastro.email}
    `)

    const mudanca = prompt("Deseja alterar telefone ou email? Digite tel ou email:")

    if (mudanca === "tel") {
        const atualizacaonumero = prompt("digite seu numero")
        cadastro.tel = atualizacaonumero
    } else if (mudanca === "email") {
        const atualizacaoemail = prompt("digite seu email")
        cadastro.email = atualizacaoemail
    } else {
        alert("Opção inválida! Nenhum dado alterado!")
    }

    alert(`
    nome: ${cadastro.nome}
    tel: ${cadastro.tel}
    email: ${cadastro.email}
    `)
}

exercicio02()


//Exercicio 3 - Filtrar Adultos


function exercicio03() {
    const idade1 = Number(prompt("Digite a primeria idade:"));
    const idade2 = Number(prompt("Digite a segunda idade:"));
    const idade3 = Number(prompt("Digite a terceira idade:"));
    const idade4 = Number(prompt("Digite a quarta idade:"));
    const idade5 = Number(prompt("Digite a quinta idade:"));

    const array = [
        idade1,
        idade2,
        idade3,
        idade4,
        idade5
    ]

    alert(`Essas são as idades digitadas: ${array}`)
    // filtro que separa apenas os +18
    const maiores18 = array.filter(idade => idade > 18)
    alert(`Os maiores de 18 anos são: ${maiores18}`)
    // filtro que separa os menores 18
    const menores18 = array.filter(idade => idade < 18)
    // quantidade maior e menor de idade
    alert(`A quantidade de pessoas maiores de idade é: ${maiores18.length} (${maiores18}) e as menores de idade são: ${menores18.length} (${menores18})`)
}

exercicio03()


// Exercicio 4 - Calculadora de Preço


function exercicio04() {

    const preco1 = Number(prompt("digite o primeiro valor"))
    const preco2 = Number(prompt("digite o segundo valor"))
    const preco3 = Number(prompt("digite o terceiro valor"))
    const preco4 = Number(prompt("digite o quarto valor"))

    const Array = [preco1, preco2, preco3, preco4]
    const soma = Array.reduce((acc, val) => acc + val, 0);
    const media = soma / Array.length
    alert(`a soma dos valores é: ${soma} e a media é: ${media}`)
    const maior = Math.max(...Array);

    const novoArray = Array.filter(num => num !== maior);

    const maior1 = novoArray.reduce((acc, val) => acc + val, 0);
    const media2 = maior1 / novoArray.length
    alert(`a soma dos valores é: ${maior1} e a media é: ${media2}`)

}

exercicio04()


// Exercicio 5 - Inventário Simples

function exercicio05() {
    const nome = prompt("Digite o nome do produto:");
    const quantidade = Number(prompt("Digite a quantidade inicial:"));

    const produto = {
        nome: nome,
        quantidade: quantidade
    };

    if (produto.quantidade > 0) {
        alert("Produto em estoque.");
    } else {
        alert("Produto fora de estoque.");
    }
    const opcao = prompt("Digite 'repor' para adicionar ou 'retirar' para diminuir:");
    if (opcao.toLowerCase() === "repor") {
        const valor = Number(prompt("Quanto deseja adicionar?"));
        produto.quantidade += valor;
    } else if (opcao.toLowerCase() === "retirar") {
        const valor = Number(prompt("Quanto deseja retirar?"));
        produto.quantidade -= valor;
    } else {
        alert("Opção inválida.");
    }

    alert(`Produto: ${produto.nome} Quantidade atual: ${produto.quantidade} Status: ${produto.quantidade > 0 ? "Em estoque" : "Fora de estoque"}`);

}

exercicio05()

// Exercicio 6 - Buscar Usuário

function exercicio06() {
    const tarefas = [];

    for (let i = 0; i < 3; i++) {
        const texto = prompt(`Digite a tarefa ${i + 1}:`);
        tarefas.push({ texto: texto, feita: false });
    }

    console.log("Lista inicial:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index} - ${tarefa.texto} | Feita: ${tarefa.feita}`);
    });

    const indiceFeita = Number(prompt("Digite o índice da tarefa para marcar como feita:"));

    if ((indiceFeita) && tarefas[indiceFeita]) {
        tarefas[indiceFeita].feita = true;
    }

    const indiceRemover = Number(prompt("Digite o índice da tarefa para remover:"));

    if (!isNaN(indiceRemover) && tarefas[indiceRemover]) {
        tarefas.splice(indiceRemover, 1);
    }

    console.log("Lista final:");
    tarefas.forEach((tarefa, index) => {
        console.log(`${index} - ${tarefa.texto} | Feita: ${tarefa.feita}`);
    });

    const concluidas = tarefas.filter(tarefa => tarefa.feita).length;

    alert(`Total de tarefas concluídas: ${concluidas}`);
}

exercicio06()

// Exercicio 7 - Marcar Tarefas

function exercicio07() {

    const usuarios = [
        { nome: "Ana", email: "ana@email.com" },
        { nome: "Carlos", email: "carlos@email.com" },
        { nome: "Marina", email: "marina@email.com" }
    ];

    const emailBusca = prompt("Digite o email para buscar:");
    const usuarioEncontrado = usuarios.find(
        usuario => usuario.email === emailBusca
    );
    if (usuarioEncontrado) {
        alert(`Usuário encontrado: ${usuarioEncontrado.nome}`);
        const remover = prompt("Deseja remover esse usuário? (sim/nao)");
        if (remover.toLowerCase() === "sim") {
            const novaLista = usuarios.filter(
                usuario => usuario.email !== emailBusca);
            alert("Usuário removido!");
            console.log("Lista atualizada:", novaLista);
        }
    } else {
        alert("Não encontrado.");
    }
}

exercicio07()

// Exercicio 8 - Contagem por Categoria 

function exercicio08() {
    const itens = [];

    for (let i = 0; i < 6; i++) {
        const nome = prompt(`Digite o nome do item ${i + 1}:`);
        const categoria = prompt(`Digite a categoria do item ${i + 1}:`);
        itens.push({ nome: nome, categoria: categoria });
    }

    function contarCategorias(lista) {
        const contador = {};

        lista.forEach(item => {
            if (contador[item.categoria]) {
                contador[item.categoria]++;
            } else {
                contador[item.categoria] = 1;
            }
        });

        return contador;
    }

    let contagem = contarCategorias(itens);
    console.log("Contagem inicial:", contagem);
    const categoriaRemover = prompt("Digite a categoria que deseja remover:");
    const novaLista = itens.filter(
        item => item.categoria !== categoriaRemover
    );

    contagem = contarCategorias(novaLista);
    console.log("Lista atualizada:", novaLista);
    console.log("Contagem final:", contagem);
}

exercicio08()


// Exercicio 9 - Ranking de Pontuação

function exercicio09() {
    const jogadores = [];

    for (let i = 0; i < 4; i++) {
        const nome = prompt(`Digite o nome do jogador ${i + 1}:`);
        const pontos = Number(prompt(`Digite a pontuação de ${nome}:`));
        jogadores.push({ nome: nome, pontos: pontos });
    }

    function encontrarMaior(lista) {
        let maior = lista[0];
        lista.forEach(jogador => {
            if (jogador.pontos > maior.pontos) {
                maior = jogador;
            }
        });
        return maior;
    }

    let vencedor = encontrarMaior(jogadores);
    alert(`Maior pontuador: ${vencedor.nome} com ${vencedor.pontos} pontos.`);
    const atualizar = prompt("Deseja atualizar a pontuação de alguém? (sim/nao)");
    if (atualizar.toLowerCase() === "sim") {
        const nomeAtualizar = prompt("Digite o nome do jogador:");
        const novoValor = Number(prompt("Digite a nova pontuação:"));
        const jogadorEncontrado = jogadores.find(
            jogador => jogador.nome === nomeAtualizar
        );
        if (jogadorEncontrado) {
            jogadorEncontrado.pontos = novoValor;
            alert("Pontuação atualizada!");
            vencedor = encontrarMaior(jogadores);
            alert(`Novo maior pontuador: ${vencedor.nome} com ${vencedor.pontos} pontos.`);
        } else {
            alert("Jogador não encontrado.");
        }
    }
}

exercicio09()

// Exercicio 10 - Carrinho Simples

function exercicio10() {
    const carrinho = [];

    for (let i = 0; i < 5; i++) {
        const nome = prompt(`Digite o nome do produto ${i + 1} (ou deixe vazio para parar):`);
        if (!nome) break;
        const preco = Number(prompt(`Digite o preço de ${nome}:`));
        carrinho.push({ nome: nome, preco: preco });
    }

    function calcularTotal(lista) {
        let total = 0;
        lista.forEach(produto => {
            total += produto.preco;
        });
        return total;
    }

    let total = calcularTotal(carrinho);

    function mostrarResumo(totalAtual) {
        if (totalAtual > 100) {
            alert(`Total: R$ ${totalAtual.toFixed(2)}\nFrete grátis!`);
        } else {
            alert(`Total: R$ ${totalAtual.toFixed(2)}\nFrete: R$ 10.00`);
        }
    }

    mostrarResumo(total);

    const removerNome = prompt("Digite o nome do produto que deseja remover:");
    const novaLista = carrinho.filter(produto => produto.nome !== removerNome);

    total = calcularTotal(novaLista);
    alert("Produto removido (se existia).");
    mostrarResumo(total);

}

exercicio10()
