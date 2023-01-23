import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

function Uncategorized(props) {
    const dataFrom = useSelector(state => state.data);
        const totalPrice = dataFrom.reduce((acc, expense) => {
            acc +=  parseInt(expense.amount)
            return acc
          }, 0)
        const now = totalPrice * 100 / parseInt(props.price)
        const ProgressColor = now > 60 ? (now > 80 ? "danger" : "warning") : null;
        const CardColor = now > 80 ? "block rounded-lg shadow-lg bg-danger bg-opacity-10 text-center px-4" : "block rounded-lg shadow-lg bg-opacity-10 text-center px-4"
            return (
                    <div className= {CardColor}>
                        <div className="py-3">
                            <div className="user flex items-center justify-between">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">Total</h5>
                                <h5>$0 {props.price} <span className="text-sm text-slate-500">/</span> <span className='text-sm text-slate-500'>${totalPrice}</span></h5>
                            </div>
                                <div className="rounded-pill progressing mt-1">  
                                    <ProgressBar now={now} variant= {ProgressColor} />;
                                </div>
                        </div>
                        {console.log(totalPrice)}
                    </div>
    )
}

export default Uncategorized