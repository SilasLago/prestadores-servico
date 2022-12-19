import DefaultModal from "Components/DefaultModal/default_modal";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { useAuth } from "Hooks/useAuth/use_auth";
import { Servico } from "Pages/Prestadores/Components/PrestadorInfo/Components/StartService/utils/classes";
import { FormEvent, MouseEventHandler, useState } from "react";
import { RG } from "./utils/classes";

interface IRGEmission {
  onClose: MouseEventHandler<HTMLDivElement>;
  servico: Servico;
}
function RGEmission({ onClose, servico }: IRGEmission) {

  const auth = useAuth();

  const [finalidade, setFinalidade] = useState<string>("");
  const [descricaoServico, setDescricaoServico] = useState<string>("");
  const [numeroProcesso, setNumeroProcesso] = useState<string>("");
  const [rgPrestador, setRgPrestador] = useState<string>("");
  const [cpfPrestador, setCpfPrestador] = useState<string>("");
  const [bancoPrestador, setBancoPrestador] = useState<string>("");
  const [agenciaPrestador, setAgenciaPrestador] = useState<string>("");
  const [contaPrestador, setContaPrestador] = useState<string>("");
  const [motivoRequisicao, setMotivoRequisicao] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(finalidade, setFinalidade, "goal", "text", "Finalidade", "Finalidade", "Finalidade"),
    new DefaultInputData(numeroProcesso, setNumeroProcesso, "processNumber", "text", "Número do processo", "Número do processo", "Número do processo(se existir)"),
    new DefaultInputData(rgPrestador, setRgPrestador, "rgPrestador", "text", "RG", "RG", "RG"),
    new DefaultInputData(cpfPrestador, setCpfPrestador, "cpfPrestador", "text", "CPF", "CPF", "CPF"),
    new DefaultInputData(bancoPrestador, setBancoPrestador, "bancoPrestador", "text", "Banco", "Banco", "Banco"),
    new DefaultInputData(agenciaPrestador, setAgenciaPrestador, "agenciaPrestador", "number", "Agência", "Agência", "Agência"),
    new DefaultInputData(contaPrestador, setContaPrestador, "contaPrestador", "number", "Conta", "Conta", "Conta"),
    new DefaultInputData(motivoRequisicao, setMotivoRequisicao, "motivoRequisicao", "text", "Motivo da requisição", "Motivo da requisição", "Motivo da requisição"),
    new DefaultInputData(quantidade, setQuantidade, "quantidade", "number", "Quantidade", "Quantidade", "Quantidade"),
    new DefaultInputData(valor, setValor, "valor", "number", "Valor", "Valor", "Valor"),
    new DefaultInputData(descricaoServico, setDescricaoServico, "serviceDescription", "textarea", "Descrição do serviço", "Descrição do serviço", "Descrição do serviço"),
  ]
  
  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedServico = servico;
    updatedServico.setNumeroProcesso(numeroProcesso);

    const rg = new RG(
      updatedServico,
      finalidade,
      descricaoServico,
      motivoRequisicao,
      bancoPrestador,
      agenciaPrestador,
      contaPrestador,
      valor,
      quantidade,
    );
    
    console.log(rg, auth.userId);

    onClose({} as React.MouseEvent<HTMLDivElement, MouseEvent>);
  }

  return (
    <DefaultModal
      size="md"
      title="Emitir RG"
      onClose={onClose}
    >
      <form onSubmit={onFormSubmit}>
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
            key={id}
          />
        ))}
        <DefaultButton type="submit" label="Emitir" />
      </form>
    </DefaultModal>
  )
}

export default RGEmission;