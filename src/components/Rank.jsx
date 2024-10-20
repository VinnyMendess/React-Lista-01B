function Rank(nivel) {
    if (nivel === "iniciante") {
        return "Bem-Vindo Iniciante";
    } else if (nivel === "intermediário") {
        return "Você está progredindo";
    } else if (nivel === "especialista") {
        return "Parabéns Especialista";
    } else {
        return "Nível desconhecido";
    }
}

const Tabela = ({ nivel }) => {
    return (
        <>
            {Rank(nivel)} 
        </>
    );
}

export default Tabela;
