import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

/* importamos la hoja de estilos de task.scss */
import "../../styles/task.scss";



function TaskComponent({ task, complete, remove }) {
  
  useEffect(() => {
    console.log('Created Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    }
  }, [task])

  /**
   * funcion que devuelve un badge
   * dependiendo del nivel de la task
   * @param {} params 
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(<h6 className="mb-0"><span className='badge bg-primary'>{task.level}</span></h6>)
      case LEVELS.URGENT:
        return(<h6 className="mb-0"><span className='badge bg-warning'>{task.level}</span></h6>)
      case LEVELS.BLOCKING:
        return(<h6 className="mb-0"><span className='badge bg-danger'>{task.level}</span></h6>)
      default:
        break;
    }
  }

  /**
   * @returns icono dependiendo de de si la tarea esta completada o no
   */
  function taskCompletedIcon() {
    if(task.completed) {
      return (<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={ {color: 'green'} }></i>)
    } else {
      return (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={ {color: 'grey'} }></i>)
    }
  }
  
  const taskCompleted = {
    color: 'gray',
    textDecoration: 'line-through'
  }

  const taskPending = {
    color: 'black'
  }
  
  return (
    <tr className='fw-normal' style={ task.completed ? taskCompleted : taskPending }>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
        {taskCompletedIcon()}
        <i onClick={() => remove(task)} className='bi-trash task-action' style={ {color: 'tomato'} }></i>
      </td> 
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};


export default TaskComponent;
