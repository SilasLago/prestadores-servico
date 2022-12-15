import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { useState } from "react";
import { formatCPF, formatPhone } from "Utils/formatters";
import styles from "./register_prestador.module.scss";

function RegisterPrestador() {

  const [name, setName] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [rg, setRg] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [contract, setContract] = useState<string>("");
  
  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(name, setName, "name", "text", "Nome", "Nome", "Nome"),
    new DefaultInputData(state, setState, "state", "text", "Estado", "Estado", "Estado"),
    new DefaultInputData(city, setCity, "city", "text", "Cidade", "Cidade", "Cidade"),
    new DefaultInputData(email, setEmail, "email", "email", "Email", "Email", "Email"),
    new DefaultInputData(phone, setFormattedPhone, "phone", "text", "Telefone", "Telefone", "Telefone"),
    new DefaultInputData(qualification, setQualification, "qualification", "text", "Formação", "Formação", "Formação"),
    new DefaultInputData(serviceType, setServiceType, "serviceType", "text", "Tipo de serviço", "Tipo de serviço", "Tipo de serviço"),
    new DefaultInputData(price, setPrice, "price", "number", "Preço", "Preço", "Preço"),
    new DefaultInputData(rg, setRg, "rg", "number", "RG", "RG", "RG"),
    new DefaultInputData(cpf, setFormattedCpf, "cpf", "text", "CPF", "CPF", "CPF"),
    new DefaultInputData(contract, setContract, "contract", "text", "Contrato", "Contrato", "Contrato"),
  ]

  function setFormattedCpf(cpf: string) {
    const cpfNumbers = cpf.replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll("x", "");
    setCpf(formatCPF(cpfNumbers));
  }

  function setFormattedPhone(phone: string) {
    const phoneNumbers = phone.replaceAll("x", "")
    .replaceAll(" ", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("-", "");
    setPhone(formatPhone(phoneNumbers));
  }

  return (
    <section className={styles.background}>
      <form className={styles.form}>
        <h1 className={styles.form__title}>
          Cadastro de prestador
        </h1>
        <hr/>
        {inputs.map(({ id, label, onChange, placeholder, title, type, value, data }) => (
          <DefaultInput
            key={id}
            type={type}
            id={id}
            label={label}
            onChange={onChange}
            placeholder={placeholder}
            title={title}
            value={value}
            data={data}
          />
        ))}
        <DefaultButton type="submit" label="Cadastrar" />
        <hr/>
      </form>
    </section>
  )
}

export default RegisterPrestador;