import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

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
