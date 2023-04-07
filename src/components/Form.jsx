import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome
          <input data-testid="name-input" type="text" id="nome" />
        </label>

        <label htmlFor="descricao">
          Descrição
          <textarea data-testid="description-input" id="descricao" />
        </label>

        <label htmlFor="attr1">
          Inteligência
          <input data-testid="attr1-input" type="number" id="attr1" />
        </label>

        <label htmlFor="attr2">
          Ambição
          <input data-testid="attr2-input" type="number" id="attr2" />
        </label>

        <label htmlFor="attr3">
          Controle Emocional
          <input data-testid="attr3-input" type="number" id="attr3" />
        </label>

        <label htmlFor="img">
          <input data-testid="image-input" type="text" id="img" />
        </label>

        <label htmlFor="raridade">
          Raridade
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="super-trunfo">
          Super Trunfo
          <input data-testid="trunfo-input" type="checkbox" id="super-trunfo" />
        </label>

        <button data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default Form;
