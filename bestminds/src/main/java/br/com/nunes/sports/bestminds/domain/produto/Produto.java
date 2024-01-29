package br.com.nunes.sports.bestminds.domain.produto;


import br.com.nunes.sports.bestminds.domain.produto.DadosAtualizarProduto;
import br.com.nunes.sports.bestminds.domain.produto.DadosNovoProduto;
import jakarta.persistence.*;
import lombok.*;

@Table(name = "produtos")
@Entity(name = "Produto")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Produto {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    private String descricao;

    private Double valor;

    public Produto (DadosNovoProduto dados) {
        this.titulo = dados.titulo();
        this.descricao = dados.descricao();
        this.valor = dados.valor();

    }

    public void atualizarProduto(DadosAtualizarProduto dados) {
        if (dados.titulo() != null) {
            this.titulo = dados.titulo();
        }
        if (dados.descricao() != null) {
            this.descricao = dados.descricao();
        }
        if (dados.valor() != null) {
            this.valor = dados.valor();
        }
    }

}
