package br.com.nunes.sports.bestminds;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Locale;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "API de Produtos", version = "1", description = "API desenvolvida para teste técnico da vaga de Trainee, BestMinds."))
public class BestmindsApplication {

	public static void main(String[] args) {

		Locale.setDefault(Locale.US);
		SpringApplication.run(BestmindsApplication.class, args);
	}

}
