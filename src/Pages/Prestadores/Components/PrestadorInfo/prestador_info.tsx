import { Prestador } from "Pages/RegisterPrestador/utils/classes";
import { states } from "Utils/datas";
import styles from "./prestador_info.module.scss";

interface IPrestadorInfo {
  id: number,
  onClose: React.MouseEventHandler<HTMLDivElement>
}
function PrestadorInfo({ id, onClose }: IPrestadorInfo) {

  const curPrestador = new Prestador(
    "Charlie Brown Junior", 
    states[0].value, 
    "Curitiba", 
    "charliebrown@gmail.com",
    "(41) 9 9999-9999",
    "Administração",
    "Entragas",
    1500.59,
    10,
    "84.984.984-89",
    "111.154.487-52",
    "https://www.contratos.com.br/grupomayer/charliebrownjunior/"
  );

  return (
    <div className={styles.background}>
      <section className={styles.info}>
        <div className={styles.info__header}>
          <h1 className={styles.info__header__title}>
            Informações sobre: {id}
          </h1>
          <div className={styles.info__header__close} onClick={onClose} />
        </div>
        <hr />
        <div>
          oi
        </div>
        <hr />
        <div className={styles.info__actions}>
          <h2 className={styles.info__actions__title}>
            Ações
          </h2>
          <div className={styles.info__actions__body}>

          </div>
        </div>
      </section>
    </div>
  )
}

export default PrestadorInfo;