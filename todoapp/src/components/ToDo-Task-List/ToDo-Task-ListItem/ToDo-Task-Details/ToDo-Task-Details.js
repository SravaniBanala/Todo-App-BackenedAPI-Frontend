import './ToDo-Task-Details.scss';

const ToDoItemDetail = ({todo}) => {
    return (
        <section className={`${todo.status == 'Open'? 'border-success': 'border-warning' }`}>
            <div>
                <label className="label-control">Description</label>
                <span className="text-container">{todo.description}</span>
            </div>
            <div>
                <label className="label-control">Due Date</label>
                <span className="text-container">{todo.dueDate? todo.dueDate.split('T')[0]? todo.dueDate.split('T')[0]: '' : ''}</span>
            </div>
            <div>
                <label className="label-control">Due Time</label>
                <span className="text-container">{todo.dueTime}</span>
            </div>
        </section>
    )
}

export default ToDoItemDetail;