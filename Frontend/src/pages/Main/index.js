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
    from: '',
    to: '',
    time: '',
    service: '',
    priceWithFaleMais: '',
    priceNoFaleMais: '',
    code: [],
    plan: []
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { from, to, time, service } = this.state;

    const response = await api.post('/', {
      from,
      to,
      time,
      service,
    });

    const { priceWithFaleMais, priceNoFaleMais } = response.data;

    this.setState({
      priceWithFaleMais,
      priceNoFaleMais,
    });
  };

  allCodes = async () => {
    const { data } = await api.get('/code');
    this.setState({ code: data });
  }

  allPlans = async () => {
    const { data } = await api.get('/plan');
    this.setState({ plan: data });
  }

  async componentDidMount() {
    await this.allCodes();
    await this.allPlans();
  }


  render() {

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
              <p>System Author</p>
              <h2>Welcome!</h2>
              <p>See how your calls will be cheaper.</p>
            </FirstContent>
            <SecondContent>
              <Form onSubmit={this.handleSubmit}>
                <label>From: </label>
                <select
                  onChange={e => {
                    this.setState({ from: e.target.value });
                  }}
                >
                  <option key='0'></option>;
                  {this.state.code.map((from, id) => {
                    return <option key={id}>{from.code}</option>;
                  })}
                </select>

                <label>To: </label>
                <select
                  onChange={e => {
                    this.setState({ to: e.target.value });
                  }}
                >
                  <option key='0'></option>;
                  {this.state.code.map((to, id) => {
                    return <option key={id}>{to.code}</option>;
                  })}
                </select>

                <label>Plan: </label>
                <select
                  onChange={e => {
                    this.setState({ service: e.target.value });
                  }}
                >
                  <option key='0'></option>;
                  {this.state.plan.map((service, id) => {
                    return <option key={id}>{service.description}</option>;
                  })}
                </select>

                <label>Time: </label>
                <input
                  type="text"
                  placeholder=" Quantos minutos?"
                  value={this.state.time}
                  onChange={e => {
                    this.setState({ time: e.target.value });
                  }}
                />
              </Form>
              <SubmitButton onClick={this.handleSubmit}>Calcular</SubmitButton>
            </SecondContent>
          </Content>
        </Container>
        <Results>
          <h2>
            <span>Plan -
              <strong> FALE MAIS</strong>
            </span>
            : {formatPrice(this.state.priceWithFaleMais)}
          </h2>
          <h2>No Plan: {formatPrice(this.state.priceNoFaleMais)}</h2>
        </Results>
      </>
    );
  }
}
