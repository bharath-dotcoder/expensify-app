import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

// export class ExpenseSummary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             expenseCount: this.props.expenses.length > 0 ? this.props.expenses.length : 0,
//             expensesTotal: this.props.expenses.length > 0 ? this.props.expenses.map((expense) => expense.amount).reduce((sum,value) => sum + value,0) : 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.expenseCount > 0 && <p>Viewing  {this.state.expenseCount} {this.state.expenseCount == 1 ? 'expense': 'expenses'} totalling ${this.state.expensesTotal}</p>}
//             </div>
//         )
//     }
// }

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00')
    return (
        <div>
        <h1>Viewing {expenseCount} {expenseCount == 1 ? 'expense': 'expenses'} totalling {formattedExpenseTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
    

}

export default connect(mapStateToProps)(ExpenseSummary);