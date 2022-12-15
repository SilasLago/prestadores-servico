import { User, UserInput } from "./utils/classes";
import styles from "./user_info.module.scss";
import { FormEvent, MouseEventHandler, useEffect, useState } from "react";
import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";
import { useDesapear } from "Hooks/useDesapear/useDesapear";
import { branchs, departments, offices } from "Utils/datas";

interface IUserInfo {
  onClose: MouseEventHandler<HTMLDivElement>
}
function UserInfo({ onClose }: IUserInfo) {

  const curUser = new User(
    "Silas Lago",
    "TI",
    "Desenvolvedor de Sistemas",
    "0000 - Matriz",
    "(41) 99884-3974",
    "juanfsa@live.com"
  );

  const [name, setName] = useState<string>(curUser.nome);
  const [department, setDepartment] = useState<string>(curUser.departamento);
  const [office, setOffice] = useState<string>(curUser.cargo);
  const [branch, setBranch] = useState<string>(curUser.filial);
  const [phone, setPhone] = useState<string>(curUser.telefone);
  const [email, setEmail] = useState<string>(curUser.email);

  const desapear = useDesapear();

  const inputs: Array<UserInput> = [
    new UserInput(name, setName, "name", "text", "Nome", "Nome", "Nome"),
    new UserInput(department, setDepartment, "department", "select", "Departamento", "Departamento", "Departamento", departments),
    new UserInput(office, setOffice, "office", "select", "Cargo", "Cargo", "Cargo", offices),
    new UserInput(branch, setBranch, "branch", "select", "Filial", "Filial", "Filial", branchs),
    new UserInput(phone, setPhone, "phone", "text", "Telefone", "Telefone", "Telefone"),
    new UserInput(email, setEmail, "email", "text", "Email", "Email", "Email"),
  ]

  function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userDataUpdated = new User(name, department, office, branch, phone, email);
    console.log(userDataUpdated);
    alert("Usuário atualizado com sucesso!");
    CloseUserInfo();
  }

  function CloseUserInfo() {
    desapear.update(false);
    const event: React.MouseEvent<HTMLDivElement, MouseEvent> = {} as React.MouseEvent<HTMLDivElement, MouseEvent>;
    onClose(event);
  }

  useEffect(() => {
    desapear.update(true);
  })

  return (
    <div className={styles.background}>
      <section className={styles.body}>
        <div className={styles.body__header}>
          <h1 className={styles.body__header__title}>
            Informações de usuário
          </h1>
          <div className={styles.body__header__close} onClick={CloseUserInfo} />
        </div>
        <hr />
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
        <hr />
      </section>
    </div>
  )
}

export default UserInfo;