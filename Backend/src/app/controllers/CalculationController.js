class Calculation {
  async calculatePlan(req, res) {
    const { from, to, time, service } = req.body;

    const pricePerMinute = (origin, to) => {
      if (origin === '011' && to === '016') return 1.9;
      if (origin === '016' && to === '011') return 2.9;
      if (origin === '011' && to === '017') return 1.7;
      if (origin === '017' && to === '011') return 2.7;
      if (origin === '011' && to === '018') return 0.9;
      if (origin === '018' && to === '011') return 1.9;
      return 0;
    };

    const noFaleMais = pricePerMinute(from, to) * time;

    let withFaleMais = () => {
      let plan = 0;
      if (service === 'FaleMais 30') plan = 30;
      else if (service === 'FaleMais 60') plan = 60;
      else if (service === 'FaleMais 120') plan = 120;

      if (time <= plan) withFaleMais = 0;
      else {
        withFaleMais =
          (time - plan) *
          (pricePerMinute(from, to) +
            0.1 * pricePerMinute(from, to));
      }
      return withFaleMais;
    };

    const priceWithFaleMais = withFaleMais().toFixed(2);
    const priceNoFaleMais = noFaleMais.toFixed(2);

    if (from) return res.status(200).json({ priceWithFaleMais, priceNoFaleMais });

    return 1;
  }
}

export default new Calculation();
