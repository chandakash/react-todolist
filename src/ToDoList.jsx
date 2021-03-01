import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const ToDoList = (props)=>{
    return(
        <>
        <div className="todo_style">
        <Button className="btn"
            onClick={()=>{ // callback function
            props.onSelect(props.id);// from this line we will get to know which item we are selecting to delete.
             }}
        >
        <DeleteIcon className="deleteIcon"/>
        </Button>
            <li>{props.text}</li>
        </div>
        </>
    );
};

export default ToDoList;