//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  console.log(props);
  
  return (
    <div style={{backgroundColor: props.anotacao.cor}}>
        <p>{props.anotacao.texto}</p>
    </div>
  )
}