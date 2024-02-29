const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = []
getBuscarLivrosAPI()

const elementoInserirLivros = document.querySelector('#livros')
const elementoComValorTotalDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')

async function getBuscarLivrosAPI() {
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosTela(livrosComDesconto)
}
