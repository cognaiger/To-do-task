import Task from "./TaskItem/Task";
import ModalAddTask from "../Modal/ModalAddTask";
import { useState } from "react";
import { useEffect } from "react";
import ModalConfirm from "../Modal/ModalConfirm";
import axios from "axios";

const LayoutRoutes = () => {

    const [tasks, setTasks] = useState([]);
    const [deleteModalOpen,setDeleteModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [idDeleteTask, setIdDeleteTask] = useState('');

    const addNewTask = () => {
        setAddModalOpen(true);
    }

    const closeAddModal = () => {
        setAddModalOpen(false);
    }

    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    }

    const deleteTask = async() => {
        setDeleteModalOpen(false);
        try {
            const response = await axios.delete(`http://localhost:5000/task/${idDeleteTask}`);
            if (response.status === 200) {
                console.log("delete successfully");
            } else {
                console.log("delete failed");
            }
        } catch (err) {
            console.log(err);
        }
    }

    const confirmDeleteTask = (id) => {
        setDeleteModalOpen(true);
        setIdDeleteTask(id);
    }


    useEffect(() => {
        let ignore = false;

        async function fetchTask() {
            try {
                const res = await axios.get("http://localhost:5000/task");
                if (!ignore) {
                    setTasks(res.data);
                }
            } catch (err) {
                console.log(err);
            }
        }

        fetchTask();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div>
            {addModalOpen && <ModalAddTask title={"Add new task"} onClose={closeAddModal}/>}
            <h1 className="font-medium my-5 text-center text-lg">
                Tasks
            </h1>
            <ul className="mt-4 grid gap-2 xl:grid-cols-3 lg:grid-cols-4 items-end">
                {tasks.map((task) => {
                    return (
                        <Task deleteTask={() => confirmDeleteTask(task._id)} key={task._id} title={task.title} description={task.description}
                        deadline={task.deadline} done={task.done}/>
                    )
                })}
                <li>
                    <button className="border-2 border-slate-300 text-slate-400 w-full rounded-lg border-dashed
                    transition h-52" onClick={addNewTask}>
                        Add new task
                    </button>
                </li>
                
            </ul>
            {deleteModalOpen && <ModalConfirm onClose={closeDeleteModal} handleDeleteItem={deleteTask} text={`Delete this task `}/>}
        </div>
    )
}

export default LayoutRoutes;