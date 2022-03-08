import { Button, Card,Container, Row, Col } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie';
import './Movie.css';

function Movie(props) {

    return (
        <>
            <Container className='div-container'>
                <Row md={3}>
                <Col key={props.data.id} md={4}>
                    <Card  className='div-card' >
                        <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} />
                        <Card.Body>
                            <Card.Title className='div-card-title'>{props.data.Title}</Card.Title>
                            <Card.Text>
                                {props.data.release_date}
                            </Card.Text>
                            <Card.Text>{
                                props.data.overview}
                            </Card.Text>
                            <div>
                            <Button className='div-card-button' variant="primary"
                                    onClick={() => {
                                        props.card(props.data)
                                        props.show(true);
                                    }}>Add To Favorite</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Movie;
