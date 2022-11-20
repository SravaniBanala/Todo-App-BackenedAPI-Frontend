import './Add-ToDo-Task.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createToDoTask } from '../../redux/actions/actionCreator.js';

const initialValues = {
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    status: "",
    id: ""
  };

const AddToDoTask = ({showAddToDoForm}) => {
    const [values, setValues] = useState(initialValues);

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues ({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const payload = setPayload();
        console.log('values ', payload);
        dispatch(createToDoTask(payload));
        onTrigger();
    }

    const setPayload = () => {
        const dueDateToDate = values.dueDate? new Date(values.dueDate) : '';
        const newId = randomNumberGenerator();
        return {
            ...values,
            dueDate: dueDateToDate,
            id: newId,
            status: 'Open'
        }
    }

    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * 100) + 1;
    }

    const onTrigger = () => {
        showAddToDoForm(false);
    };

        return (
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="d-block form-control-label">
                        Title
                    </label>
                    <input type="text" placeholder="Title" value={values.title} onChange={handleInputChange} className="form-control form-control-input" name="title" id="title" required />
                </div>
                <div>
                    <label htmlFor="description" className="d-block form-control-label">
                        Description
                    </label>
                    <textarea id="description" className="form-control" value={values.description} onChange={handleInputChange} placeholder="Description" name="description" rows="3" cols="30" required></textarea>
                </div>
                <div>
                    <label htmlFor="dueDate" className="d-block form-control-label">
                        Due Date
                    </label>
                    <input type="date" className="form-control form-control-input" min = {new Date().toISOString().split("T")[0]} value={values.dueDate} onChange={handleInputChange} name="dueDate" id="dueDate" required />
                </div>
                <div>
                    <label htmlFor="checkIn"  className="d-block form-control-label">
                        Due Time
                    </label>
                    <input type="time" className="form-control form-control-input" 
                    value={values.dueTime} onChange={handleInputChange} name="dueTime" id="dueTime" required />
                </div>
                <div className='btn-div'>
                    <input type="submit" className="btn btn-success" value="Submit"/>
                    <input type="button" onClick = {onTrigger} className="btn btn-danger" value="Cancel"/>
                </div>
            </form>
        </div>
        )
    }

export default AddToDoTask;