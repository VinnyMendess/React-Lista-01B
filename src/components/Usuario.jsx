function Statuss (online){
    return online ? "Usuário Online" : "Usuário Offline"
}

const Usuario = ({ online }) => {
    return (
        <>
            {Statuss(online)} 
        </>
    )
}

export default Usuario