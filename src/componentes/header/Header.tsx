import './Header.css'
import LinkNav from '../linknav/LinkNav'
import Logo from './../../assets/images/logo-topo.png'

function Header(){
    return(
        <header>
                <div>
                    <img src={Logo} alt="Topo Logo Image"></img>
                </div>
                <nav className='navegacao-header'>
                    <ul>
                        <li><LinkNav url='/home' texto='Inicio'/></li>
                        <li><LinkNav url='/portfolio' texto='Portfólio'/></li>
                        <li><LinkNav url='/avaliacoes' texto='Avaliações'/></li>
                        <li><LinkNav url='/contato' texto='Contatos'/></li>
                        <li>|</li>
                        <li><LinkNav url='/registro' texto='Registrar-se'/></li>
                        <li><LinkNav url='/login' texto='Login'/></li>

                    </ul>
                </nav>
        </header>
    )
}

export default Header