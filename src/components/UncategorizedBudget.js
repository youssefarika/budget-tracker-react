import { useSelector } from "react-redux";
import ValidationExpense from "./ValidationExpense";
import ViewExpens from "./ViewExpens";

function UncategorizedBudget() {
        const expenseForms = useSelector(state => state.expend);
        const title = "Uncategorized"
        const totalPrice = expenseForms.reduce((acc, expense) => {
                if(expense.user === title) {
                    acc += parseInt(expense.amount)
                }
                return acc
        }, 0)
            return (
                    <div className= " py-2 block rounded-lg shadow-lg bg-opacity-10 text-center px-4">
                        <div className="py-3">
                            <div className="user flex items-center justify-between">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                                <h5>${totalPrice} <span className='text-sm text-slate-500'></span></h5>
                            </div>
                            <div className="buttons flex justify-between">
                                <ValidationExpense outline = {"bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 border border-blue-700 rounded"} text ={"Add Expense"}/>
                                <ViewExpens outline = {"hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 rounded"} text= {"View Expenses"} title ={title}/>
                            </div>
                        </div>
                    </div>
            )
}

export default UncategorizedBudget