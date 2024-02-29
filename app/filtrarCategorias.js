const botoesCategorias = document.querySelectorAll('.btn')
botoesCategorias.forEach(botao => {
    botao.addEventListener('click', filtrarLivros)
});


function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    elementoInserirLivros.innerHTML = ''
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''

    if(elementoBtn.id == 'btnLivrosDisponiveis') {
        let livrosDisponiveis = [...livros]
        livrosDisponiveis = livrosDisponiveis.filter(livro => livro.quantidade > 0)      
        exibirLivrosTela(livrosDisponiveis)
        valorLivrosDisponiveis(livrosDisponiveis)
        return
    }

    if(elementoBtn.id == 'btnOrdenarPorPreco') {
        const listaOrdenada = [...livros]
        let ordenadoPorPreco = listaOrdenada.sort(function(a,b) {
            return a.preco - b.preco
        })
        console.log(livros)
        exibirLivrosTela(ordenadoPorPreco)
        return
    }

    const categoria = elementoBtn.value
    const livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivrosTela(livrosFiltrados)
}

function exibirMensagemTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}

function valorLivrosDisponiveis(listaLivrosDisponiveis) {
    const valorTotal = listaLivrosDisponiveis.reduce((acc, livro) => (acc + livro.preco), 0)
    console.log(valorTotal)
    exibirMensagemTela(valorTotal)
}