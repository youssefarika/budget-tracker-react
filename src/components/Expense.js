import ProgressBar from 'react-bootstrap/ProgressBar';
import ViewExpens from "./ViewExpens";
import ValidationExpense from "./ValidationExpense";
import DataContext from "./DataContext";


function Expense(props) {
    const now = 80
    return(
        <DataContext.Provider value={props.title}>
            <div className="block rounded-lg shadow-lg bg-white text-center px-4">
                <div className="py-3">
                    <div className="user flex items-center justify-between">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                        <h5>$0 <span className="text-sm text-slate-500">/</span> <span className='text-sm text-slate-500'>${props.price}</span></h5>
                    </div>
                        <div className="rounded-pill progressing mt-1">  
                            <ProgressBar now={now} />;
                        </div>
                    <div className="buttons flex justify-between">
                        <ValidationExpense outline = {"bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 border border-blue-700 rounded"} text ={"Add Expense"}/>
                        <ViewExpens outline = {"hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 rounded"} text= {"View Expenses"}/>
                    </div>
                </div>
            </div>
        </DataContext.Provider>
    )
}

export default Expense;