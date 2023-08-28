import './Footer.css'
import Discord from './../../assets/images/discord-logo.png'
import Instagram from './../../assets/images/instagram-logo.png'
import Facebook from './../../assets/images/facebook-logo.png'
import Twitter from './../../assets/images/twitter-logo.png'
import Youtube from './../../assets/images/youtube-logo.png'
import Idioma from './../../assets/images/idioma-logo.png'

function Footer(){
    return(
        <footer>
            <div className='total-footer'>   
                <div>
                    <div className='logo-footer'>
                        <img src="" alt="" />
                    </div>
                    <div className='redes-sociais'>
                        <ul>
                            <li><a href="#"><img src={Discord} alt="" /></a></li>
                            <li><a href="#"><img src={Instagram} alt="" /></a></li>
                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                            <li><a href="#"><img src={Twitter} alt="" /></a></li>
                            <li><a href="#"><img src={Youtube} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><h1>Produtos</h1></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Curso de Arquitetura</a></li>
                        <li><a href="#">Curso de Designer de Interiores</a></li>
                        <li><a href="#">Curso de Informática para Internet</a></li>
                        <li><a href="#">Curso de Música: Instrumentos de Sopro</a></li>
                    </ul>
                    <ul>
                        <li><h1>Empresa</h1></li>
                        <li><a href="#">Carreira</a></li>
                        <li><a href="#">Parceiros</a></li>
                        <li><a href="#">Torne-se um parceiro</a></li>
                        <li><a href="#">Contate-nos</a></li>
                        <li><a href="#">Para investidores</a></li>
                        <li><a href="#">Serviços profissionais</a></li>
                    </ul>
                    <ul>
                        <li><h1>Mais</h1></li>
                        <li><a href="#">Riber's Architeture and Home Design Site</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Centro de ajuda</a></li>
                        <li><a href="#">Localização</a></li>
                    </ul>
                    <ul>
                        <li><h1>Community</h1></li>
                        <li><a href="#">Discord Community</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </nav>
            </div>
            <div className='direitos-reservados'>
                <ul>
                    <li><p>© 2023 Riber's Architeture and Home Design Site</p></li>
                    <div>
                        <li><a href="#">Termos de uso</a></li>
                        <li><a href="#">Politicas de Privacidade</a></li>
                        <li><img src={Idioma} alt="" /><a href="#">Idioma</a></li>
                    </div>      
                </ul>
            </div>
        </footer>
    )   
}

export default Footer