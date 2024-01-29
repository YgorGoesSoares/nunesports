package br.com.nunes.sports.bestminds.domain.produto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;


public record DadosNovoProduto(

    @NotBlank
    String titulo,
    @NotBlank
    String descricao,
    @NotNull
    Double valor
) {

}
