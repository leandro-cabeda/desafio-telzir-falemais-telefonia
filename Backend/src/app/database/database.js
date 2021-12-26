const Sequelize = require("sequelize");

const Connect = new Sequelize(
  "telzir",
  "usuario",
  "senha",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    timezone: "-03:00",
    define: { timestamps: false }
  });

module.exports = {
  Connect,
  Sequelize
};
