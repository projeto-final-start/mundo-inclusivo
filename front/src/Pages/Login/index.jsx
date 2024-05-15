import "./Login.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from '../../components/Container'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <Header />
      <Container>
        <div className="login-page">
          <figure>
            <img src="front\public\backgroundlogin.svg" alt="background-img" className="background-image" />
          </figure>

          
          <div className="caixa-login">
            <form className="form-caixa">
            <h1 className="login">Login</h1>
              <input className="email" type="email" id="email-login" placeholder="E-mail ou CPF" />
              <input className="senha" type="password" id="senha-login" placeholder="Senha" />

              <div className="caixa">
                <input type="checkbox" id="remember" name="lembre-me" />
                <label className="remember-login" htmlFor="lembre-me">Lembre-me</label>
                <Link className="semsenha" to="#">Esqueceu a senha?</Link>
              </div>

              <button className="botao-login" type="submit">Login</button>

              <div className="semconta-grupo">
                <label className="semconta" htmlFor="Não tem conta?">Não tem conta?</label>
                <Link className="criarconta" to="#">Criar nova conta</Link>
              </div>

            </form >

            <figure>
              <img src="front\public\fotologin.svg" alt="Foto" className="foto" />
            </figure>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Login;