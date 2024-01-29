package br.com.nunes.sports.bestminds.domain.produto;


public record DadosDetalhadosProduto(
        Long id,
        String titulo,
        String descricao,
        Double valor
) {

    public DadosDetalhadosProduto (Produto produto) {
        this(produto.getId(), produto.getTitulo(), produto.getDescricao(), produto.getValor());
    }
}
