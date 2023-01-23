import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import DataContext from "./DataContext";
import StateContext from "./StateContext";
import { removeexpensing } from "../store/formeSlice"
import { clearing } from '../store/formdataSlice';

function ViewExpens(props)  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const expenseForms = useSelector(state => state.expend);
    const title = useContext(DataContext)
    const state = useContext(StateContext)
    return (
                <div>
                    <button className= {props.outline} onClick={() => {
                        handleShow()
                    }}>
                        {props.text}
                    </button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <div className='title flex'>
                                <Modal.Title>Expenses - {title}</Modal.Title>
                                <Button variant="outline-danger" className='ml-2' onClick={() => {
                                    dispatch(clearing(state))
                                }}>Delete</Button>
                            </div>
                        </Modal.Header>
                        <Form className="mx-3 mt-3">
                            <Form.Group className="mb-3">
                                {expenseForms && expenseForms.filter(item => item.user === title).map(expense => (
                                    <div key={expense.text} className='expense flex justify-between items-center mb-3'>
                                        <span className='fs-4'>{expense.text}</span>
                                        <span className='fs-5'><span>$</span>{expense.amount} <Button className="text-center mb-[9px] w-7 ml-1" size="sm" variant="outline-danger" onClick={() => {
                                            dispatch(removeexpensing(expense))
                                        }}><span className="text-[10px]">X</span></Button></span>
                                    </div>
                                ))}
                            </Form.Group>
                        </Form>
                    </Modal>
                </div>
    )
};

export default ViewExpens;