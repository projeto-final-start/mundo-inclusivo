import "./login.css";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

function Login() {
  return (
    <>

      <div className="login-page">
        <div className="caixa-login" >
          <form className="form-caixa">
            <h1 className="login">Login</h1>
            <input
              className="email"
              type="email"
              id="email-login"
              placeholder="E-mail ou CPF "

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
              <Link className="semsenha" to="/RecuperacaoSenha">
                Esqueceu a senha?
              </Link>
            </div>

            {/* <button className="botao-login" type="submit">
              Login
            </button> -----Vamos alterar------- */}
            <Link to="/" className="btn-login">
              Agende Online
            </Link>

            <div className="semconta-grupo">
              <label className="semconta" htmlFor="Não tem conta?">
                Não tem conta?
              </label>
              <Link className="criarconta" to="/Cliente">
                Criar nova conta
              </Link>
            </div>
          </form>

          <figure>
            <img src="/src/assets/fotologin.svg" alt="Foto" className="fotologin" />
          </figure>
        </div>
      </div>
    </>
  );
}

export default Login;
