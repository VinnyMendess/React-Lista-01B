const Desconto = ({ temDesconto }) => {
    return (
        <div>
            {temDesconto ? "Desconto Aplcado" : "Sem Desconto"}
        </div>
    )
 }

 export default Desconto