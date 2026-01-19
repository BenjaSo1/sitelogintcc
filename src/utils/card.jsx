import '../styles/card.css'

function Card({ children }) {
    return (

    <div className="containercard">
        <div className="bordacard">
            { children }
        </div> {/* bordacard */}

        </div>

    )
}

export default Card