class Calculation {
  async calcularPlano(req, res) {
    const { origem, destino, tempo, servico } = req.body;

    const precoPorMinuto = (origin, to) => {
      if (origin === '011' && to === '016') return 1.9;
      if (origin === '016' && to === '011') return 2.9;
      if (origin === '011' && to === '017') return 1.7;
      if (origin === '017' && to === '011') return 2.7;
      if (origin === '011' && to === '018') return 0.9;
      if (origin === '018' && to === '011') return 1.9;
      return 0;
    };

    const semFaleMais = precoPorMinuto(origem, destino) * tempo;

    let comFaleMais = () => {
      let plano = 0;
      if (servico === 'FaleMais 30') plano = 30;
      else if (servico === 'FaleMais 60') plano = 60;
      else if (servico === 'FaleMais 120') plano = 120;

      if (tempo <= plano) comFaleMais = 0;
      else {
        comFaleMais =
          (tempo - plano) *
          (precoPorMinuto(origem, destino) +
            0.1 * precoPorMinuto(origem, destino));
      }
      return comFaleMais;
    };

    const precoComFaleMais = comFaleMais().toFixed(2);
    const precoSemFaleMais = semFaleMais.toFixed(2);

    if (origem) return res.status(200).json({ precoComFaleMais, precoSemFaleMais });

    return 1;
  }
}

export default new Calculation();
