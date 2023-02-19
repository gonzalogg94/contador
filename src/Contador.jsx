import { Container ,Button } from "react-bootstrap";
import { useState } from "react";


const Contador = () => {
const [numero, setNumero] = useState(0)

const sumar=()=>{
  setNumero(numero+1)
}
const restar=()=>{
  setNumero(numero-1)
}
const reset=()=>{
  setNumero(0)
}


  return (
    <section className="bg-dark text-white mainSection pt-5">
    <Container className="pt-5">
      <article className="text-center">
        <h2>Contador</h2>
        <hr></hr>
        <h3>{numero}</h3>
        <Button variant="primary" onClick={sumar}>+1</Button>{' '}
        <Button variant="secondary" className="mx-2" onClick={reset}>reset</Button>{' '}
        <Button variant="primary" onClick={restar}>-1</Button>{' '}
      </article>
    </Container>
    </section>
  );
};

export default Contador;
