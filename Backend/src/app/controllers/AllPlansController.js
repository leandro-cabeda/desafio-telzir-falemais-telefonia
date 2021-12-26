const PlanService = require('../services/findAllPlans').default;

class AllPlans {

  async findAllPlans(req, res) {

    return PlanService.allPlans(req, res);
  }
}

export default new AllPlans();
