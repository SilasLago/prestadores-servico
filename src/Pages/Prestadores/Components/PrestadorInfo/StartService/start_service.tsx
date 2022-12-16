import DefaultModal from "Components/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { useAuth } from "Hooks/useAuth/use_auth";
import { FormEvent, MouseEventHandler, useState } from "react";
import { SelectDataClass } from "Utils/classes";
import styles from "./start_service.module.scss";
import { Servico } from "./utils/classes";

interface IStartService {
  idPrestador: number,
  onClose: MouseEventHandler<HTMLDivElement>
}
function StartService({ idPrestador, onClose }: IStartService) {

  const auth = useAuth();
  const [idLocalAtendimento, setIdLocalAtendimento] = useState<number>(0);
  const [numeroProcesso, setNumeroProcesso] = useState<string>("");
  const [cliente, setCliente] = useState<string>("");
  const [filial, setFilial] = useState<string>("");

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(cliente, setCliente, "client", "text", "Cliente", "Cliente", "Cliente"),
    new DefaultInputData(filial, setFilial, "branch", "text", "Filial", "Filial", "Filial"),
    new DefaultInputData(idLocalAtendimento, setIdLocalAtendimento, "local_atendimento", "select", "Local de atendimento", "Local de atendimento", "Local de atendimento", [new SelectDataClass("Nenhum", "Nenhum")]),
    new DefaultInputData(numeroProcesso, setNumeroProcesso, "processNumber", "number", "Número do Processo", "Número do processo", "Número do processo(se existir)", undefined, false),
  ]

  function postServicoRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const analistaId = auth.userId;
    if(analistaId) {
      const servico = new Servico(
        idPrestador,
        analistaId,
        idLocalAtendimento,
        cliente,
        filial,
        numeroProcesso
      );
      console.log(servico);
      alert("Serviço iniciado com sucesso!");
      onClose({} as React.MouseEvent<HTMLDivElement, MouseEvent>);
    }
  }

  return (
    <DefaultModal
      title="Solicitação de serviço"
      onClose={onClose}
      size="md"
    >
      <form onSubmit={postServicoRequest} className={styles.service__body}>
        {inputs.map(({type, label, data, id, onChange, placeholder, required, title, value}) => (
          <DefaultInput
            value={value}
            type={type}
            label={label}
            data={data}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            title={title}
          />
        ))}
        <DefaultButton
          type="submit"
          label="Iniciar serviço"
        />
      </form>
    </DefaultModal>
  )
}

export default StartService;