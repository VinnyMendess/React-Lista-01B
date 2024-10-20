import { useState } from "react";

function Estudante(props) {
    const [alunoInput, setAlunoInput] = useState(""); // Estado local para o input

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setAluno(alunoInput); // Atualiza o valor no componente pai ao enviar o formulário
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Insira o R.A
                    <input
                        type="text"
                        name="aluno"
                        value={alunoInput}
                        onChange={(e) => setAlunoInput(e.target.value)} // Atualiza o valor local do input
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </>
    );
}

export default Estudante;
