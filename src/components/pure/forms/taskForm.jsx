import React, { useRef } from 'react';
import PropTypes from  'prop-types';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

const TaskForm = ({add}) => {
  
  const nameRef= useRef('');
  const descriptionRef= useRef('');
  const levelRef= useRef('LEVELS.NORMAL');

  function addTask(e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  const normalStyle = {
    backgroundColor: 'blue',
    fontWeight: 'bold'
  }

  const urgentStyle = {
    backgroundColor: 'yellow',
    fontWeight: 'bold'
  }

  const blockingStyle = {
    backgroundColor: 'red',
    fontWeight: 'bold'
  }

  
  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name...'></input>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description...'></input>
        <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
          <option style={ normalStyle } value={LEVELS.NORMAL}>Normal</option>
          <option style={ urgentStyle } value={LEVELS.URGENT}>Urgent</option>
          <option style={ blockingStyle } value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type='submit' className='btn btn-success btn-lg ms-2' >Add Task</button>
      </div>
      
    </form>
  );
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
}

export default TaskForm;
