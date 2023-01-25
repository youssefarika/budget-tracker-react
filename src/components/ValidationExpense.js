import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addexpensing } from "../store/formeSlice"
import Alert from 'react-bootstrap/Alert';

function ValidationExpense(props) {
    const [show, setShow] = useState(false);
    const [showalert, setShowalert] = useState(false);
    const [expenses, setExpenses] = useState(null)
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
        setShowalert(expenses);
    };
    const [ formData, setFormData ] = useState({ text: '', amount: '', user: 'Uncategorized' });
    const dispatch = useDispatch()
    const expenseForms = useSelector(state => state.expend);
    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }
    const onOptionChangeHandler = (e) => { 
        setFormData({...formData, user: e.target.value})
    }
    const dataFromes = useSelector(state => state.data);
    return (
        <>
            <button className= {props.outline} onClick={handleShow}>
            {props.text}
            </button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Form className="mx-3 mb-4">
                    <Form.Group className="mb-3 mt-4">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name= "text" type="text" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control name= "amount" type="number" onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => onOptionChangeHandler(e)}>
                            <option value= "Uncategorized">Uncategorized</option>
                            {dataFromes.map(from => (
                                <option value={from.text}  key={from.text}>{from.text}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Button className="float-right" variant="primary" onClick={() => {
                        const expenses = expenseForms.find(epxense => epxense.user === formData.user && epxense.text === formData.text)
                        if(expenses) {
                            setShowalert(true);
                        }
                        else{
                            handleClose();
                            dispatch(addexpensing(formData))
                        }
                    }}>Add</Button>
                    {showalert && (
                        <Alert variant="danger" onClose={() => setShowalert(false)} dismissible>
                            <Alert.Heading>You already added this description please change it!</Alert.Heading>
                            <p>Change description and add amount and that and try again.</p>
                        </Alert>
                    )}
                </Form>
            </Modal>
        </>
    )
}

export default ValidationExpense