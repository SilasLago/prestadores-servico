import DefaultModal from "Components/DefaultModal/default_modal"
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { Servico } from "Pages/Prestadores/Components/PrestadorInfo/Components/StartService/utils/classes";

interface IClosedServicoInfo {
  onClose: any,
}
function ClosedServicoInfo({ onClose }: IClosedServicoInfo) {

  const servico = new Servico(0, 0, "Serviço de vistoria de filial", 0, "Bradesco", "1101 - Serra Dourada", "122544485574536");

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(servico.cliente, falseReactOnChange(), "client", "text", "Cliente", "Cliente", "Cliente", undefined, false, true),
    new DefaultInputData(servico.dataSolicitacao, falseReactOnChange(), "requestDate", "text", "Data solicitação", "Data solicitação", "Data solicitação", undefined, false, true),
    new DefaultInputData(servico.tipoServico, falseReactOnChange(), "serviceType", "text", "Tipo de serviço", "Tipo de serviço", "Tipo de serviço", undefined, false, true),
    new DefaultInputData(servico.filial, falseReactOnChange(), "branch", "text", "Filial", "Filial", "Filial", undefined, false, true),
    new DefaultInputData(servico.numeroProcesso, falseReactOnChange(), "processNumber", "text", "Número do processo", "Número do processo", "Número do processo", undefined, false, true)
  ]

  function falseReactOnChange(): React.Dispatch<React.SetStateAction<any>> {
    return {} as React.Dispatch<React.SetStateAction<any>>;
  }

  return (
    <DefaultModal
      title="Informações sobre o serviço"
      size="md"
      onClose={onClose}
    >
      {inputs.map(({ value, data, disabled, id, label, onChange, placeholder, required, title, type }) => (
        <DefaultInput
          value={value}
          data={data}
          disabled={disabled}
          id={id}
          label={label}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          title={title}
          type={type}
        />
      ))}
    </DefaultModal>
  )
}

export default ClosedServicoInfo;