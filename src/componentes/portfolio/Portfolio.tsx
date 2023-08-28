import './Portfolio.css'
import Fundo from './../../assets/images/fundo.jpg'
import Foto from './../../assets/images/perfil-photo.png'

function Portfolio(){
    return(
        <div style={{backgroundImage: `url(${Fundo})`}} className="portfolio-content">
            <img src="" alt="" />
            <div className="text-area">
                <div className='text'>
                    <h1>Olá, bem vindo(a) ao meu site!</h1>
                    <p className="desc">Meu nome é Pedro Henrique de Souza Ribeiro e tenho 17 anos de idade.<br />
                    Sou estudante de Técnico em Informática no Intituto Federal De Mato Grosso do Sul e possuo algum conhecimento
                     na área musical, mais especificamente em instrumentos de sopro.<br />
                    Sou nativo de Naviraí, Mato Grosso do Sul, e é nela onde resido atualmente.<br />
                    Como hobbies, gosto de sair para beber com meus amigos, ir a aula do tere, jogar jogos de simulação e outros,<br />
                    gosto de jogar volêi, gosto de ler hots literários.
                    <br /><br />
                    Qualquer dúvida entre em contato comigo.
                    Até logo! :D
                    </p>
                </div>
                <img src={Foto} alt="" />
            </div>
        </div>
    )
}

export default Portfolio