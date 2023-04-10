import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="nome"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição
          <textarea
            data-testid="description-input"
            id="descricao"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Inteligência
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            name="atributo1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Ambição
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            name="atributo2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Controle Emocional
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            name="atributo3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="img">
          <input
            data-testid="image-input"
            type="text"
            id="img"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select
            data-testid="rare-input"
            id="raridade"
            name="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          Super Trunfo
          {
            hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : (
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="super-trunfo"
                name="trunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            )
          }

        </label>

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
