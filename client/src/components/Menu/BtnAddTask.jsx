import React, {useState} from "react";
import { addNewToDo } from "../../redux/action";
import ModalAddTask from "../Modal/ModalAddTask";
const BtnAddTask = () => {
    const [showForm, setShowForm] = useState(false);

    const showFormm = () => {
        setShowForm(true);
    }

    const closeModal = () => {
        setShowForm(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.title.value === "") {
            alert("Title is required");
            return;
        }

        if (event.target.date.value === "") {
            alert("Date is required");
            return;
        }

        const data = {
            "title": `${event.target.title.value}`,
            "description": `${event.target.des.value}`,
            "done": `${event.target.done.checked}`,
            "date": `${event.target.date.value}`,
        }
        addNewToDo(data);
        setShowForm(!showForm);
        
    }

    return (
        <div className="add-task flex flex-col space-y-6">
            {showForm && <ModalAddTask title={"Add new task"} onClose={closeModal} />}
            <button onClick={showFormm} className="btn">Add new task</button>
        </div>
    )
}

export default BtnAddTask;