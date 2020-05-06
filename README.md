# Registro de pessoas.
Projeto, contendo um cadastro simples na tecnologia Angular8 e Spring Boot

1. entre no diretório da aplicação
2. no diretório "backend" execute o seguinte comando:
   ./mvnw spring-boot:run
3. no diretório "frontend" :

	Instale o node.js versão 12.X ->> https://nodejs.org/en/
4. Execut os seguinetes comandos:
	npm install
	
	e -- npm start --- para rodar a aplicação
5. Após executar o backend, deve-se parar e ir na pasta:

		\backend\src\main\resources\db\migration
	
	e executa o script sql: V0_CreatingBD.sql 
				V2 FillingTables.sql
				** As tabelas devem ser criadas automaticamente ao executar o servidor.
	
	Obs.: Usar postgres 12.
	
5.1. Instalar o maven 3.6.3 e executar o comando: 
	
	mvn spring-boot:run -Dspring-boot.run.profiles=prod

6. Conclusão
	Resumidamente, podese-se executar o projeto, na pasta frontend executar "npm start" e no backend executar "mvn spring-boot:run -Dspring-boot.run.profiles=prod"
	
*Projeto implementado com as ides Intellij e WebStorm



	
