import '../styles/profileinfo.css'

function Profileinfo() {
    return (
        <div className="containerprofileinfo">

            <div className='bordaprofileinfo'>

            <div className='Cimacardp'>

            <div className='containerprofileinfop'>

            <div className="fotoprofileinfo">
                <img src="/fotopessoa.webp" className="fotopessoaperfil"></img>
                <strong>Benjamin Soares</strong>
                <span>Programador</span>
            </div>

         </div> {/* containerprofileinfop */}

            <div className='containerbotoesesvg'>
                <div className='primeiralinha'> {/* Modo offline, botão e enviar cartão */}
                    <button className='buttoniconcima'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6" >
                   <path strokeLinecap="round" strokeLinejoin="round"  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span>Modo offline</span>
                    </button>

                    <button className='SalvarnaAgendabutton'> Salvar na Agenda </button>

                    <button className='buttoniconcima'>
                    <img src='/icons/card.svg'></img>
                    <span>Enviar cartão</span>
                    </button>


                </div>

                <div className='segundalinha'> {/* Email, Whatsapp e maps */}

                <button>
                    <img src='/icons/mail.svg' alt='Logo do Email'></img>
                    <span>Gmail</span>
                </button>

                <button>
                    <img src='/icons/whatsapp.svg' alt='Logo do Whatsapp'></img>
                    <span>Whatsapp</span>
                </button>

                <button>
                    <img src='/icons/maps.svg' alt='Logo do Whatsapp'></img>
                    <span>Mapa</span>
                </button>


                </div>

            </div>

            </div> {/* Cimacardp */}

            <div className='Mediocardp'>

            <div className='Descricaomediop'>

            </div> {/* Descricaomediop */}
            <div className='barracimadescricao'>

            </div>

            <span>Aluno do ensino medio técnico integrado no instituto federal do ceará - IFCE</span>

            <span>Bolsista do Grupo de desenvolvimento em sistemas de telecomunicações e sistemas embarcados em ênfase em software - GDESTE/IFCE</span>

            <div className='barrabaixodescricao'>


            </div>

            </div> {/* Mediocardp */}

            <div className='Baixocardp'>
             <button>
                <img src='/icons/pix.svg' alt='Logo do Pix'></img>
                <span>Pix</span>
            </button>

            <button>
                <img src='/icons/mail.svg' alt='Logo do Email'></img>
                <span>Email</span>
            </button>

             <button>
                <img src='/icons/instagram.svg' alt='Logo do Instagram'></img>
                <span>Instagram</span>
            </button>

             <button>
                <img src='/icons/whatsapp.svg' alt='Logo do Whatsapp'></img>
                <span>Whatsapp</span>
            </button>


            </div> {/* Baixocardp */}

            </div> {/* bordaprofileinfo */}

        </div> 
    )
}

export default Profileinfo