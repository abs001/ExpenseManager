import './ExpenseItem.css'
function ExpenseItem(){
    const ExpenseDate = new Date(2021, 6, 7)
    const ExpenseTitle = "Electricity Bills"
    const ExpenseAmount = 1035
    return (
        <div className="expense-item">
            <div>{ExpenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{ExpenseTitle}</h2>
                <div className="expense-item__price">Rs. {ExpenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem