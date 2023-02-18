import { Container ,Button } from "react-bootstrap";
import { useState } from "react";


const Contador = () => {
let prueba = 10;  
  return (
    <section className="bg-dark text-white">
    <Container>
      <article className="text-center">
        <h2>Contador</h2>
        <hr></hr>
        <h3>10</h3>
        <Button variant="primary">+1</Button>{' '}
        <Button variant="secondary" className="mx-2">reset</Button>{' '}
        <Button variant="primary">-1</Button>{' '}
      </article>
    </Container>
    </section>
  );
};

export default Contador;
