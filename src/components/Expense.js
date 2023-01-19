import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Row } from "react-bootstrap";
import ViewExpens from "./ViewExpens";
import ValidationExpense from "./ValidationExpense";


function Expense(props) {
    const [isOpen, setIsOpen] = useState(false);
    const now = 80
    return(
        <div>
            <div className="block rounded-lg shadow-lg bg-white text-center px-3">
                <div className="py-3">
                    <div className="user flex items-center justify-between">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                        <h5>$0 <span className="text-sm text-slate-500">/</span> <span className='text-sm text-slate-500'>${props.price}</span></h5>
                    </div>
                        <div className="rounded-pill progressing mt-1">  
                            <ProgressBar now={now} />;
                        </div>
                    <div className="buttons flex">
                        <ValidationExpense outline = {"outline-primary"} text ={"Add Expense"}/>
                        <ViewExpens outline = {"outline-secondary"} text= {"View Expenses"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense;