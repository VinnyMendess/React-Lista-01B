import { useState } from "react"

function Estudante(props){
const [estudante, setEst] = useState("");

    if (props.ra === "0000") {
        return(
            <p>
                Você é {props.raResultado}
            </p>
        )
    } else {
        return(
            <p>
                Você não é {props.raResultado1}
            </p>
        )
    }
}