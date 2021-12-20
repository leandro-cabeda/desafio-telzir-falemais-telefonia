import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/falemais.png';
import author from '../../assets/eu.jpg';

import { formatPrice } from '../../util/format';

import {
  Container,
  SubmitButton,
  Content,
  FirstContent,
  SecondContent,
  Header,
  Form,
  Results
} from './styles';

export default class Main extends Component {
  state = {
    origem: '',
    destino: '',
    tempo: '',
    servico: '',
    precoComFaleMais: '',
    precoSemFaleMais: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { origem, destino, tempo, servico } = this.state;

    const response = await api.post('/', {
      origem,
      destino,
      tempo,
      servico,
    });

    const { precoComFaleMais, precoSemFaleMais } = response.data;

    this.setState({
      precoComFaleMais,
      precoSemFaleMais,
    });
  };

  render() {

    const data = {
      codigo: ['', '011', '016', '017', '018'],
      servico: ['', 'FaleMais 30', 'FaleMais 60', 'FaleMais 120'],
    };

    return (
      <>
        <Header>
          <Link to="/">
            <img src={logo} alt="FaleMais" width={350} />
          </Link>
        </Header>

        <Container>
          <Content>
            <FirstContent>
              <Header>
                <img src={author} alt="Autor" width={250} />
              </Header>
              <h3>Leandro Cabeda Rigo</h3>
              <p>Autor do sistema</p>
              <h2> Seja bem-vindo!</h2>
              <p>Veja como suas ligações ficarão mais baratas</p>
            </FirstContent>
            <SecondContent>
              <Form onSubmit={this.handleSubmit}>
                <label>Origem: </label>
                <select
                  onChange={e => {
                    this.setState({ origem: e.target.value });
                  }}
                >
                  {data.codigo.map((origem, id) => {
                    return <option key={id}>{origem}</option>;
                  })}
                </select>

                <label>Destino: </label>
                <select
                  onChange={e => {
                    this.setState({ destino: e.target.value });
                  }}
                >
                  {data.codigo.map((destino, id) => {
                    return <option key={id}>{destino}</option>;
                  })}
                </select>

                <label>Plano: </label>
                <select
                  onChange={e => {
                    this.setState({ servico: e.target.value });
                  }}
                >
                  {data.servico.map((servico, id) => {
                    return <option key={id}>{servico}</option>;
                  })}
                </select>

                <label>Tempo: </label>
                <input
                  type="text"
                  placeholder=" Quantos minutos?"
                  value={this.state.tempo}
                  onChange={e => {
                    this.setState({ tempo: e.target.value });
                  }}
                />
              </Form>
              <SubmitButton onClick={this.handleSubmit}>Calcular</SubmitButton>
            </SecondContent>
          </Content>
        </Container>
        <Results>
          <h2>
            <span>Plano -
              <strong> FALE MAIS</strong>
            </span>
            : {formatPrice(this.state.precoComFaleMais)}
          </h2>
          <h2>Sem Plano: {formatPrice(this.state.precoSemFaleMais)}</h2>
        </Results>
      </>
    );
  }
}
