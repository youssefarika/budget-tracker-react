import { Button, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import Expense from "./components/Expense"
import ValidationBudget from "./components/ValidationBudget"
import ValidationExpense from "./components/ValidationExpense"
import shortid from 'shortid'


function MainTemplate() {
    const expenses = useSelector(state => state.expense.value);
    const dataFrom = useSelector(state => state.data.value);
    return (
        <Container>
            <div className="mt-4 b-4 flex items-center justify-between">
                <h2 className= 'text-[40px]'>Budgets</h2>
                <div className="buttons flex justify-between">
                    <ValidationBudget outline= "primary" text= "Add Budget" />
                    <ValidationExpense outline= "outline-primary" text= "Add Expenses"/>
                </div>
            </div>
                   <div className='grid mt-4 lg:grid-cols-4 lg:gap-2 gap-4 md:grid-cols-3 md:gap-6 sm:justify-center'>
                   {expenses.map((expense, index) => (
                        <div key={ shortid.generate() }>
                            {expense ? <Expense title= {dataFrom[index].text} price= {dataFrom[index].amount} index = {index} /> : null }
                        </div>
                    ))}
                    </div>
        </Container>
    )
}

export default MainTemplate
