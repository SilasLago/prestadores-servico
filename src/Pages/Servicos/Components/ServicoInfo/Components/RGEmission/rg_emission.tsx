import DefaultModal from "Components/Modals/DefaultModal/default_modal";
import { Analista } from "Components/Header/Components/UserInfo/utils/classes";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { useAuth } from "Hooks/useAuth/use_auth";
import { Servico } from "Pages/Prestadores/Components/PrestadorInfo/Components/StartService/utils/classes";
import { Prestador } from "Pages/RegisterPrestador/utils/classes";
import { FormEvent, MouseEventHandler, useState } from "react";
import { PrestadorLocalDeAtendimento } from "Utils/classes";
import { RG } from "./utils/classes";
import { createRg } from "./utils/create_rg";
import { goalTypesData, requestTypesData } from "./utils/datas";

interface IRGEmission {
  onClose: MouseEventHandler<HTMLDivElement>;
  servico: Servico;
}
function RGEmission({ onClose, servico }: IRGEmission) {

  const auth = useAuth();

  const [finalidade, setFinalidade] = useState<string>(goalTypesData[0].value);
  const [descricaoServico, setDescricaoServico] = useState<string>("");
  const [numeroProcesso, setNumeroProcesso] = useState<string>("");
  const [bancoPrestador, setBancoPrestador] = useState<string>("");
  const [agenciaPrestador, setAgenciaPrestador] = useState<string>("");
  const [contaPrestador, setContaPrestador] = useState<string>("");
  const [motivoRequisicao, setMotivoRequisicao] = useState<string>(requestTypesData[0].value);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [valor, setValor] = useState<number>(0);

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(finalidade, setFinalidade, "goal", "select", "Finalidade", "Finalidade", "Finalidade", goalTypesData),
    new DefaultInputData(numeroProcesso, setNumeroProcesso, "processNumber", "text", "Número do processo", "Número do processo", "Número do processo(se existir)"),
    new DefaultInputData(bancoPrestador, setBancoPrestador, "bancoPrestador", "text", "Banco", "Banco", "Banco"),
    new DefaultInputData(agenciaPrestador, setAgenciaPrestador, "agenciaPrestador", "number", "Agência", "Agência", "Agência"),
    new DefaultInputData(contaPrestador, setContaPrestador, "contaPrestador", "number", "Conta", "Conta", "Conta"),
    new DefaultInputData(motivoRequisicao, setMotivoRequisicao, "motivoRequisicao", "select", "Motivo da requisição", "Motivo da requisição", "Motivo da requisição", requestTypesData),
    new DefaultInputData(quantidade, setQuantidade, "quantidade", "number", "Quantidade", "Quantidade", "Quantidade"),
    new DefaultInputData(valor, setValor, "valor", "number", "Valor", "Valor", "Valor"),
    new DefaultInputData(descricaoServico, setDescricaoServico, "serviceDescription", "textarea", "Descrição do serviço", "Descrição do serviço", "Descrição do serviço"),
  ]
  
  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const analista = new Analista("Silas Lago", "TI", "Desenvolvedor de Sistemas", "0000 - Matriz", "41 9 998843974", "juanfsa@live.com");
    const prestador = new Prestador("Maicon Douglas", "PR", "Curitiba", "jmaicon@gmail.com", "35 9 98554711", "Pedreiro", "Enviar cartas", 15.90, 10, "85.001.551-54", "123.147.159-12", [new PrestadorLocalDeAtendimento("Curitiba", "PR")]);
    const updatedServico: Servico = servico;
    updatedServico.setNumeroProcesso(numeroProcesso);

    const rg = new RG(
      analista,
      prestador,
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
    
    createRg(rg);
      
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
            isPositionFixed={true}
          />
        ))}
        <DefaultButton type="submit" label="Emitir" />
      </form>
    </DefaultModal>
  )
}

export default RGEmission;