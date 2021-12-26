# Teste Realizado Telzir FaleMais
## Passos Primeiro: Database
- Primeiro precisa criar uma database no banco mysql com nome telzir.
- Segundo precisa configurar o arquivo database na pasta do Backend/src/app/database para fazer a conexão do banco de dados
- Terceiro se quiser pode criar as tabelas manualmente no banco de dados ou startar a api com os passos segundo como na descrição abaixo e testar em uma ferramenta dando GET /code e GET /plan para as tabelas serem criadas no banco mysql.
- Quarto, depois dos passos acima, inserir as informações nas tabelas do banco mysql que se encontra no diretorio principal arquivo: sql_comandos_insercao.txt

## Passos Segundo: executar o projeto back-end

Depois de configurado o banco, ai tara pronto para executar o backend da aplicação:
- Primeiro abra a pasta Backend pelo terminal e execute o comando "yarn" para baixar as
dependências do node_modules. Depois execute "yarn dev"

## Passos Testes API: executar os testes com Jest do back-end

Para executar os testes do back-end da api:

- Primeiro precisa levantar o serviço da api executando o comando "yarn dev"
para que os testes depois funcione. 
- Depois abra a pasta Backend pelo terminal e execute o comando "yarn test"

## Passos Terceiro: executar o projeto front-end
Para rodar o frontend: 
- Abra a pasta Frontend pelo terminal e execute "yarn" para baixar as
dependências do node_modules. Depois execute "yarn start"

## Tentado a Implementação com swagger para documentar
Implementei o swagger nesta api, porém não tive sucesso ao rendorizar corretamente porque a api do swagger esta tendo falha com as versoes, tentei fazer várias pesquisas para achar uma solução, porém nada concreto.
- Link da url local json swagger: http://localhost:5000/swagger.json
- Link da url local html swagger: http://localhost:5000/index.html
