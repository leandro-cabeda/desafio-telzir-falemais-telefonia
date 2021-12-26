const PlanModel = require('../models/PlanModel');

class Plan {

  async allPlans(req, res) {

    PlanModel().findAll({
      raw: true,
      order: [
        ["id", "asc"]
      ]
    }).then(plans => {

      res.status(200).json(plans);

    }).catch(err => {
      res.status(500).json({ error: { message: "Ocorreu falha durante a conexão do banco. Err: " + err } });
    });
  }

}

export default new Plan();
