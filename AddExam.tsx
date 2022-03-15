import {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function AddExam() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary float-end m-2"
                onClick={handleShow}>
                Add
            </Button>

            <Modal show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
              <form>
                <Modal.Header closeButton />
                    <div className="modal-body">
                   
                        <div className="form-group">
                            <label form="Exam-name" className="col-form-label"><b>ExamName:</b></label>
                            <input type="text" className="form-control" id="Exam-name"/>
                        </div>
                        <div className="form-group">
                            <label form="Organization-name" className="col-form-label"><b>Organization:</b></label>
                            <input type="text" className="form-control" id="Organization-name"/>
                        </div>
                        <div className="form-group">
                           
                            <label form="ExamType-name" className="col-form-label"><b>ExamType:</b></label>
                            <input type="text" className="form-control" id="ExamType-name"/>
                            </div>
            
                   
                </div>
                <div className="modal-footer">
                   
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
                </form>
            </Modal>
        </>
    );
};
export default AddExam;

