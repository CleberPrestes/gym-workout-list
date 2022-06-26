# gym-workout-list

# Layout de telas
https://www.figma.com/file/n7m8odEMe0KxBLybz1Twau/GymApp?node-id=9%3A284

# Repositorio de deploy
https://cleberprestes.github.io/buildteste/

# Passo a passo do projeto 
https://drive.google.com/file/d/1LnDXEo-9JTOHH7tQn7bGQErhsyKfC8ql/view?usp=sharing

* Obs - O projeto salva e obtem dados através do JSon-server e localStorage. O ao carregar os dados do LocalStorage a aplicação demora alguns segundos para carregar, porque inicialmente busca carregar dados do JSon-Server, caso ele não esteja ativo carrega os dados disponiveis no localStorage.

# Script para rodar o JSon-Sever
npm run server

# Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Criar branches feature a partir do branch develop para cada nova funcionalidade a ser implementada. 
- [x] Usar algum framework CSS (Bootstrap, Materialize ou outro). Optei pelo Materialize.
- [x] Apresentar as telas com layout responsivo. 
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes. Componentes criados foram: Menu, Footer, Landpage, nametraining, traininiglist, newtraining, trainingdetail
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes. 
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding). Interpolation foram utilizados em varias partes, como exemplo no texto que apresenta a origem dos dados, se localStorage ou Json-sever. Two Way Data Binding foi utilizado para inserção de dados no form de cadastro dos treinos.
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output. Foram utilizados para o titulo "Lista de Treinos". Foi criado um componente somente para essa funcionalidade.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas. São exemplos da navegação entre as paginas a implementação dos botões de voltar, Criar Treinos e Treinos Salvos.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
Foi utilizado no botão detalhes para passar o id de um treino e exibir os detalhes dele no componente trainingdetail.

- [x] Validar campos do formulário com REGEX e apresentar os erros. Os campos validados foram o Nome do treino e o nome do Exercicio no componente newtraining.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido. No componente newtraining o botão de Salvar só é habilitado se o formulario estiver válido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
Foi utilizado o Json-sever como API, o tratamento de resposta utilizado foi para o carregamento de dados do JSon-sever ou do localStorage.
- [x] Cadastrar uma entidade no Web Storage.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.A lista de treinos cadastrados é mostrada utilizando a diretiva ngFor.
- [x] Usar a diretiva ngIf. A diretiva ngIf foi utilizada em varios lugares. Como exemplo no botão treinar que esconde ou mostra os botões de Novo treino e Treino Salvo.

*Obs não foi possivel a total implementação de acordo com projeto do figma, porque considerava a utilização de inputs dinamicos e uma estrutura bastante complexa no JSon. Portanto optou-se por uma estrura mais simples que atendesse os requisitos do projeto.
