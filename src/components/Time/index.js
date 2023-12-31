import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  const handleDelete = (colaboradorId) => {
    props.aoDeletar(colaboradorId);
  };
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, "0.6") }}
      >
        <input
          value={props.cor}
          type="color"
          className="input-cor"
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
        />
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => {
            return (
              <Colaborador
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                cor={props.cor}
                aoDeletar={() => handleDelete(colaborador.id)}
                colaborador={colaborador}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
