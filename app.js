//importa as configs do servidor
const servidor = require("./config/servidor")
//carregar o express
const app = servidor.app
//carregar a porta
const porta = servidor.porta

//carregar a rota index
const index = require('./routes/index')(app)

//importar consign
const consign = require('consign')
consign().include('./routes').into(app)

//ligar o sevidor
app.listen(porta)