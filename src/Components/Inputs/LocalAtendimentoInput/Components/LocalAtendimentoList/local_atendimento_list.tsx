import { PrestadorLocalDeAtendimento } from "Utils/classes";
import styles from "./local_atendimento_list.module.scss";

interface ILocalAtendimento {
  locaisAtendimento: Array<PrestadorLocalDeAtendimento>,
  setLocaisAtendimento: React.Dispatch<React.SetStateAction<PrestadorLocalDeAtendimento[]>>
}
function LocalAtendimentoList({ locaisAtendimento, setLocaisAtendimento }: ILocalAtendimento) {
  
  function removeItem(item: PrestadorLocalDeAtendimento) {
    setLocaisAtendimento(locaisAtendimento.filter(localAtendimento => !(localAtendimento.city === item.city && localAtendimento.state === item.state) ))
  }

  return (
    <ul className={styles.list}>
      {locaisAtendimento.map((localAtendimento) => (
        <li key={`${localAtendimento.state}-${localAtendimento.city}`} className={styles.list__item}>
          <span>{localAtendimento.state} - {localAtendimento.city}</span>
          <span className={styles.list__item__exclude} onClick={_ => removeItem(localAtendimento)}></span>
        </li>
      ))}
    </ul>
  )
}

export default LocalAtendimentoList;