import userImg from "./src/User.png";
import mayerLogo from "./src/logo_mayer.png";
import styles from "./header.module.scss";
import { useAuth } from "Hooks/useAuth/use_auth";
import UserInfo from "Components/UserInfo/user_info";
import { useState } from "react";

function Header() {

  const [showUserInfo, setShowUserInfo] = useState<boolean>(false);
  const auth = useAuth();

  function onCloseUserInfo() {
    setShowUserInfo(false);
  }

  function onOpenUserInfo() {
    setShowUserInfo(true);
  }

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
              onClick={onOpenUserInfo}
            />
          </figure>
          {showUserInfo && <UserInfo onClose={onCloseUserInfo} />}
        </div>
      )}
    </header>
  )
}

export default Header;