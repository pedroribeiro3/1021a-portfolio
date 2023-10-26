import './Contato.css'
import { useState } from 'react'

function Contato(){
    const [nome,setNome]=useState("")
    function TrataNome(e:React.ChangeEvent<HTMLInputElement>){
        setNome(e.target.value)
    }
    const [email,setEmail]=useState("")
    function TrataEmail(e:React.ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
    }
    const [phonenumber,setTel]=useState("")
    function TrataTel(e:React.ChangeEvent<HTMLInputElement>){
        setTel(e.target.value)
    }

    return(
        <section>
            <section className='destaque'>
                <div>
                    <h1>Contato</h1>
                    <p>Dizponibilizando diversos canais de comunicações, afim de proporcionar melhor atendimento e eficiência.</p>
                </div>
                <img className='bg-image' src="https://vireachave.blog.br/wp-content/uploads/2019/05/novo-corretor-de-im%C3%B3veis.jpg" alt="Clientes sendo atendidos por um gerente" />
            </section>
            <section className='contato'>
                <main>
                    <h1>Envie-nos uma mensagem</h1>
                    <form action="">
                            <div className='insertareas'>
                                <label>Nome</label>
                                <input onChange={TrataNome} type="text" placeholder='Seu nome'/>
                                {nome && <p>Nome: {nome} </p>}
                            </div>
                            <div className='formasdecontato'>
                                <div className='insertareas'>
                                    <label>Email</label>
                                    <input onChange={TrataEmail} type="text" placeholder='Email'/>
                                    {email && <p>Email: {email} </p>}
                                </div>
                                <div className='insertareas'>
                                    <label>Telefone</label>
                                    <input onChange={TrataTel} type="tel" placeholder='Telefone' />
                                    {phonenumber && <p>Telefone: {phonenumber} </p>}
                                </div>
                            </div>
                            <div className='mensagem'>
                                <label>Mensagem</label>
                                <textarea placeholder='Sua mensagem'  min-length='20'/>
                            </div>
                        <button>Enviar mensagem</button>
                    </form>
                </main>
                <div className='localmap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58734.12216471463!2d-54.2028094!3d-23.064764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b8f03c5e673b5%3A0xcce34838a9d2b6e2!2sNavira%C3%AD%2C%20MS%2C%2079950-000!5e0!3m2!1spt-BR!2sbr!4v1697629222160!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                </div>
            </section>
        </section>
    )
}

export default Contato