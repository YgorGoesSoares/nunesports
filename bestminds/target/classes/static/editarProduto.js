document.addEventListener('DOMContentLoaded', function () {
    // Recuperar os dados do localStorage
    var id = localStorage.getItem('produtoEditarId');
    var titulo = localStorage.getItem('produtoEditarTitulo');
    var descricao = localStorage.getItem('produtoEditarDescricao');
    var valor = localStorage.getItem('produtoEditarValor');

    // Preencher os campos com os dados recuperados
    document.getElementById('id').value = id;
    document.getElementById('titulo').value = titulo;
    document.getElementById('descricao').value = descricao;
    document.getElementById('valor').value = valor;

    // Limpar os dados do localStorage após o uso
    localStorage.removeItem('produtoEditarId');
    localStorage.removeItem('produtoEditarTitulo');
    localStorage.removeItem('produtoEditarDescricao');
    localStorage.removeItem('produtoEditarValor');

     // Função para enviar a requisição PUT ao clicar em "Salvar Alterações"
        window.salvarAlteracoes = function () {
            // Recuperar os valores dos campos
            var id = document.getElementById('id').value;
            var titulo = document.getElementById('titulo').value;
            var descricao = document.getElementById('descricao').value;
            var valor = document.getElementById('valor').value;

            // Construir o objeto JSON com os dados
            var dadosProduto = {
                id: parseInt(id),
                titulo: titulo,
                descricao: descricao,
                valor: parseFloat(valor)
            };

            // Enviar a requisição PUT

            fetch(`/produtos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosProduto)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Exibir mensagem de alterações efetuadas
                alert("Alterações efetuadas com sucesso!");

                // Redirecionar para a página inicial
                window.location.href = "/index.html";
            })
            .catch(error => {
                console.error(`Erro ao salvar alterações: ${error.message}`);
            });
      };
});
