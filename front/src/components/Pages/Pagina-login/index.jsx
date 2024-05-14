import Header from "../../components/Header";
import Footer from "../../components/Footer";


import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="login-page">
        <div>
          <img src="front\src\assets\fundao-login.svg" alt="background-img" className="background-image" />
          <div className="glass-effect"></div>
        </div>

        <div className="login-container">
          <div className="form-container">
            <h2>Login</h2>
            <form>
              <div className="input-group">
                <input type="email" id="email" name="email" placeholder="E-mail ou CPF" />
              </div>

              <div className="input-group">
                <input type="password" id="password" name="password" placeholder="Senha" />
              </div>

              <div className="lembre-forgot">
                <input type="checkbox" id="remember" name="lembre-me" />
                <label htmlFor="lembre-me">Lembre-me</label>
                <a href="#">Esqueceu sua senha?</a>
              </div>

              <button className="botao-login" type="submit">Login</button>
              <div className="semconta">
                <label htmlFor="Não tem conta?">Não tem conta?</label>
                <a href="#">Criar uma nova conta</a>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="front/src/assets/foto-login.svg" alt="Foto" className="foto" />
      </div>
      <Footer />
    </>
  );
}

export default Home;