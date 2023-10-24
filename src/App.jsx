import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import imagem from './imagens/La_casa_de_papel.png';
// import personagens from './imagens/personagens.jpeg';

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
      atributo2, atributo3, image, rare, trunfo, hasTrunfo, cards } = this.state;

    const card = {
      name,
      description,
      atributo1,
      atributo2,
      atributo3,
      image,
      rare,
      trunfo,
    };

    this.setState({
      cards: [...cards, card],
    });

    this.setState({
      name: '',
      description: '',
      atributo1: '0',
      atributo2: '0',
      atributo3: '0',
      image: '',
      rare: 'normal',
      hasTrunfo: trunfo ? true : hasTrunfo,
    }, this.validationBtn);
  };

  render() {
    const { name,
      description,
      atributo1,
      atributo2,
      atributo3,
      image, rare, trunfo, isSaveButtonDisabled, hasTrunfo, cards } = this.state;
    return (
      <>
        <img src={ superTrunfo } alt="Super Trunfo" className="super-trunfo" />
        <img src={ imagem } alt="La casa de Papel" className="titulo" />
        <img src={ personagens } alt="Personagens" className="personagens" />
        <section className="app">
          <div className="form">
            <Form
              cardName={ name }
              cardDescription={ description }
              cardImage={ image }
              cardAttr1={ atributo1 }
              cardAttr2={ atributo2 }
              cardAttr3={ atributo3 }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              onInputChange={ this.onInputChange }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              hasTrunfo={ hasTrunfo }
            />
          </div>

          <div className="preview">
            <h1>PRÉ-VISUALIZAÇÃO</h1>
            <div className="card">
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
            </div>
          </div>
        </section>

        <section className="baralho">
          <h1>TODAS AS CARTAS</h1>
          <div className="card">
            { cards.map((card) => (
              <Card
                key={ card.name }
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.atributo1 }
                cardAttr2={ card.atributo2 }
                cardAttr3={ card.atributo3 }
                cardImage={ card.image }
                cardRare={ card.rare }
                cardTrunfo={ card.trunfo }
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;
