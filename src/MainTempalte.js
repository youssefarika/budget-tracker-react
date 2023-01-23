import { Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import Expense from "./components/Expense"
import ValidationBudget from "./components/ValidationBudget"
import ValidationExpense from "./components/ValidationExpense"
import shortid from 'shortid'
import StateContext from "../src/components/StateContext";
import { useEffect } from "react"

function MainTemplate() {
    const dataFrom = useSelector(state => state.data);
    return (
        <Container>
            <div className="mt-4 lg:flex lg:items-center lg:justify-between sm:inline text-center">
                <h2 className= 'text-[40px]'>Budgets</h2>
                <div className="buttons flex justify-between">
                    <ValidationBudget outline= "bg-blue-500 hover:bg-blue-700 text-white mx-1 font-semibold py-2 px-2 border border-blue-700 rounded " text= "Add Budget" />
                    <ValidationExpense outline= "hover:bg-blue-400 text-blue-700 mx-1 font-semibold hover:text-white py-2 px-2 border border-blue-500 rounded" text= "Add Expenses"/>
                </div>
            </div>
                   <div className='grid mt-4 xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-3 lg:gap-2 gap-4 md:grid-cols-2 md:gap-6'>
                    {dataFrom && dataFrom.map((data, index) => (
                            <div key={ shortid.generate() }>
                                <StateContext.Provider value= {dataFrom[index]}>
                                {<Expense title= {dataFrom[index] ? dataFrom[index].text : ''} price= {dataFrom[index] ? dataFrom[index].amount : 0} index= {index} /> }                                </StateContext.Provider>
                            </div>
                    ))}
                    </div>
        </Container>
    )
}

export default MainTemplate
