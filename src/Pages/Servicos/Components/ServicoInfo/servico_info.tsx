import DefaultModal from "Components/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { Servico } from "Pages/Prestadores/Components/PrestadorInfo/Components/StartService/utils/classes";
import React, { MouseEventHandler, useState } from "react";
import RGEmission from "./Components/RGEmission/rg_emission";

interface IServicoInfo {
  servicoId: number,
  onClose: MouseEventHandler<HTMLDivElement>
}
function ServicoInfo({ servicoId, onClose }: IServicoInfo) {

  const [isIssuing, setIsIssuing] = useState<boolean>(false);
  const desapear = useDesapear();

  const servico = new Servico(
    0,
    0,
    "Serviço de impressão de fotos",
    0,
    "Bradesco",
    "0037 - Serra Preta"
  );

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(servico.cliente, falseReactOnChange(), "client", "text", "Cliente", "Cliente", "Cliente", undefined, true, true),
    new DefaultInputData(servico.dataSolicitacao, falseReactOnChange(), "requestDate", "text", "Data solicitação", "Data solicitação", "Data solicitação", undefined, true, true),
    new DefaultInputData(servico.tipoServico, falseReactOnChange(), "serviceType", "text", "Tipo de serviço", "Tipo de serviço", "Tipo de serviço", undefined, true, true),
    new DefaultInputData(servico.filial, falseReactOnChange(), "branch", "text", "Filial", "Filial", "Filial", undefined, true, true),
    new DefaultInputData(servico.numeroProcesso, falseReactOnChange(), "processNumber", "text", "Número do processo", "Número do processo", "Número do processo", undefined, false, true),
  ]

  function falseReactOnChange(): React.Dispatch<React.SetStateAction<any>> {
    return {} as React.Dispatch<React.SetStateAction<any>>;
  }

  function emitirRg() {
    setIsIssuing(true);
    desapear.update(true);
  }

  function closeRGEmission() {
    setIsIssuing(false);
    desapear.update(false);
  }

  return (
    <>
      {!desapear.value && (
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
      )}
      {isIssuing && <RGEmission servico={servico} onClose={closeRGEmission} />}
    </>
  )
}

export default ServicoInfo;