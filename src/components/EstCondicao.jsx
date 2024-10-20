

function EstCondicao(props){
    if (props.aluno === "000") {
        return(
            <h1>{props.caso1}</h1>
        )
        
    } else {
        return(
            <h1>{props.caso2}</h1>
        )
    }
}

export default EstCondicao;
