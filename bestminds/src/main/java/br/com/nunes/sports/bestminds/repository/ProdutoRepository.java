package br.com.nunes.sports.bestminds.repository;

import br.com.nunes.sports.bestminds.domain.produto.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
