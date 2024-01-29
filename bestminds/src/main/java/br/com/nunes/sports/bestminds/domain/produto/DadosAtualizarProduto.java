package br.com.nunes.sports.bestminds.domain.produto;

import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record DadosAtualizarProduto (
    @NotNull
    Long id,
    String titulo,
    String descricao,
    Double valor)
{
}
