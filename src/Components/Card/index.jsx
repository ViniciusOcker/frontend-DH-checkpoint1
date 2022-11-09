import './style.scss';

export function Card (props) {
    console.log(props);
    
    return (
      <div style={{backgroundColor: props.anotacao.cor}} className="cardComponent">
          <p>{props.anotacao.texto}</p>
          <span>{props.anotacao.cor}</span>
      </div>
    )
  }