import './Rodape.css'

const Rodape = () => {
    
    return (
        <footer className='footer' style={{backgroundImage: `url(${require("./fundo.png")})` }}>
           
            <div className='icones'>
                <img src='/imagens/fb.png' alt='' ></img>
                <img src='/imagens/tw.png' alt='' ></img>
                <img src='/imagens/ig.png' alt=''></img>
            </div>
            <div>
                <img src='/imagens/logo.png' alt='' ></img>
            </div>
            <div>
                <h6>Desenvolvido por Alura</h6>
            </div>
        </footer>
    )

}


export default Rodape;