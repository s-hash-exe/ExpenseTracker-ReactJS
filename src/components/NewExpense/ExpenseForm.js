import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formValue, setFormValue] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormValue((prevValue) => ({ ...prevValue, [name]: value }));
    // console.log(formValue);
  };

  const submitHandler = (event) => {
    const expenseData = {
      ...formValue,
      date: new Date(formValue.date),
    };
    props.onSaveExpenseData(expenseData);
    setFormValue({
      title: '',
      amount: '',
      date: '',
    });
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            name='title'
            type='text'
            onChange={changeHandler}
            value={formValue.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            name='amount'
            type='number'
            min='0.01'
            step='0.01'
            onChange={changeHandler}
            value={formValue.amount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            name='date'
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={changeHandler}
            value={formValue.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
