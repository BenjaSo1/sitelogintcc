import '../styles/profileinfo.css'

function Profileinfo() {
    return (
        <div className="containerprofileinfo">
            <div className='bordaprofileinfo'>
            <div className="fotoprofileinfo">
                    <img src="//fotopessoa.png" className="fotopessoaperfil"></img>
            </div>

            <div className="primeiracoluna"> {/*  */}

            </div>

            <div className="segundafileira"> {/* github e linkedin */}
                <img src="//linkedinpreto.png" className="linkedinperfil"></img>
                <img src="//githubpreto.png" className="githubperfil"></img>
            </div>

            <div className="terceiracoluna"> {/* Maps e instagram */}
                <img src="//instagrampreto.png" className="instagramperfil"></img>
                <img src="//maps.png" className="mapsperfil"></img>
            </div>
            </div>

        </div>
    )
}

export default Profileinfo