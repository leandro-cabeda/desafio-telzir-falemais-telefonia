module.exports = () => {
  const { Connect, Sequelize } = require('../database/database');


  /**
   * @swagger
   * definition:
   *   Plans:
   *     description: Class representing the plan model
   *     properties:
   *       description:
   *         type: string
   *         description: description of plan
   */
  const Plan = Connect.define("plans", {
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });


  Plan.sync({ force: false });

  return Plan;
};
