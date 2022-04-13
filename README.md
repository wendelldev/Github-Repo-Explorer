# Github Repo Explorer

Este projeto foi criado a partir do [Create React App](https://github.com/facebook/create-react-app).

Projeto criado para resolver um desafio proposto por uma empresa. O projeto lista usuários do Github a partir do texto inserido no campo de busca. Ao clicar em um dos resultados, o usuário é redirecionado para a pagina de perfil onde será apresentado várias informações do perfil, inclusive seus repositórios públicos. Além disso, é possível adicionar repositórios a uma lista de favoritos que fica salva via LocalStorage e pode ser acessada a qualquer momento desde que os dados da página não sejam limpos pelo usuário. Também é possível remover repositórios favoritados atualizando a lista salva no LocalStorage.

Foi decidido a não utilização de bibliotecas UI (Ex.: Material Design), onde auxiliam em um desenvolvimento mais rápido e seguindo um padrão de layout, levando em consideração que a construção e estilização de componentes prórpios pode ser mais valioso no dia a dia.

O projeto está hospedado no Firebase Hosting: [https://githubrepoexplorer.web.app](https://githubrepoexplorer.web.app).

## Como rodar o projeto

Depois de clonar o projeto para seu computador, a partir do seu terminal, dentro do diretório do projeto, você pode rodar o comando(necessário node e yarn instalados):

### `yarn`

Este comando irá instalar as dependências do projeto.

Após finalizado a instalação das dependências, rode a aplicação com o seguinte comando:

### `yarn start`

Este comando roda a aplicação em modo de desenvolvimento.\
No navegador, abra [http://localhost:3000](http://localhost:3000) para ter acesso a aplicação.

## Requisitos

Recomendável versão 16.14.2 do Node ou mais recente e instalar as dependências pelo gerenciador de dependências Yarn([Como instalar Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)).

## Screenshots

![Dashboard-1](/images/dashboard-1.png)
![Dashboard-2](/images/dashboard-2.png)
![profile-1](/images/profile-1.png)
![profile-2](/images/profile-2.png)
![favoritos](/images/favs.png)
