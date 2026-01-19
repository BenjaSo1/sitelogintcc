import { useState } from "react";
import "../styles/profileinfop.css" 
import { useParams } from "react-router";

function Cardpublic() {
    const username = useParams();
    const [ perfil, setPerfil ] = useState('')
    const backendURL = "http://localhost:3000";
    if (!perfil) return <div>Usuario não encontrado</div>

    return (
 <div className="containerprofileinfo">
    <div className='bordaprofileinfo'>
        <div className='Cimacardp'>
            <div className='containerprofileinfop'>

            <div className="fotoprofileinfo">
                <img src="/fotopessoa.webp" className="fotopessoaperfil"></img>
                <strong>{perfil.nome}</strong>
                <span>{perfil.titulo}</span>
            </div>

            </div>

            <div className='containerbotoesesvg'>
                <div className='primeiralinha'>
                    <a href='' target='_blank' rel='noopenner noreferrer'>
                    <button className='buttoniconcima'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
                   <path strokeLinecap="round" strokeLinejoin="round"  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span>Modo offline</span>
                    </button>
                    </a>

                    <a href='' target='_blank' rel='noopenner noreferrer'>
                    <button className='SalvarnaAgendabutton'> Salvar na Agenda </button>
                    </a>

                    <a href='' target='_blank' rel='openner noreferrer'>
                    <button className='buttoniconcima'>
                    <img src='/icons/card.svg'></img>
                    <span>Enviar cartão</span>
                    </button>
                    </a>


                </div>

                <div className='segundalinha'>


                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${perfil.email}`} target='_blank' rel='noopenner noreferrer'>
                <div className='botoeslogos'>
                    <img src='/icons/mail.svg' alt='Logo do Email'/>
                    <span>Gmail</span>
                </div>
                </a>

                <a href={`https://wa.me/55${perfil.whatsapp_numero}`} target='_blank' rel='noopenner noreferrer'>
                <div className='botoeslogos'>
                    <img src='/icons/whatsapp.svg' alt='Logo do Whatsapp'/>
                    <span>Whatsapp</span>
                </div>
                </a>

                <a href={perfil.maps_url} target='_blank' rel='noopenner noreferrer' className='botoeslogos'>
                <div className='botoeslogos'>
                    <img src='/icons/maps.svg' alt='Logo do Whatsapp'/>
                    <span>Mapa</span>
                </div>
                </a>



                </div>

            </div>

            </div> 

            <div className='Mediocardp'>

            <div className='Descricaomediop'>

            </div>
            <div className='barracimadescricao'>

            </div>

            <span>{perfil.descricao}</span>

            <div className='barrabaixodescricao'>


            </div>

            </div>

            <div className='Baixocardp'>
            <a href='' target='_blank' rel='noopener noreferrer'>
             <button>
                <img src='/icons/pix.svg' alt='Logo do Pix'></img>
                <span>Pix</span>
            </button>
            </a>


            <a href={`mailto:${perfil.email}`} target='_blank' rel='noopener noreferrer'>
            <button>
                <img src='/icons/mail.svg' alt='Logo do Email'></img>
                <span>Email</span>
            </button>
            </a>

            <a href={perfil.instagram_url} target='_blank' rel='noopener noreferrer'>
             <button>
                <img src='/icons/instagram.svg' alt='Logo do Instagram'></img>
                <span>Instagram</span>
            </button>
            </a>


            <a href={`https://wa.me/${perfil.whatsapp_numero}`} target='_blank' rel='noopener noreferrer'>
             <button>
                <img src='/icons/whatsapp.svg' alt='Logo do Whatsapp'></img>
                <span>Whatsapp</span>
            </button>
            </a>


            </div>

            </div>

        </div> 
    )
}


export default Cardpublic