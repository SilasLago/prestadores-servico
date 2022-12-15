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
          <figure className={styles.figure} onClick={onOpenUserInfo}>
            <img
              alt="Imagem de usuário"
              src={userImg}
              className={styles.figure__picture}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </figure>
          {showUserInfo && <UserInfo onClose={onCloseUserInfo} />}
        </div>
      )}
    </header>
  )
}

export default Header;