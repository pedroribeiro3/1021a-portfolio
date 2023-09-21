import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
import Banda from './../../assets/images/banda.png'
import FAC from './../../assets/images/fac.png'
import Informatica from './../../assets/images/informatica.png'
import Barbie from './../../assets/images/barbie.png'
type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Banda Musical Tom Jobim',
            descricao:"A banda musical Tom Jobim, é um projeto municipal de Naviraí-MS. Com o lema: #SouTomJobim, a banda leva o nome do municipio consigo por onde passa...",
            imagem:Banda
        },
        {
            id: 2,
            titulo:'Festival de Arte e Cultura IFMS',
            descricao:'O Festival de Arte e Cultura acontece anualmente no IFMS, contando com diversas atrações, oficinas e exposições para explorar a arte e cultura da sociedade...',
            imagem:FAC
        },
        {   
            id: 3,
            titulo:'Informática para Internet',
            descricao: "O curso de Informática para Internet é oferecido no IFMS Campus Naviraí, sendo trabalhado a programação de computadores e aplicativos para dispositivos móveis, é uma ótima oportunidade para quem almejam seguir tal carreira...",
            imagem:Informatica
        },
        {   
            id: 4,
            titulo:'Projeto Barbie com TypeScript',
            descricao: "Foi um projeto desenvolvido em sala de aula da unidade curricular de Frameworks 2, onde foi criado um site da Barbie na linguagem de programação TypeScript...",
            imagem:Barbie
        }
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        //Como eu faço para mudar o texto para "TERE"
        setTexto(e.target.value)
    }

    return (
        <>

            <div className='divisoria'><div></div></div>
            <div className="campo-de-pesquisa">
                <p>Buscar um projeto:</p>
                <input type="text" placeholder='Pesquisar...' onChange={TrataTexto} />
                       {texto && <p>Resultados para: {texto} </p>}
            </div>
            <main className="content-main">
                {   
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
            </main>
        </>
    )
}