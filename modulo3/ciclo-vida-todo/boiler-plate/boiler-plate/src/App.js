import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
  //nao entendi o text decoration
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Tomar banho",
        completa: false,
      },
      {
        id: Date.now(),
        texto: "Comer",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {}

  componentDidMount() {}

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    const novaListaTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: novaListaTarefas });
  };

  selectTarefa = (tarefaId) => {
    console.log("altero", tarefaId)
    const tarefasId = this.state.tarefas.map((tarefa) => {
      if (tarefaId === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return novaTarefa;
      }
    });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro : event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value={this.onChangeFilter}/*  onChange={this.onChangeFilter} */>Nenhum</option>
            <option value={this.onChangeFilter}/*  onChange={this.onChangeFilter} */>Pendentes</option>
            <option value="completas" onChange={this.onChangeFilter}>Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
