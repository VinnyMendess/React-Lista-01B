
// 6) Usar If-Else com Mais de Duas Condições: 

// Crie um componente que receba uma prop chamada nota. Se nota for maior ou igual a 90, renderize "Excelente". Se for entre 70 e 89, renderize "Bom". Se for menor que 70, renderize "Precisa melhorar". 
function EstNota(props){
    if(props.nota >= 90){
        return <p>Excelente</p>;
    }else if(props.nota >= 70 && props.nota < 90){
        return <p>Bom</p>;
    } else{
        return <p>Precisa melhorar</p>;
     } 


}

export default EstNota