$(document).ready(function () {
    // Carregar a lista de produtos ao carregar a página
    carregarProdutos();

    // Submeter o formulário ao adicionar ou editar um produto
    $("#produtoForm").submit(function (event) {
        event.preventDefault();

        let produtoId = $("#produtoId").val();
        let url = produtoId ? `/produtos/${produtoId}` : '/produtos';

        $.ajax({
            type: produtoId ? 'PUT' : 'POST',
            url: url,
            contentType: 'application/json',
            data: JSON.stringify({
                titulo: $("#titulo").val(),
                descricao: $("#descricao").val(),
                valor: parseFloat($("#valor").val())
            }),
            success: function () {
                carregarProdutos();
                limparFormulario();
            },
            error: function (error) {
                console.log("Erro ao adicionar/editar produto:", error);
            }
        });
    });

    // Adicionar a função para excluir um produto
    $("#tableBody").on("click", ".btn-excluir", function () {
        let produtoId = $(this).data("id");
        excluirProduto(produtoId);
    });
});

function excluirProduto(id) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
        fetch(`/produtos/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            alert("Produto excluído com sucesso!");
            window.location.reload();
        })
        .catch(error => {
            console.error(`Erro ao excluir produto: ${error.message}`);
        });
    }
}

// Função para carregar a lista de produtos usando fetch
function carregarProdutos() {
    fetch('/produtos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Resposta da API:", data); // Adiciona esta linha para visualizar a resposta

            // Verifica se 'data.content' é um array antes de atualizar a tabela
            if (data && data.content && Array.isArray(data.content)) {
                atualizarTabela(data.content);
            } else {
                console.error(`Erro ao carregar produtos: A resposta da API não contém um array válido.`);
            }
        })
        .catch(error => {
            console.error(`Erro ao carregar produtos: ${error.message}`);
        });
}

function atualizarTabela(produtos) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""; // Limpar a tabela antes de adicionar os novos dados

    produtos.forEach(produto => {
        tableBody.innerHTML += `
            <tr>
                <td>${produto.id}</td>
                <td>${produto.titulo}</td>
                <td>${produto.descricao}</td>
                <td>${produto.valor}</td>
                <td>
                   <button onclick="editarProduto(${produto.id}, '${produto.titulo}', '${produto.descricao}', ${produto.valor})">Editar</button>
                   <button data-id="${produto.id}" class="btn-excluir">Excluir</button>
                </td>
            </tr>
        `;
    });
}

function editarProduto(id, titulo, descricao, valor) {
    // Armazenar os dados no localStorage
    localStorage.setItem('produtoEditarId', id);
    localStorage.setItem('produtoEditarTitulo', titulo);
    localStorage.setItem('produtoEditarDescricao', descricao);
    localStorage.setItem('produtoEditarValor', valor);

    // Redirecionar para a página de edição
    window.location.href = '/editarProduto.html';
}
