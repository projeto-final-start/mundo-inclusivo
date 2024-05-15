import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import './Page404.css'


function Page404 () {
    return (
        <>
            <Header/>
            <Container>
                <h2 className='titulo2-404'>Algo de errado não está certo!</h2>
                <div className='texto-404'>
                    <span className='texto_grande-404'>404</span> <br />
                    <strong className='texto_preto-404'>Página Não Localizada</strong>
                </div>
            </Container>
            <Footer/>
        
        </>
    )
}

export default Page404


