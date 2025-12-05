import '../styles/card.css'

function Card({ children }) {
    return (

    <div className="containercard">
        <div className="bordacard">


        <div className="profileinfocard">
        </div> {/* profiloinfocard */}
            { children }

        </div> {/* bordacard */}

        </div>

    )
}

export default Card