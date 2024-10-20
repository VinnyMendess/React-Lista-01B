

function Idade(props){
    if (props.idade >= 18) {
        return(
        <p>Você é{props.caso1}</p>
        )
        
    } else {
        return(
            <p>Você é{props.caso2}</p>
        )
    }
}

export default  Idade;
