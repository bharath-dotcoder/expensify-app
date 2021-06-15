import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', note : 'temp', amount : 5450, createdAt: 10}))
store.dispatch(addExpense({description: 'Gas Bill', note : 'temp2', amount : 243}))
store.dispatch(addExpense({description: 'Rent', amount : 1095, createdAt: 1000}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'));



//transform-class-properties plugin usage

// class OldSyntax {
//     constructor() {
//         this.name = "Mike";
//     }
//     getGreeting() {
//         return "Hi!"
//     }
// }
// console.log(new OldSyntax().getGreeting());

// class NewSyntax {
//     name = "Jen";
//     getGreeting = () => {
//         return `Hi, I'm ${this.name}`
//     }
// }

// console.log(new NewSyntax().getGreeting());
