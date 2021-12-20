import request from 'supertest';
import app from '../src/app';

test('retorna precoComFaleMais igual a 0.00 e precoSemFaleMais igual a 38.00 ', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '011',
      destino: '016',
      tempo: 20,
      servico: 'FaleMais 30',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '0.00',
    precoSemFaleMais: '38.00',
  });
});

test('retorna precoComFaleMais igual a 37.40 e precoSemFaleMais igual a 136.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '011',
      destino: '017',
      tempo: 80,
      servico: 'FaleMais 60',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '37.40',
    precoSemFaleMais: '136.00',
  });
});

test('retorna precoComFaleMais igual a 19.80 e precoSemFaleMais igual a 72.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '011',
      destino: '018',
      tempo: 80,
      servico: 'FaleMais 60',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '19.80',
    precoSemFaleMais: '72.00',
  });
});
test('retorna precoComFaleMais igual a 167.20 e precoSemFaleMais igual a 380.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '018',
      destino: '011',
      tempo: 200,
      servico: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '167.20',
    precoSemFaleMais: '380.00',
  });
});
test('retorna precoComFaleMais igual a 89.10 e precoSemFaleMais igual a 405.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '017',
      destino: '011',
      tempo: 150,
      servico: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '89.10',
    precoSemFaleMais: '405.00',
  });
});

test('retorna precoComFaleMais igual a 63.80 e precoSemFaleMais igual a 145.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '016',
      destino: '011',
      tempo: 50,
      servico: 'FaleMais 30',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '63.80',
    precoSemFaleMais: '145.00',
  });
});

test('retorna precoComFaleMais igual a 0.00 e precoSemFaleMais igual a 0.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '018',
      destino: '017',
      tempo: 100,
      servico: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '0.00',
    precoSemFaleMais: '0.00',
  });
});

test('retorna precoComFaleMais igual a 0.00 e precoSemFaleMais igual a 0.00', async () => {
  const response = await request(app)
    .post('/')
    .send({
      origem: '018',
      destino: '016',
      tempo: 100,
      servico: 'FaleMais 120',
    });
  expect(response.body).toMatchObject({
    precoComFaleMais: '0.00',
    precoSemFaleMais: '0.00',
  });
});
