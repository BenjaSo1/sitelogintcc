import { useState } from "react";
import '../styles/logincard.css'

function Logincard() {
    const [EmailDigitado, setEmailDigitado] = useState('')
    const [senhaDigitada, setSenhaDigitada] = useState('')

    return (
        <div className="containerlogincard">
        <form onChange={(e) => {e.defaultPrevented()}}>
        <input placeholder="Digite seu email" value={EmailDigitado} className="emaillogin"></input>
        <input placeholder="Digite sua senha" value={senhaDigitada} className="senhalogin"></input>
        <button type="submit" className="botaologin">login</button>
        <button className="Ess">Esqueceu sua senha?</button>
        </form>
        </div>
    )
}

export default Logincard