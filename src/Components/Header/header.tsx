import userImg from "./src/User.png";
import mayerLogo from "./src/logo_mayer.png";
import styles from "./header.module.scss";
import { useAuth } from "Hooks/useAuth/use_auth";

function Header() {

  const auth = useAuth();

  return (
    <header className={styles.header}>
      <figure>
        <img
          alt="Logo do Grupo Mayer"
          src={mayerLogo}
          className={styles.mayer}
        />
      </figure>
      {auth.isAuthenticated() && (
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
      )}
    </header>
  )
}

export default Header;