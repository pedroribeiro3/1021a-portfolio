import './Portfolio.css'
import Foto from './../../assets/images/perfil-photo.png'

function Portfolio(){
    return(
        <div className="portfolio-content">
            <img src="" alt="" />
            <div className="text-area">
                <img src={Foto} alt="" />
                <div className='text'>
                    <h1>Sobre mim:</h1>
                    <p className="desc">
                        Sou o Pedro Ribeiro e tenho 17 anos de idade. Nasci e moro no município de Naviraí. Sou estudante do sexto período de Informática <br />
                        para Internet no Instituto Federal de Mato Grosso do Sul, do Campus Naviraí. Sou uma pessoa esforçada, perfeccionista e muito criativa, <br />
                        e por isso, almejo seguir carreira na área de Arquitetura e Urbanismo, ou até mesmo alguma carreira do mesmo nicho.
                    </p>
                    <p className="desc">
                        Dentre dos diversos conhecimentos e habilidades, detacam-se conhecimento em música e informática. Estou apto para atender meus clientes <br />
                        da melhor maneira possível, promovendo conforto e qualidade. Sinta-se a vontáde para conhecer algum dos meus projetos que participei ou <br />
                        organizei clicando no botão abaixo. 
                    </p>
                    <p className="desc">
                        Para mais informações, contate: <br />
                        pedro.ribeiro3@estudante.ifms.edu.br <br />
                        (67) 00000-0000
                    </p>
                    <button>Conhecer projetos</button>
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio