//exercício05
function VerificadorAluno(props){
    if(props.ra ==="01"){
        return (<h1>Você é ESTUDANTE!</h1>)
    }else{
        return (<h1>Você não é ESTUDANTE</h1>)
    }
}

export default VerificadorAluno;