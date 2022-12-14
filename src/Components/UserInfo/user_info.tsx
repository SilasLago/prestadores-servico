import { User, UserInput } from "./utils/classes";
import styles from "./user_info.module.scss";
import { MouseEventHandler, useState } from "react";

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

  const inputs: Array<UserInput> = [
    new UserInput(name, setName, "text", "Nome", "Nome", "Nome"),
    new UserInput(department, setDepartment, "text", "Departamento", "Departamento", "Departamento"),
    new UserInput(office, setOffice, "text", "Cargo", "Cargo", "Cargo"),
    new UserInput(branch, setBranch, "text", "Filial", "Filial", "Filial"),
    new UserInput(phone, setPhone, "text", "Telefone", "Telefone", "Telefone"),
    new UserInput(email, setEmail, "text", "Email", "Email", "Email"),
  ]

  return (
    <div className={styles.background}>
      <section className={styles.body}>
        <div className={styles.body__header}>
          <h1 className={styles.body__header__title}>
            Informações de usuário
          </h1>
          <div className={styles.body__header__close} onClick={onClose} />
        </div>
        <form className={styles.inputs}>
          {inputs.map(input => (
            <div className={styles.holder}>
              <label className={styles.holder__label}>{input.label}</label>
              <input
                className={styles.holder__input}
                type={input.type}
                value={input.value}
                onChange={e => input.onChange(e.target.value)}
                title={input.title}
                placeholder={input.placeholder}
              />
            </div>
          ))}
          <div className={styles.holder}>
            <button className={styles.holder__button}>
              Salvar
            </button>
          </div>
        </form>
        <hr />
      </section>
    </div>
  )
}

export default UserInfo;