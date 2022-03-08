import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useRef } from 'react';


function ModalMovie({ card, show, handleClose }) {
    const commentInputRef = useRef("");
    console.log(card);


    const addToFav = async () => {

        let comment = commentInputRef.current.value;
        let fav = { title: card.title, release_date: card.release_date, poster_path: card.poster_path, overview: card.overview, comment: comment }

        await axios.post(`https://serverappme.herokuapp.com/addMovie`, fav)
            .then(() => {
                console.log("Done :) ");
            }).catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{card.title}</h3>
                    <img alt="" src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} />
                    <p> {card.overview}</p>
                    <p> {card.release_date}</p>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input ref={commentInputRef} placeholder="Write Your Opinion" type="text" id="op" />

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                    onClick={()=>{
                        addToFav();
                        handleClose();
                     }}
                     > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default ModalMovie;
