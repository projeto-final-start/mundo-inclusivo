import "./login.css";
import { Link } from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useNavigate } from "react-router-dom";


function Login() {
  const signIn = useSignIn();
  const navigate = useNavigate();

  async function fazerLogin(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const jsonForm = Object.fromEntries(form.entries());

    const requisicao = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: jsonForm.usuario,
        password: jsonForm.senha,
        expiresInMins: 2, // optional, defaults to 60
      })
    })

    const response = await requisicao.json();

    if (signIn({
      auth: {
        token: response.token,
        type: 'Bearer'
      },
      userState: {
        firstName: response.firstName,
        id: response.id
      }
    })) {

      response.tipo = "Cliente";

      if (response.tipo == "Cliente" ) {
        navigate('/dashboard/agendaespecialista');
      }else {
        // trocar rota
        navigate('/dashboard/agendaespecialista');
      }

    } else {
      alert("Houve um erro ao definir as configurações de autenticação")
    }

  }

  return (
    <>
      <div className="login-page">
        <div className="caixa-login" >
          <form method="post" className="form-caixa" onSubmit={fazerLogin}>
            <h1 className="login">Login</h1>
            <input
              className="email"
              // type="email"
              type="text"
              id="email-login"
              name="usuario"
              placeholder="E-mail ou CPF "
              defaultValue="sophiab"
            />

            <input
              className="senha"
              type="password"
              id="senha-login"
              name="senha"
              placeholder="Senha"
              defaultValue="sophiabpass"
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

            <button type="submit" className="btn-login"> Agende Online </button>

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
