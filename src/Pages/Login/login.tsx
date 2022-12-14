import GoogleRecaptcha from "Components/GoogleReCaptcha/google_recaptcha";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";

function Login() {

  return (
    <section className={styles.background}>
      <form id="demo-form" className={styles.form}>
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