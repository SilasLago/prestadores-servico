import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import { FormEvent, useState } from "react";
import { states } from "Utils/datas";
import { cleanString, formatCPF, formatPhone, formatRG } from "Utils/formatters";
import styles from "./register_prestador.module.scss";
import personImg from "./src/user.png";

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
    new DefaultInputData(state, setState, "state", "select", "Estado", "Estado", "Estado", states),
    new DefaultInputData(city, setCity, "city", "text", "Cidade", "Cidade", "Cidade"),
    new DefaultInputData(email, setEmail, "email", "email", "Email", "Email", "Email"),
    new DefaultInputData(phone, setFormattedPhone, "phone", "text", "Telefone", "Telefone", "Telefone"),
    new DefaultInputData(qualification, setQualification, "qualification", "text", "Formação", "Formação", "Formação"),
    new DefaultInputData(serviceType, setServiceType, "serviceType", "text", "Tipo de serviço", "Tipo de serviço", "Tipo de serviço"),
    new DefaultInputData(price, setPrice, "price", "number", "Preço", "Preço", "Preço"),
    new DefaultInputData(rg, setFormattedRg, "rg", "text", "RG", "RG", "RG"),
    new DefaultInputData(cpf, setFormattedCpf, "cpf", "text", "CPF", "CPF", "CPF"),
    new DefaultInputData(contract, setContract, "contract", "text", "Contrato", "Contrato", "Contrato"),
  ]

  function typedBackspace(oldValue: string, curValue: string): boolean {
    return oldValue.length > curValue.length;
  }

  function removeLastChar(value: string, ...chars: Array<string>): string {
    const valueCleaned = cleanString(value, ...chars);
    return valueCleaned.slice(0, valueCleaned.length - 1);
  }

  function setFormattedCpf(inputCpf: string) {
    const chars = ["x", ".", "-"];
    if(typedBackspace(cpf, inputCpf)) {
      inputCpf = removeLastChar(inputCpf, ...chars);
    }
    setCpf(formatCPF(inputCpf, ...chars));
  }

  function setFormattedPhone(inputPhone: string) {
    const chars = ["(", ")", " ", "-", "x"];
    if(typedBackspace(phone, inputPhone)) {
      inputPhone = removeLastChar(inputPhone, ...chars);
    }
    setPhone(formatPhone(inputPhone, ...chars));
  }

  function setFormattedRg(inputRg: string) {
    const chars = ["x", ".", "-"];
    if(typedBackspace(rg, inputRg)) {
      inputRg = removeLastChar(inputRg, ...chars);
    }
    setRg(formatRG(inputRg, ...chars));
  }

  function onRegisterFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Prestador cadastrado com sucesso!");
    resetForm();
  }

  function resetForm() {
    setName("");
    setState(states[0].value);
    setCity("");
    setEmail("");
    setPhone("");
    setQualification("");
    setServiceType("");
    setPrice(0);
    setRg("");
    setCpf("");
    setContract("");
  }

  return (
    <section className={styles.background}>
      <form onSubmit={onRegisterFormSubmit} className={styles.form}>
        <div className={styles.form__header}>
          <img
            alt="Imagem de usuário"
            src={personImg}
            className={styles.form__header__img}
          />
          <h1 className={styles.form__header__title}>
            Cadastro de prestador
          </h1>
        </div>
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