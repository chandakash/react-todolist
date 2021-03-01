import React, { useState } from 'react';
import ToDoList from './ToDoList';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const App = () => {

    //Hooks
    const [inputList, setIntputList] = useState("");
    const [Items, setItems] = useState([]);// inital data is empty array , we will store our list of items in array.

    const itemEvent = (event) => {
        setIntputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
        setIntputList("");// to again make the input field empty after entering data.
    };

    const deleteItems = (id) => { // id is the passed one id from the onSelect 
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />

                    <input type="text"
                        placeholder="Add an items"
                        value={inputList}
                        onChange={itemEvent} />
                    <Button className="btn" onClick={listOfItems}><AddIcon className="addIcon"/></Button>

                    <ol>
                        {/* to access one by one each item of of our array we will use map method */}

                        {Items.map((itemval, index) => { // array value and index.
                            return (
                                <ToDoList
                                    key={index}
                                    id={index}
                                    text={itemval} // ToDoList is another component and text is passed as props
                                    onSelect={deleteItems}
                                />
                            );
                        })}

                    </ol>
                </div>
            </div>
        </>
    );
};
export default App;