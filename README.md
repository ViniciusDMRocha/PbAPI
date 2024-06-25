<h1 align="center">Api For Image Compression</h1>

<!-- Índice -->
<details>
  <summary>Índice</summary>
  <ol>
    <li><a href="#ferramentas-utilizadas">Ferramentas Utilizadas</a></li>
    <li><a href="#introdução">Introdução</a></li>
    </li>
    <li>
      <a href="#funcionamento">Funcionamento</a>
      <ul>
        <li><a href="#pré-requisitos">Pré requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
        <li><a href="#rodando-o-projeto">Rodando o projeto</a></li>
      </ul>
    </li>
    <li><a href="#explicação-do-projeto">Explicação do projeto</a></li>
  </ol>
</details>

## Ferramentas Utilizadas

-   [NodeJS](https://nodejs.org/en/download/releases/)
-   [Mongoose](https://mongoosejs.com)
-   [MongoDB](https://www.mongodb.com)
-   [Postman](https://www.postman.com)

## Introdução

API Desenvolvida para entrega do Progress Report. Segue abaixo as especificações que foram pedidas:

Construa uma API que contemplem as seguintes operações expostas como endpoints REST:

-   Cadastrar cidade
-   Cadastrar cliente
-   Consultar cidade pelo nome
-   Consultar cidade pelo estado
-   Consultar cliente pelo nome
-   Consultar cliente pelo Id
-   Remover cliente
-   Alterar o nome do cliente

Considere o cadastro com dados básicos:

-   Cidades: nome e estado
-   Cliente: nome completo, sexo, data de nascimento, idade e cidade onde mora.

Além dessas, adicionei algumas outras funcionalidades que ajudam o gerenciamento e uso da API, como por exemplo:

-   Deletar um cliente
-   Deletar uma cidade
-   Consultar todas cidades
-   Consultar todos clientes
-   Consultar cidade pelo ID
-   Alterar cidade

## Funcionamento

### Pré requisitos

Primeiro, deve-se instalar todas as ferramentas necessárias para rodar o projeto. A primeira a ser instalada é o [NodeJS](https://nodejs.org/en/).

-   #### Instalação do Node no Windows

    Basta acessar o [site oficial do Node.js](https://nodejs.org/) e baixar o instalador.
    Além disso, certifique-se de ter o `git` disponível em seu PATH, `npm` pode precisar dele (você pode encontrar o git [aqui](https://git-scm.com/)).

-   ##### Instalação do Node no Ubuntu

    Você pode instalar o nodejs e o npm facilmente com o apt install, basta executar os seguintes comandos.

        $ sudo apt install nodejs
        $ sudo apt install npm

-   ##### Outros sistemas operacionais

    Você pode encontrar mais informações sobre a instalação no [site oficial do Node.js](https://nodejs.org/) e no [site oficial do NPM](https://npmjs.org/).

    Se a instalação foi bem-sucedida, você poderá executar o seguinte comando.

        $ node --version
        v14.21.3

        $ npm --version
        9.6.3

    Se você precisar atualizar o `npm`, você pode fazê-lo usando o `npm`! Após executar o seguinte comando, basta abrir novamente a linha de comando e ser feliz.

        $ npm install npm -g

Além do Node devemos ter uma instância de MongoDB ativa, podendo ser uma instância local ou não. Recomendo usar qual você estiver mais familiarizado

_(Obs: Na minha máquina utilizei um Cluster no MongoDB Atlas)._

Você pode encontrar mais informações sobre a instalação no [site oficial do MongoDB](https://www.mongodb.com).

Para realizar e testar as funcionalidades da API, utilizaremos o Postman. Você pode encontrar mais informações sobre a instalação no [site oficial do Postman](https://www.postman.com).

### Instalação

1. Clone o repositório
    ```sh
    $ git clone https://github.com/ViniciusDMRocha/PbAPI.git
    ```
2. Vá à pasta do projeto e instale os pacotes npm
    ```sh
    $ npm install
    ```

##### Postman

Abra o seu Postamn e importe o arquivo `API_ProgressReport.postman_collection.json` para poder utilizar as operações CRUD e testar o serviço. Ao importar você verá duas pastas com algumas operações, uma delas referente aos Clientes e a outra as Cidades.

### Rodando o projeto

Antes de rodarmos o nosso projeto, é necessário que você acesse o arquivo `configExample.env` e adicione as seguintes informações:

        PORT={PORTA_DO_SERVIDOR}
        DATABASE={URL_PARA_CONECTAR_AO_DATABASE}
        DATABASE_PASSWORD={SENHA_DATABASE}

Ao alterar as informações acima, salve o arquivo e o renomeie para `config.env`.

**_Essa próxima instrução é sobre a alimentação do Banco de Dados, caso não queira realizá-lo basta pular para o próximo passo._**

Para alimentar o Banco de Dados criei um script que cadastra 25 Clientes e 25 Cidades. Para executa-lo, vá para a pasta `dev-data` e rode o arquivo `import-dev-data.js`:

    $ node import-dev-data.js

Execute o seguinte comando para subir a aplicação:

    $ npm start

## Explicação do projeto

O projeto consiste em uma API básica que realiza operações CRUD.

Além dos requisitos pedidos, adicionei ao projeto mais algumas verificações e boas práticas de programação, como por exemplo:

-   Campos obrigatótios na criação de Clientes e Cidades.
-   Antes de criar o cliente, verifica se a cidade informada já foi cadastrada, caso contrário, é necessário cadastrar a cidade.
-   Não pode existir cidades com o mesmo nome.
-   Utilização de algumas ferramentas para garantir a boa funcionalidade do código.
-   Padrões REST nas requisições e respostas das APIs.
-   Códigos de retorno das operações.

Para testar o projeto, basta subir a aplicação e utilizar o Postman.
