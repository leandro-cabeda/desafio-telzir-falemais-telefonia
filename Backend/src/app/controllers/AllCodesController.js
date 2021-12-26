const CodeService = require('../services/findAllCodes').default;

class AllCodes {

  async findAllCodes(req, res) {

    return CodeService.allCodes(req, res);
  }
}

export default new AllCodes();
