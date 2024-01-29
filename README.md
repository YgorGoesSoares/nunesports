# Projeto Teste Técnico Everyminds - Nunes Sports

Este projeto é um teste técnico para a Everyminds que implementa as 4 operações do CRUD. Utiliza HTML, CSS, JavaScript e Bootstrap no front-end, e Java com Spring Boot no back-end, utilizando MySQL, JPA, Hibernate, e Flyway.

## Documentação da API

A documentação da API está disponível em [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html) e pode ser acessada após a execução do projeto.

## Como Executar o Projeto

1. Clone o Repositório

Execute o seguinte comando em seu Git: 
gh repo clone YgorGoesSoares/nunesports

2. Crie a Base de Dados

É preciso que faça a criação da base de dados antes da execução do projeto. Execute o seguinte comando SQL em seu prompt:
mysql -u seu-usuario -p -e "CREATE DATABASE IF NOT EXISTS bestminds_api;"

4. Configure os Dados do Banco

Abra o arquivo de configurações em src/main/resources/application.properties e altere os campos spring.datasource.username e spring.datasource.password para os dados do seu banco de dados MySQL.

5. Execute o Projeto

Aberto o projeto na IDE de sua preferência, execute o arquivo BestmindsApplication.java (src/main/java/br/com/nunes/sports/bestminds/BestmindsApplication.java)

O projeto ficará disponível em http://localhost:8080.

## Contato
Para qualquer dúvida ou mais informações, entre em contato por e-mail: ygorgoes@outlook.com.

## Autor
Feito por Ygor Goes.
