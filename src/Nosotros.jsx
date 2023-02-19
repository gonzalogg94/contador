
import { Col, Container, Row, Badge } from 'react-bootstrap';
import gonzalo from "./img/gonzalo.png"


const Nosotros = () => {
    return (
        <section className='bg-dark'>
            <Container className='mainSection py-5'>
            <section className='text-center pb-5'>
                <img className='w-25' src={gonzalo} alt="avatar de gonzalo" />
                <p className='text-center text-white'>Hola, mi nombre es Gonzalo Gallardo soy Full Stack Developer. Creo que la programación abre las puertas a un mundo donde el límite no son tus conocimientos técnicos sino tu creatividad, con la cual puedes crear lo que quieras. Te comparto a continuación mi Link de GitHub donde puedes ver el repositorio de muchos proyectos en los cuales he trabajado y estoy trabajando, además de algunas skills con las que cuento.</p>
                <a href="https://github.com/gonzalogg94" target="_blank">
                <Badge bg="warning" text="dark" className='fs-4'>GitHub</Badge>
                </a>
                
            </section>
            <Row className='text-center justify-content-center'>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="logo javaScript" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKBSlzXwDKpk-cSeknpRTO_G9iNo8vJJlUtA&usqp=CAU" alt="logo Python" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo-752x440.png" alt="logo NodeJs" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" alt="logo React" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://pixelmechanics.com.sg/wp-content/uploads/2019/06/html5-logo-for-web-development.png" alt="logo HTML" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://armyyazilim.com/wp-content/uploads/2019/10/css.png" alt=" logo css" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png" alt="logo git" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="logo github" />
                </Col>
                <Col lg={1} md={2} sm={3}>
                    <img className='w-50 pb-3' src="https://mpng.subpng.com/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg" alt="logo github" />
                </Col>
            </Row>
            </Container>
        </section>
    );
};

export default Nosotros;