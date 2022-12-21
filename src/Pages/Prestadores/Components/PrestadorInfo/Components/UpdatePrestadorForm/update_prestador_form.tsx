import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import LocalAtendimentoInput from "Components/Inputs/LocalAtendimentoInput/local_atendimento_input";
import { Prestador } from "Pages/RegisterPrestador/utils/classes";
import { FormEvent, SetStateAction, useState } from "react";
import { PrestadorLocalDeAtendimento } from "Utils/classes";
import { states } from "Utils/datas";
import { formatCPF, formatPhone, formatRG, setFormattedValue } from "Utils/formatters";
import styles from "./update_prestador_form.module.scss";

interface IUpdatePrestadorForm {
  curPrestador: Prestador,
  setCurPrestador: React.Dispatch<SetStateAction<Prestador>>
}
function UpdatePrestadorForm({ curPrestador, setCurPrestador }: IUpdatePrestadorForm) {

  const [newPrestadorName, setNewPrestadorName] = useState<string>(curPrestador.nome);
  const [newPrestadorState, setNewPrestadorState] = useState<string>(curPrestador.estado);
  const [newPrestadorCity, setNewPrestadorCity] = useState<string>(curPrestador.cidade);
  const [newPrestadorEmail, setNewPrestadorEmail] = useState<string>(curPrestador.email);
  const [newPrestadorPhone, setNewPrestadorPhone] = useState<string>(curPrestador.telefone);
  const [newPrestadorPrice, setNewPrestadorPrice] = useState<number>(curPrestador.valorCobrado);
  const [newPrestadorRg, setNewPrestadorRg] = useState<string>(curPrestador.rg);
  const [newPrestadorCpf, setNewPrestadorCpf] = useState<string>(curPrestador.cpf);
  const [newPrestadorGraduation, setNewPrestadorGraduation] = useState<string>(curPrestador.formacao);
  const [newPrestadorServiceType, setNewPrestadorServiceType] = useState<string>(curPrestador.tipoDeServico);
  const [newPrestadorContract, setNewPrestadorContrat] = useState<string | undefined>(curPrestador.contrato);
  const [newPrestadorLocaisAtendimento, setNewPrestadorLocaisAtendimento] = useState<Array<PrestadorLocalDeAtendimento>>(curPrestador.locaisAtendimento);

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(newPrestadorName, setNewPrestadorName, "name", "text", "Nome", "Nome", "Nome"),
    new DefaultInputData(newPrestadorState, setNewPrestadorState, "state", "select", "Estado", "Estado", "Estado", states),
    new DefaultInputData(newPrestadorCity, setNewPrestadorCity, "city", "text", "Cidade", "Cidade", "Cidade"),
    new DefaultInputData(newPrestadorEmail, setNewPrestadorEmail, "email", "email", "Email", "Email", "Email"),
    new DefaultInputData(newPrestadorPhone, setPhoneCallback, "phone", "text", "Telefone", "Telefone", "Telefone"),
    new DefaultInputData(newPrestadorPrice, setNewPrestadorPrice, "price", "number", "Preço", "Preço", "Preço"),
    new DefaultInputData(newPrestadorRg, setRGCallback, "rg", "text", "RG", "RG", "RG"),
    new DefaultInputData(newPrestadorCpf, setCPFCallback, "cpf", "text", "CPF", "CPF", "CPF"),
    new DefaultInputData(newPrestadorGraduation, setNewPrestadorGraduation, "graduation", "text", "Formação", "Formação", "Formação"),
    new DefaultInputData(newPrestadorServiceType, setNewPrestadorServiceType, "serviceType", "text", "Tipo de serviço", "Tipo de serviço", "Tipo de serviço"),
    new DefaultInputData(newPrestadorContract, setNewPrestadorContrat, "contract", "text", "Contrato", "Contrato", "Contrato", undefined, false),
  ];

  function onSubmitUpdatePrestadorForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const updatedPrestador = new Prestador(
      newPrestadorName,
      newPrestadorState,
      newPrestadorCity,
      newPrestadorEmail,
      newPrestadorPhone,
      newPrestadorGraduation,
      newPrestadorServiceType,
      newPrestadorPrice,
      curPrestador.avaliacao,
      newPrestadorRg,
      newPrestadorCpf,
      newPrestadorLocaisAtendimento,
      newPrestadorContract,
      curPrestador.id,
    );
    setCurPrestador(updatedPrestador);
    alert("Prestador atualizado com sucesso!");
  }

  function setPhoneCallback(inputValue: string) {
    setFormattedValue(
      newPrestadorPhone, 
      inputValue, 
      setNewPrestadorPhone, 
      formatPhone, 
      "x", "-", "(", ")", " "
    );
  }

  function setRGCallback(inputValue: string) {
    setFormattedValue(
      newPrestadorRg, 
      inputValue, 
      setNewPrestadorRg, 
      formatRG, 
      "x", "-", "."
    );
  }

  function setCPFCallback(inputValue: string) {
    setFormattedValue(
      newPrestadorCpf, 
      inputValue, 
      setNewPrestadorCpf, 
      formatCPF, 
      "x", ".", "-"
    );
  }

  return (
    <section>
      <form onSubmit={onSubmitUpdatePrestadorForm} className={styles.form} >
        {inputs.map(({ value, onChange, data, id, label, placeholder, required, title, type }) => (
          <DefaultInput
            value={value}
            onChange={onChange}
            data={data}
            id={id}
            label={label}
            placeholder={placeholder}
            required={required}
            title={title}
            type={type}
            key={id}
          />
        ))}
        <LocalAtendimentoInput
          locaisSelecionados={newPrestadorLocaisAtendimento}
          setLocaisSelecionados={setNewPrestadorLocaisAtendimento}
        />
        <DefaultButton label="Atualizar cadastro" type="submit" />
      </form>
    </section>
  )
}

export default UpdatePrestadorForm;