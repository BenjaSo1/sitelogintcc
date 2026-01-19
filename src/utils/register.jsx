import '../styles/register.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Registercard() {
    const [form, setForm] = useState({ email: '', password: '', username: ''});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
            try {
                await axios.post('http://localhost:3001/register', form);
                navigate('/login');
            } catch (err) {
                alert('Erro ao registrar')
            }
    }

    return (
        <div className="containercardregister">
        <div className="bordacardregister">
        <div className="containerregister">
        <form onChange={handlesubmit}>
        <input placeholder='Digite seu nome de usuario' className='userlogin' onChange={handleChange} name='username' required></input>
        <input placeholder="Digite seu email" className="emaillogin" type='email' onChange={handleChange} name='email' required></input>
        <input placeholder="Digite sua senha" className="senhalogin" type='password' onChange={handleChange} name='password' required></input>
        <button type="submit" className="botaoregister">Criar cartão</button>
        <button type='submit' className="Ess">Esqueceu sua senha?</button>
        </form>
        </div>
        </div>
        </div>
    )
}

export default Registercard