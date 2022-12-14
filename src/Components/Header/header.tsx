import userImg from "./src/User.png";
import mayerLogo from "./src/logo_mayer.png";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <figure>
        <img
          alt="Logo do Grupo Mayer"
          src={mayerLogo}
          className={styles.mayer}
        />
      </figure>
      <div className={styles.user}>
        <div className={styles.user__message}>
          <small className={styles.user__message__welcome}>
            Bem vindo,
          </small>
          <span className={styles.user__message__name}>
            Silas Lago
          </span>
        </div>
        <figure>
          <img
            alt="Imagem de usuário"
            src={userImg}
            className={styles.user__picture}
          />
        </figure>
      </div>
    </header>
  )
}

export default Header;