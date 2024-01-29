document.getElementById('produtoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    // Verificar se o produto já existe antes de adicionar
    fetch('/produtos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData => {
            // Se a resposta tiver uma estrutura diferente, ajuste esta parte de acordo
            const produtos = responseData.content || responseData;

            const produtoExistente = produtos.some(produto => produto.titulo === titulo && produto.descricao === descricao && produto.valor === valor);

            if (produtoExistente) {
                alert('Produto já existe na lista!');
            } else {
                // Adicionar o produto apenas se não existir na lista
                adicionarNovoProduto(titulo, descricao, valor);
            }
        })
        .catch(error => {
            alert(`Erro ao verificar produtos: ${error.message}`);
        });
});

function adicionarNovoProduto(titulo, descricao, valor) {

    fetch('/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titulo, descricao, valor }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        alert('Produto adicionado com sucesso!');
        limparFormulario();
    })
    .catch(error => {
        alert(`Erro ao adicionar produto: ${error.message}`);
    });
}

function limparFormulario() {
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}
