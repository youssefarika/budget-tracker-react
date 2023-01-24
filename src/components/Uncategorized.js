import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

function Uncategorized() {
    const dataFrom = useSelector(state => state.data);
    const expenseForms = useSelector(state => state.expend);
        const totalPrice = dataFrom.reduce((acc, expense) => {
            acc +=  parseInt(expense.amount)
            return acc
          }, 0)
          const expensePrice = expenseForms.reduce((acc, expense) => {
            acc += parseInt(expense.amount)
            return acc
          }, 0)
        const now = parseInt(expensePrice) * 100 / totalPrice
        const ProgressColor = now > 60 ? (now > 80 ? "danger" : "warning") : null;
        const CardColor = now > 80 ? "block rounded-lg shadow-lg bg-danger bg-opacity-10 text-center px-4" : "block rounded-lg shadow-lg bg-opacity-10 text-center px-4"
            return (
                    <div className= {CardColor}>
                        <div className="pt-3">
                            <div className="user flex items-center justify-between">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Total</h5>
                                <h5>${expensePrice} <span className="text-sm text-slate-500">/</span> <span className='text-sm text-slate-500'>${totalPrice}</span></h5>
                            </div>
                                <div className="rounded-pill progressing mt-1">  
                                    <ProgressBar now={now} variant= {ProgressColor} />;
                                </div>
                        </div>
                    </div>
    )
}

export default Uncategorized