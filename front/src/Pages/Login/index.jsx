import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <figure>
        <img
          src="./src/assets/background.svg"
          alt="background-img"
          className="background-image"
        />
      </figure>
      <div className="login-page">
        <div className="caixa-login">
          <form className="form-caixa">
            <h1 className="login">Login</h1>
            <input
              className="email"
              type="email"
              id="email-login"
              placeholder="E-mail ou CPF"
            />
            <input
              className="senha"
              type="password"
              id="senha-login"
              placeholder="Senha"
            />

            <div className="caixa">
              <input type="checkbox" id="remember" name="lembre-me" />
              <label className="remember-login" htmlFor="lembre-me">
                Lembre-me
              </label>
              <Link className="semsenha" to="#">
                Esqueceu a senha?
              </Link>
            </div>

            {/* <button className="botao-login" type="submit">
              Login
            </button> */}
            <Link to="/" className="btn-home">
              Agende Online
            </Link>

            <div className="semconta-grupo">
              <label className="semconta" htmlFor="Não tem conta?">
                Não tem conta?
              </label>
              <Link className="criarconta" to="#">
                Criar nova conta
              </Link>
            </div>
          </form>

          <figure>
            <img src="front\public\fotologin.svg" alt="Foto" className="foto" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Login;
