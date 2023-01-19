import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addexpense } from "../store/expenseSlice"
import { adddata } from "../store/formdataSlice"

function ValidationBudget(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [ formData, setFormData ] = useState([])
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }
    return (
        <>
            <Button variant= {props.outline} onClick={handleShow} className= "mx-1">
            {props.text}
            </Button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Budget</Modal.Title>
                    </Modal.Header>
                <Form className="mx-3 mb-4">
                        <Form.Group className="mb-3 mt-4">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name= "text" onChange= {handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Maximum Spending</Form.Label>
                            <Form.Control type="number" name= "amount" onChange= {handleChange} />
                        </Form.Group>
                        <Button className="float-right" variant="primary" onClick={() => {
                            handleClose();
                            dispatch(addexpense(true));
                            dispatch(adddata(formData))
                        }}>Add</Button>
                </Form>
            </Modal>
        </>
    )
}

export default ValidationBudget