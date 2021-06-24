import { getExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('total should be 0 when no expenses are available', () => {
    const total = getExpensesTotal();
    expect(total).toBe(0);
})

test('should render total of 1 value when 1 expense is passed', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(0.95);
})

test('should render total of 1 value when 1 expense is passed', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114000.95);
})