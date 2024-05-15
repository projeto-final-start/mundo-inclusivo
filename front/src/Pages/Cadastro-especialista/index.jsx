import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import "./Cadastro.css";


function Cadastro() {
    return (
        <>
            <Header />
            <Container>
                <div className="Cadastro-page">
                    <figure>
                        <img src="front\public\backgroundlogin.svg" alt="imagem de fundo" />
                    </figure>

                    <div>
                        <form action="Cadastro">
                            <h1 className="Cadastro">Cadastro</h1>
                            <input className="Nome-cad" type="text" id="nome" placeholder=" Nome e Sobrenome" />

                            <input className="email-cad" type="email" id="email" placeholder="E-mail" />

                            <input className="Senha-cad" type="password" id="senha" placeholder="Senha" />
                            <input className="numero-cad" type="text" id="numero" placeholder="Número de celular" />
                            <input className="CPF-cad" type="text" id="CPF" placeholder="CPF" />
                            <input className="genero-cad" type="list" datalist="Masculino" id="genero" placeholder="Gênero" />
                            <input type="radio" name="sexo" id="cmasc" value="Homem"/>
                            <input type="radio" name="sexo" id="cfem" value="Mulher"/>
                        </form>
                    </div>

                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Cadastro