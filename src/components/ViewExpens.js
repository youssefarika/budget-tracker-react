import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';

function ViewPop(props)  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dataFromes = useSelector(state => state.data.value);
    const expenseForms = useSelector(state => state.expend.value);
    return (
        <div>
            <Button variant= {props.outline} onClick={() => {
                handleShow();
            }} className= "mx-1">
            {props.text}
            </Button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <div className='title flex'>
                            {dataFromes.map((data, index) => (
                                <Modal.Title>Expenses - {dataFromes[index].text}</Modal.Title>
                            ))}
                            <Button variant="outline-danger" className='ml-2'>Delete</Button>
                        </div>
                    </Modal.Header>
                    <Form className="mx-3 mt-3">
                        <Form.Group className="mb-3">
                            {expenseForms ? expenseForms.map(expense => (
                                <div key={expense.text} className='expense flex justify-between items-center mb-3'>
                                    <span className='fs-4'>{expense.text}</span>
                                    <span className='fs-5'><span>$</span>{expense.amount} <Button className= "text-center mb-[9px] w-7 ml-1" size="sm" variant="outline-danger"><span className="text-[10px]">X</span></Button></span>
                                </div>
                            )) : null}
                        </Form.Group>
                    </Form>
                    {/* <Modal.Title>Expenses - {data.text}</Modal.Title> */}
            </Modal>
        </div>
    )
};

export default ViewPop;