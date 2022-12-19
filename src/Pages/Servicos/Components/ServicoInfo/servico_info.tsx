import DefaultModal from "Components/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { Servico } from "Pages/Prestadores/Components/PrestadorInfo/Components/StartService/utils/classes";
import React, { MouseEventHandler } from "react";

interface IServicoInfo {
  servicoId: number,
  onClose: MouseEventHandler<HTMLDivElement>
}
function ServicoInfo({ servicoId, onClose }: IServicoInfo) {

  const servico = new Servico(
    0,
    0,
    0,
    "Bradesco",
    "0037 - Serra Preta"
  );

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(servico.cliente, falseReactOnChange(), "client", "text", "Cliente", "Cliente", "Cliente", undefined, false, true),
    new DefaultInputData(servico.dataSolicitacao, falseReactOnChange(), "requestDate", "text", "Data solicitação", "Data solicitação", "Data solicitação", undefined, false, true),
    new DefaultInputData(servico.filial, falseReactOnChange(), "branch", "text", "Filial", "Filial", "Filial", undefined, false, true),
    new DefaultInputData(servico.numeroProcesso, falseReactOnChange(), "processNumber", "text", "Número do processo", "Número do processo", "Número do processo", undefined, false, true)
  ]

  function falseReactOnChange(): React.Dispatch<React.SetStateAction<any>> {
    return {} as React.Dispatch<React.SetStateAction<any>>;
  }

  function emitirRg() {
    alert("RG emitido com sucesso!");
    console.log(servicoId);
    onClose({} as React.MouseEvent<HTMLDivElement, MouseEvent>);
  }

  return (
    <DefaultModal
      size="md"
      title="Informações sobre o serviço"
      onClose={onClose}
    >
      <div>
        {inputs.map(({ data, disabled, id, label, onChange, placeholder, required, title, type, value }) => (
          <DefaultInput
            data={data}
            disabled={disabled}
            id={id}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            title={title}
            type={type}
            value={value}
            key={id}
          />
        ))}
      </div>
      <hr />
      <DefaultButton label="Emitir RG" type="button" onClick={emitirRg} />
    </DefaultModal>
  )
}

export default ServicoInfo;