import React from 'react';
import './Form.css';
import Input from '../Input/Input';
import ButtonAdd from '../ButtonAdd/ButtonAdd';
import { useState } from 'react';

const defaultName = '';

function Form({addTask, priority}) {

  const [name, setName] = useState(defaultName);

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    const task = {name, priority, isDone: false}
    addTask(task);
    
    setName(defaultName);
  }

  return (
    <form 
    className="to-do-form" 
    onSubmit={onSubmit}>
        <Input 
        handleChange={handleChange}
        value={name}
        />
        <ButtonAdd/>
      </form>
  )

}

  export default Form;


