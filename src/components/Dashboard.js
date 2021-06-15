import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        this is dashboard
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;