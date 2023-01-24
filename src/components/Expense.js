import DataContext from "./DataContext";
import Budget from './Budget';


function Expense(props) {
        return (
        <DataContext.Provider value= {props.title}>
            <Budget price= {props.price} title= {props.title}  />
        </DataContext.Provider>
    )
}

export default Expense;