import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <section className="home">
      <div>
        <h1>Mundo</h1>
        <span>Inclusivo</span>
        <p>
          Consultas humanizadas e seguras <br /> para você e sua família
        </p>
        <Link to="/login" className="btn-home">
          Agende Online
        </Link>
      </div>
      <figure>
        <img className="img-home" src="/foto-home.svg" alt="Imagem de home" />
      </figure>
    </section>
  )
}

export default Home
