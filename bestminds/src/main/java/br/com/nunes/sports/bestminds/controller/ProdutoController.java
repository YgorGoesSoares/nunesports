package br.com.nunes.sports.bestminds.controller;

import br.com.nunes.sports.bestminds.domain.produto.*;
import br.com.nunes.sports.bestminds.repository.ProdutoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity cadastrarProduto(@RequestBody @Valid DadosNovoProduto dados, UriComponentsBuilder uriBuilder) {
        var produto = new Produto(dados);
        repository.save(produto);

        var uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produto.getId()).toUri();

        return ResponseEntity.created(uri).body(new DadosDetalhadosProduto(produto));
    }

    @GetMapping
    public ResponseEntity<Page<DadosDetalhadosProduto>> listar(@PageableDefault(size = 100) Pageable paginacao) {
        var page = repository.findAll(paginacao).map(DadosDetalhadosProduto::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity editarProduto(@RequestBody @Valid DadosAtualizarProduto dados) {
        var produto = repository.getReferenceById(dados.id());
        produto.atualizarProduto(dados);

        return ResponseEntity.ok(new DadosDetalhadosProduto(produto));
    }

    @PutMapping("{id}")
    @Transactional
    public ResponseEntity editarProduto(@PathVariable Long id, @RequestBody @Valid DadosAtualizarProduto dados) {
        if (repository.existsById(id)) {
            var produto = repository.getReferenceById(id);
            produto.atualizarProduto(dados);
            return ResponseEntity.ok(new DadosDetalhadosProduto(produto));
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("{id}")
    public ResponseEntity<Void> deletarProduto(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping
    public ResponseEntity<Void> deletarProduto(@RequestBody @Valid DadosDeletarProduto dados) {
        if (repository.existsById(dados.id())) {
            repository.deleteById(dados.id());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}