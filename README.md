# Dac-Roteiro01

# Atividade

1. Execute e explique a execução dos seguintes comandos: <br/>
      a. docker container run tomcat <br/>
      b. docker container ls <br/>
      c. docker image ls <br/>

2. No arquivo README.md, inclua uma seção com um resumo das principais vantagens do uso de containers. <br/>

3. No arquivo README.md, inclua uma seção com as principais dificuldades que você enfrentou para concluir este roteiro.<br/>

      
## Respostas
1. Primeira questão:<br/>
      a. O docker irá baixar a image do tomcat e rodar o container tendo como base a imagem; <br/>
      b. O docker irá listar todos os container que estão em execução; <br/>
      c. O docker irá listar todas as imagens criadas e instaladas; <br/>

2. Segunda questão:
      * Economia de recursos;
      * Maior disponibilidade do sistema;
      * Compartilhamento;
      * Acesso à comunidade;
      
3 . Terceira questão:

    Minha maior dificuldade nessa atividade foi em entender como funcionar 
    a criação de uma imagem personalizada com docker e como criar um container com base 
    na imagem personalizada.
    
# Como criar as imagens

## Imagem para o backend

1. Entre na pasta `dac-exercicio1` para primeiro construir a imagem do backend;
2. Execute o comando `sudo docker build -t nome-da-imagem .`;
3. Pronto, sua imagem vai ser criada;

## Imagem para o frontend

1. Entre na pasta `dac-exercicio1-frontend` para construir a imagem do frontend;
2. Execute o comando `sudo docker build -t nome-da-imagem .`;
3. Pronto, sua imagem vai ser criada;

# Como criar os containers

## Container para o backend

1. Entre na pasta `dac-exercicio1` para construir o container;
2. Execute o comando `sudo docker container run -p 8080:8080 --name nome-do-container nome-da-imagem-criada `;
3. Pronto, seu container do backend já vai estar rodando;

## Container para o frontend

1. Entre na pasta `dac-exercicio1-frontend` para construir o container;
2. Execute o comando `sudo docker container run -p 3000:3000 --name nome-do-container nome-da-imagem-criada `;
3. Pronto, seu container do backend já vai estar rodando;
