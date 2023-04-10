import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    name: '',
    description: '',
    atributo1: '',
    atributo2: '',
    atributo3: '',
    image: '',
    rare: '',
    trunfo: '',
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: [],
  };

  validationBtn = () => {
    const { name,
      description, image, rare, atributo1, atributo2, atributo3 } = this.state;

    const somaTotal = 210;
    const pts = 90;

    const valInputs = (name.length > 0
      && description.length > 0 && image.length > 0 && rare.length > 0);

    const valSomaAtrib = (Number(atributo1)
    + Number(atributo2) + Number(atributo3)) <= somaTotal;

    const valPontos = Number(atributo1) <= pts && Number(atributo1) >= 0
    && Number(atributo2) <= pts && Number(atributo2) >= 0
    && Number(atributo3) <= pts && Number(atributo3) >= 0;

    this.setState({
      isSaveButtonDisabled: !(valInputs && valSomaAtrib && valPontos),
    });
  };

  onInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    }, this.validationBtn);
  };

  onSaveButtonClick = () => {
    const { name,
      description,
      atributo1,
      atributo2, atributo3, image, rare, trunfo, hasTrunfo } = this.state;

    this.setState((prev) => ({
      cards: [...prev.cards, {
        name,
        description,
        atributo1,
        atributo2,
        atributo3,
        image,
        rare,
        trunfo,
      }],
      name: '',
      description: '',
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      image: '',
      rare: 'normal',
      hasTrunfo: trunfo ? true : hasTrunfo,
    }));
  };

  render() {
    const { name,
      description,
      atributo1,
      atributo2,
      atributo3,
      image, rare, trunfo, isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />

      </>
    );
  }
}

export default App;
