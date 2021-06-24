import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'asd' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'asd'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('asd', { note: 'dummy note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'asd',
        updates: {
            note: 'dummy note'
        }
    })
})

test('should setup add expense action object with user input', () => {
    const expenseData = { description: 'rent', note: 'dummy note', amount: 100, createdAt: 1000 }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})