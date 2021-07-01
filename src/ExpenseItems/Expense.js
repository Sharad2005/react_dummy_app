import ExpenceItems from "./ExpenseItems"
function Expense (props){
return(
    <div className='expenses'>
      <ExpenceItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenceItems>
      <ExpenceItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenceItems>
      <ExpenceItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenceItems>
      <ExpenceItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenceItems>
    </div>
)
}
export default Expense