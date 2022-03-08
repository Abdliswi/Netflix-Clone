import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function UpdateModal( {show,handleClose,ele,getFavMovie,
    titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput
}){    

    console.log(titleInput);
    const update = async(id)=>{
        // title: card.title, release_date: card.release_date, poster_path: card.poster_path, overview: card.overview, comment: comment
        let updated = {title:titleInput, release_date:ele.release_date,  poster_path:ele.poster_path, overview:ele.overview,  comment:commentInput}
        
      await axios.put(`https://serverappme.herokuapp.com/UPDATE/${id}`,updated)
                  .then(()=>{
                    getFavMovie();
                  }).catch(err=>{
                      console.log(err);
                  })
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edite Title</p>
                        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
                        <p style={{ "marginTop": "10px" }}>Edit Image</p>
                        <textarea value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                     onClick={()=>{
                        update(ele.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;
