module.exports = () => {
  const { Connect, Sequelize } = require('../database/database');


  /**
   * @swagger
   * definition:
   *   Codes:
   *     description: Class representing the code model
   *     properties:
   *       code:
   *         type: string
   *         description: code of DDD
   */
  const Code = Connect.define("codes", {
    code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });


  Code.sync({ force: false });

  return Code;
};
