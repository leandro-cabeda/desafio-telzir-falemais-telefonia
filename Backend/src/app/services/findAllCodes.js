const CodeModel = require('../models/CodeModel');

class Code {

  async allCodes(req, res) {

    CodeModel().findAll({
      raw: true,
      order: [
        ["id", "asc"]
      ]
    }).then(codes => {

      res.status(200).json(codes);

    }).catch(err => {
      res.status(500).json({ error: { message: "Ocorreu falha durante a conexão do banco. Err: " + err } });
    });
  }
}

export default new Code();
