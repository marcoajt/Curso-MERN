# Curso-MERN
Curso básico de nodejs<br>

https://www.youtube.com/watch?v=xFMKYhlOtSE&list=PLf7vZ02bgXGWPYTDBP8Bd8C1rLqj0BRV3&index=1

## Aula 01

Instalação:

- Mongo DB<br>

- Node Js<br>

Comandos usados:

- `npm init` - para iniciar o projeto.<br>
- `node server.js` - para rodar o projeto.

## Aula 02 - Iniciando Servidor Web

Instalação do express

- `npm install express` - para instalação do express.
- `npm install cookie-parser`
- `npm install cors`
- `npm install path`

- `npm install nodemon` - para atualizar sozinho, sem precisar usar o terminal para inicializar o servidor.
- Depois de instalar o nodemon, se precissa acressentar no arquivo package.json, embaixo de scripts, `"dev": "nodemon server.js"`. Para rodar o projeto somente digitar `npm run dev`.

## Aula 03 - Estrutura de Pastas no BackEnd - NodeJS

Estruturação do projeto:

- controllers - pasta onde vai ficar os controles da nossa aplicação.

- functions - pasta caso necessite usar algumas funções.

- models - pasta onde vai poder fazer a conexão com o banco de dados.
- middleware - arquivo para verificar tokens de acesso.
- routes.js - arquivo onde vai ficar todas as rotas da nossa API.
- uploads, onde se coloca as images e os arquivos.

## Aula 04 - Conexão com MongoDB

Conexão do servidor NodeJS com o MongoDB

- `npm install mongoose` - driver para conectar o NodeJS com o MongoDB (no projeto).

- Instalar o MongoDB Compass.

  Depois de Instalar:

- `sudo systemctl status mongod` - para verificar o estado do MongDB.

- `sudo systemctl start mongod` - para iniciar o MongoDB, necessario quando usar o MongoDB Compass.

- `sudo systemctl stop mongod` - para parar o MongoDB.

O video está desatualizado, a nova versão não utiliza mais essa versão para inicializar a conexão.

Fontes:

- https://exerror.com/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported/
- https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported

Solução:

```
const URI = 'mongodb://localhost:27017/curso-basico-mearn';

mongoose.connect(
    URI,
    async(err)=>{
        if(err) throw err;
        console.log('MongoDB CONECTADO COM SUCESSO!');
    }
)
```

## Aula 05 - [CREATE] - Cadastro NodeJS com MongoDB

- await - O operador `await` é utilizado para esperar por uma [`Promise`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise). Ele pode ser usado apenas dentro de uma [`async function`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function).

  ```
  let user = await Usuario.findOne({email_usuario});
  user = await Usuario.create(data);
  ```

- asyn - A declaração `async function` define uma *função assíncrona*, que retorna um objeto [`AsyncFunction`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction).

  ```
  async create(req,res)
  ```

- Eu fiz diferente a declaração do DataSchema

  ```
  const DataSchema = new mongoose.Schema({
      nome_usuario:{type:String, require:true},
      email_usuario:{type:String, require:true},
      tipo_usuario:{type:Number, default:1},
      senha_usuario:{type:String, require:true},
  }
  ```

- Quando for testar o Insomnia, se você cadastrar mais de uma vez com o mesmo email, ira retornar error 500. Não esquecer de inicializar o MongoDB e rodar o projeto.

  ```
  let user = await Usuario.findOne({email_usuario});//para verificas se não existe esse usuario
          if(!user){
              data = {nome_usuario,email_usuario,tipo_usuario,senha_usuario};
              user = await Usuario.create(data);// await e feito para esperar para não criar usuario vazio.
              return res.status(200).json(user);
          }else{
              return res.status(500).json(user);
          }
  ```

  

- Para verificar o cadastro do usuário, entre no MongoDB Compass.

## Aula 06 - [FIND] - Listagem  NodeJS com MongoDB

- Encontrei um erro na rota, o parametro `id` não estava sendo enviado, então foi colocado na rota de details:

  ```
  routes.get('/api/usuarios.details/:_id',Usuario.details);
  ```

  
