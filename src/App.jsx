import {Card} from './Card';
import { useState } from "react"

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
function validationTexto(texto){
  texto = texto.trim();
  if(texto.length < 3){
    return false;
  }
  return true;
}

function validationColor(cor) {
  const patternColorHex = /^[#]{1}[0-9abcdef]{6}$/;
  if(cor.length != 7){
    return false;
  }
  else{
    return patternColorHex.test(cor);
  }
}



function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [textoAnotacao, setTextoAnotacao,] = useState("");
  const [corAnotacao, setCorAnotacao] = useState("");
  const [listaAnotacao, setListaAnotacao] = useState([]);
  const [erro, setErro] = useState(false);

  function adicionarAnotacao(event){
    event.preventDefault();
    const novaAnotacao = {
      cor: corAnotacao,
      texto: textoAnotacao
    }
    if(validationColor(corAnotacao) && validationTexto(textoAnotacao)){
      setListaAnotacao([...listaAnotacao, novaAnotacao]);
      setCorAnotacao('');
      setTextoAnotacao('');
      setErro(false);
    }
    else{
      setErro(true);
    }

  }


  return (
    <div className="App">
     <h1>Adionar uma nova anotação</h1>
     <form onSubmit={event => adicionarAnotacao(event)}>
        <label htmlFor="anotacao"></label>
        <input id="anotacao" type="text" placeholder="Digite a sua anotação." value={textoAnotacao} onChange={event => setTextoAnotacao(event.target.value)}/>
        <label htmlFor="cor"></label>
        <input id="cor" type="text" value={corAnotacao} onChange={event => setCorAnotacao(event.target.value)}/>
        <button type='submit'>Salvar</button>
        {
          erro ? <span>Por favor, verifique os dados inseridos no formulário</span> : null
        }
     </form>
     <h2>Anotações: </h2>
      {
        listaAnotacao.map((anotacaoItem,index)=>(<Card anotacao={anotacaoItem} key={index} />))
      }
    </div>
  )
}

export default App