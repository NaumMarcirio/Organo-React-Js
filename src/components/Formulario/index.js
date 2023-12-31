import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSupensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoDeletarTime = (event) => {
    event.preventDefault();
    props.cadastrarTime({
      nome: nomeTime,
      cor: corTime,
    });
    setCorTime("");
    setNomeTime("");
  };
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          label="Nome"
          placeholder="Digite seu Nome"
          obrigatorio="true"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          label="Cargo"
          placeholder="Digite seu Cargo"
          obrigatorio="true"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          obrigatorio="false"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          itens={props.times}
          obrigatorio="true"
          label="Times"
          value={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar Card" />
      </form>
      <form onSubmit={aoDeletarTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          label="Nome"
          placeholder="Digite o Nome do Time"
          obrigatorio
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          label="Cor"
          obrigatorio
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          type={"color"}
        />
        <Botao texto="Criar Time" />
      </form>
    </section>
  );
};

export default Formulario;
