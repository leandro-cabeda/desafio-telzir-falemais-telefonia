import app from './app';
const port = process.env.PORT || 5000;
const { Connect } = require('./app/database/database');

Connect.authenticate()
  .then(() => {
    console.log("Conexão estabelicida com MySql");
  })
  .catch((messageError) => {
    console.log(messageError);
  });


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
