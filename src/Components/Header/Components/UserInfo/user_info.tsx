import { Analista } from "./utils/classes";
import styles from "./user_info.module.scss";
import { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { branchs, departments } from "Utils/datas";
import { DefaultInputData } from "Components/Inputs/DefaultInput/utils/classes";
import DefaultModal from "Components/DefaultModal/default_modal";

interface IUserInfo {
  onClose: MouseEventHandler<HTMLDivElement>
}
function UserInfo({ onClose }: IUserInfo) {

  const curAnalista = new Analista(
    "Silas Lago",
    "TI",
    "Desenvolvedor de Sistemas",
    "0000 - Matriz",
    "(41) 99884-3974",
    "juanfsa@live.com"
  );

  const [name, setName] = useState<string>(curAnalista.nome);
  const [department, setDepartment] = useState<string>(curAnalista.departamento);
  const [office, setOffice] = useState<string>(curAnalista.cargo);
  const [branch, setBranch] = useState<string>(curAnalista.filial);
  const [phone, setPhone] = useState<string>(curAnalista.telefone);
  const [email, setEmail] = useState<string>(curAnalista.email);

  const desapear = useDesapear();

  const inputs: Array<DefaultInputData> = [
    new DefaultInputData(name, setName, "name", "text", "Nome", "Nome", "Nome"),
    new DefaultInputData(department, setDepartment, "department", "select", "Departamento", "Departamento", "Departamento", departments),
    new DefaultInputData(office, setOffice, "office", "text", "Cargo", "Cargo", "Cargo"),
    new DefaultInputData(branch, setBranch, "branch", "select", "Filial", "Filial", "Filial", branchs),
    new DefaultInputData(phone, setPhone, "phone", "text", "Telefone", "Telefone", "Telefone"),
    new DefaultInputData(email, setEmail, "email", "text", "Email", "Email", "Email"),
  ]

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const curAnalistaDataUpdated = new Analista(name, department, office, branch, phone, email);
    console.log(curAnalistaDataUpdated);
    alert("Usuário atualizado com sucesso!");
    closeUserInfo();
  }

  function closeUserInfo() {
    desapear.update(false);
    const event: React.MouseEvent<HTMLDivElement, MouseEvent> = {} as React.MouseEvent<HTMLDivElement, MouseEvent>;
    onClose(event);
  }

  useEffect(() => {
    desapear.update(true);
  })

  return (
    <DefaultModal
      size="sm"
      title="Informações de usuário"
      onClose={closeUserInfo}
    >
      <form onSubmit={onFormSubmit} className={styles.inputs}>
        {inputs.map(({ id, type, title, placeholder, label, value, onChange, data }) => (
          <DefaultInput
            key={id}
            id={id}
            type={type}
            title={title}
            placeholder={placeholder}
            label={label}
            value={value}
            onChange={onChange}
            data={data}
          />
        ))}
        <div className={styles.holder}>
          <div className={styles.holder__button}>
            <DefaultButton type="submit" label="Salvar" variant="red" />
          </div>
        </div>
      </form>
    </DefaultModal>
  )
}

export default UserInfo;