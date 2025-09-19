import '../styles/card.css'
import Logincard from "./logincard";
import Profileinfo from "./profileinfo";

function Card() {
    return(
    <div className="containercard">
        <div className="bordacard">

        <div className="cimacard">

        <div className="profileinfocard">
        <Profileinfo/>
        </div> {/* profiloinfocard */}

        </div> {/* cimacard */}

        <div className="baixocard">
        <div className="login">
        <Logincard/>
        </div> {/* login */}

        </div> {/* baixocard */}

        </div> {/* bordacard */}

        </div>
    )
}

export default Card