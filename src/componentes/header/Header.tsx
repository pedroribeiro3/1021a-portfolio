import './Header.css'
import Link from './../link/Link'
import Logo from './../../assets/images/logo-topo.png'

function Header(){
    return(
        <header>
                <div>
                    <img src={Logo} alt="Topo Logo Image"></img>
                </div>
                <nav className='navegacao-header'>
                    <ul>
                        <li><Link texto='Inicio'/></li>
                        <li><Link texto='Portfólio'/></li>
                        <li><Link texto='Avaliações'/></li>
                        <li><Link texto='Contatos'/></li>
                        <li>|</li>
                        <li><Link texto='Registrar-se'/></li>
                        <li><Link texto='Login'/></li>

                    </ul>
                </nav>
        </header>
    )
}

export default Header