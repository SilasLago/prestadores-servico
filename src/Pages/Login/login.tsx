import GoogleRecaptcha from "Components/GoogleReCaptcha/google_recaptcha";
import { useAuth } from "Hooks/useAuth/use_auth";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";

function Login() {

  const [userLogin, setUserLogin] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const auth = useAuth();
  const navigate = useNavigate();

  function submitForm(e: FormEvent) {
    e.preventDefault();
    const token = "E4QW65E4QW98AS41FAS4AS31279DQA1QW3";
    const userId = 40;
    auth.authenticate(token, userId);
    navigate("/home", { replace: true });
  }

  useEffect(() => {
    auth.deauthenticate();
  })

  return (
    <section className={styles.background}>
      <form onSubmit={submitForm} id="demo-form" className={styles.form}>
        <h1 className={styles.form__title}>
          Acesso ao sistema
        </h1>
        <div className={styles.form__container}>
          <label className={styles.form__container__label}>
            Usuário
          </label>
          <input
            className={styles.form__container__input}
            placeholder="Usuário"
            title="Usuário"
            type="text"
            value={userLogin}
            onChange={e => setUserLogin(e.target.value)}
          />
        </div>
        <div className={styles.form__container}>
          <label className={styles.form__container__label}>
            Senha
          </label>
          <input
            placeholder="Senha"
            title="Senha"
            type="password"
            className={styles.form__container__input}
            value={userPassword}
            onChange={e => setUserPassword(e.target.value)}
          />
        </div>
        <div>
          <GoogleRecaptcha />
        </div>
        <div className={styles.form__container}>
          <button className={styles.form__container__button} type="submit">
            Entrar
          </button>
        </div>
        <div className={styles.form__container}>
          <Link to="password-recovery">
            Esqueci minha senha
          </Link>
        </div>
        <hr />
      </form>
    </section>
  )
}

export default Login;