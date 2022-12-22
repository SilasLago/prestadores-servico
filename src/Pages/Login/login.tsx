import DefaultInput from "Components/Inputs/DefaultInput/default_input";
import GoogleRecaptcha from "Components/GoogleReCaptcha/google_recaptcha";
import { useAuth } from "Hooks/useAuth/use_auth";
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import DefaultButton from "Components/Inputs/DefaultButton/default_button";

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
    navigate("/list/prestadores", { replace: true });
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
        <DefaultInput
          id="user"
          label="Usuário"
          placeholder="Usuário"
          title="Usuário"
          type="text"
          onChange={setUserLogin}
          value={userLogin}
          isPositionFixed={false}
        />
        <DefaultInput
          id="password"
          label="Senha"
          placeholder="Senha"
          title="Senha"
          type="password"
          onChange={setUserPassword}
          value={userPassword}
          isPositionFixed={false}
        />
        <GoogleRecaptcha />
        <div className={styles.button}>
          <DefaultButton label="Entrar" type="submit" />
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