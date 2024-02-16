import './style.css'

function Card(){
    return(
        <div className="containerCard">
            <div className='containerTitle'>
                <h1 className='Login'>teste</h1>
            </div>
            <div className='containerLoad'>
                <h1>Loading</h1>
                <span>....</span>
            </div>
            <div className='containerStatus'>
                <h1>Status Proc:</h1>
                <span>Em Processamento</span>
            </div>
            <div className='containerDetail'>
                <h1>Detalhe</h1>
                <span>Abrir</span>
            </div>
        </div>
    )
}

export default Card