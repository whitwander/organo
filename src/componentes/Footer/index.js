import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div>
                <a href="#"><img src='/images/fb.png' alt='facebook' /></a>
                <a href='#'><img src='/images/tw.png' alt='twitter' /></a>
                <a href='#'><img src='/images/ig.png' alt='instagram' /></a>
            </div>
            <img src='/images/logo.png' alt='organo'/>
            <p>Desenvolvido por Alura.</p>
        </section>
    )
}

export default Footer