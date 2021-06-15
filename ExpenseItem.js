import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
    const [title, setTitle]=useState(props.title);


    const clickHandler=()=>{
        setTitle('Updated');
        console.log (title);
    }

    return (<Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
        </div>
        <div className="expense-item__price">€{props.amount}</div>
        <button onClick={clickHandler}>button</button>
    </Card>);
}

export default ExpenseItem;