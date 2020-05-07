# Registro de pessoas.
Projeto, contendo um cadastro simples na tecnologia Angular8 e Spring Boot
**Pode baixar o app ou fazer um git clone. **

1. entre no diretório da aplicação
2. no diretório "backend" execute os scripts sql na pasta:

		\backend\src\main\resources\db\migration
	
			V0_CreatingBD.sql 
			V2 FillingTables.sql
			
				
	Obs.: Usar postgres 12.
2.1 - Executar o servidor, para isso:
   Instalar o maven 3.6.3 e executar o comando: 
	
	mvn spring-boot:run -Dspring-boot.run.profiles=prod
	
	Obs.: a aplicação deve está rodando na porta 9001, logo endereço: localhost:9001
	
3. no diretório "frontend" :

	Instale o node.js versão 12.X ->> https://nodejs.org/en/
4. Execut os seguinetes comandos:
	Instalar node 12, e executar o comando npm install.
	para executar a app :
		npm start
	Obs: Aplicação rodando no endereço, localhost:4200

6. Conclusão
	Resumidamente, podese-se executar o projeto, na pasta frontend executar "npm start" e no backend executar "mvn spring-boot:run -Dspring-boot.run.profiles=prod"
	
*Projeto implementado com as ides Intellij e WebStorm



	
