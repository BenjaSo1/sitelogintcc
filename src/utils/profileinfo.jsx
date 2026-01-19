import '../styles/profileinfo.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function Profileinfo() {
    const dadosMock = {
    nome: "Nome Exemplo",
    titulo: "Programador",
    username: 'balau',
    foto_url: "/fotopessoa.webp",
    descricao: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",
    email: "teste@gmail.com",
    pix: "chavepixmock123",
    instagram_url: "https://instagram.com/mock",
    whatsapp_numero: "5511999999999",
    maps_url: "https://www.google.com.br/maps/place/GDESTE/@-3.7421056,-38.5384448,15z/data=!4m6!3m5!1s0x7c749a8ed597dc1:0xa48662fdf89a2c35!8m2!3d-3.7441952!4d-38.5358472!16s%2Fg%2F11h03h12t1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
};

    const { username } = useParams();
    const [ perfil, setPerfil ] = useState(dadosMock)
    const [ imageFile, setImageFile ] = useState(null)
    const [ previewUrl, setPreviewUrl] = useState(null)
    const backendURL = "http://localhost:3000";

    function handleimagechange() {
    const file = e.target.files[0];
    if (file) {
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file))
    }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setPerfil(prevPerfil => ({
            ...prevPerfil,
            [name]: value 
        }));
    };

    const handleSave = () => {
        console.log("Dados salvos:", perfil);
        alert("Alterações salvas! (Verifique o console)");
    };

    if (!perfil) return <div style={{color:'white', textAlign:'center', marginTop:'50px'}}>Carregando cartão...</div>;


    return (
        <div className="containerprofileinfo">

            <div className='bordaprofileinfo'>

            <div className='Cimacardp'>

            <div className='containerprofileinfop'>

            <div className="fotoprofileinfo">
                <img 
                src={previewUrl || (perfil.foto_url.startsWith('/') ? perfil.foto_url : `${backendURL}${perfil.foto_url}`)} 
                className="fotopessoaperfil" 
                alt="Foto de perfil"
                />
                <label className="botao-trocar-foto">
                    <span style={{ fontSize: '20px' }}>📷</span>
                    <span>Alterar Foto</span>
                    <input 
                         type="file" 
                        accept="image/*" 
                        onChange={handleimagechange} 
                        style={{ display: 'none' }} 
                    />
                </label>
                </div>
                <div className='inputnome'>
                <textarea className='nomeedi' name='nome' value={perfil.nome} onChange={handleChange} maxLength={50} placeholder='Digite seu nome e sobrenome'>
                {perfil.nome}
                </textarea>
                <span style={{fontSize: '10px', color: '#555'}}>
                {perfil.nome.length}/50
                </span>
                </div>
                
                <div className='inputtitulo'>
                <textarea className='tituloedi' name='titulo' value={perfil.titulo} onChange={handleChange} maxLength={50} placeholder='Digite sua profissão'>
                {perfil.titulo}</textarea>
                <span style={{fontSize: '10px', color: '#555'}}>
                {perfil.titulo.length}/50
                </span>
                </div>

         </div> {/* containerprofileinfop */}

            <div className='containerbotoesesvg'>
                <div className='primeiralinha'> {/* Modo offline, botão e enviar cartão */}
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

                <div className='segundalinha'> {/* Email, Whatsapp e maps */}


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

            </div> {/* Cimacardp */}

            <div className='Mediocardp'>

            <div className='barracimadescricao'>

            </div>

            <textarea 
            className='descricaoedi'
            name='descricao'
            value={perfil.descricao}
            onChange={handleChange}
            maxLength={150}
            placeholder='Escreva uma breve descrição sobre você'
            >
                {perfil.descricao}
            </textarea>
            <span style={{fontSize: '10px', color: '#555'}}>
            {perfil.descricao.length}/150
            </span>

            <div className='barrabaixodescricao'>
            </div>

            </div> {/* Mediocardp */}

            <div className='Baixocardp'>
             <input className='inputbaixocard' placeholder='Digite sua chave pix' name='pix' value={perfil.pix} onChange={handleChange}/>

             <input className='inputbaixocard' placeholder='Digite seu número de whatsapp aqui ex: 5585999999999' name='maps_url' value={perfil.whatsapp_numero} onChange={handleChange}/>

             <input className='inputbaixocard' placeholder='Digite seu email aqui' name='email' value={perfil.email} onChange={handleChange}/>

    
             <input className='inputbaixocard' placeholder='Cole o link do seu instagram aqui' name='instagram_url' value={perfil.instagram_url} onChange={handleChange}/>


             <input className='inputbaixocard' placeholder='Cole o link do maps de onde trabalha aqui' name='maps_url' value={perfil.maps_url} onChange={handleChange}/>


            <button onClick={handleSave} className='botaodesalvar'>
                Salvar Alterações
            </button>


            </div> {/* Baixocardp */}

            </div> {/* bordaprofileinfo */}

        </div> 
    )
}

export default Profileinfo