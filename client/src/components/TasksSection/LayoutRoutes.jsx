import Task from "./TaskItem/Task";
import ModalAddTask from "../Modal/ModalAddTask";
import { useState } from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import {GetAllTasks,DeleteTask} from '../../redux/action/index'

import ModalConfirm from "../Modal/ModalConfirm";
const LayoutRoutes = () => {

    const dispatch = useDispatch(); 
    const allTasks = useSelector(state => state.tasks)
    const [showDeleteModal,setShowDeleteModal] = useState(false)
    const [deleteId,setDeleteId] = useState("")
    const addNewTask = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    const handleShowDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal)
    }
    const handleDeleteItem = () => {
        dispatch(DeleteTask(deleteId))
        setShowDeleteModal(!showDeleteModal)
    }
    const deleteTask = (id) => {
        setShowDeleteModal(!showDeleteModal)
        setDeleteId(id)
    }

    const [modalOpen, setModalOpen] = useState(false);
    useEffect(()=>{
        dispatch(GetAllTasks())
    },[dispatch])

    return (
        <div>
            {modalOpen && <ModalAddTask title={"Add new task"} onClose={closeModal}/>}
            <h1 className="font-medium my-5 text-center text-lg">
                Tasks
            </h1>
            <ul className="mt-4 grid gap-2 xl:grid-cols-3 lg:grid-cols-4 items-end">
                {allTasks.map((task) => {
                    return (
                        
                        <Task deleteTask={()=>deleteTask(task._id)} key={task._id} title={task.title} description={task.description}
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
            {showDeleteModal && <ModalConfirm handleDeleteItem={handleDeleteItem}  onClose={handleShowDeleteModal} text={`Delete this task `}/>}
        </div>
    )
}

export default LayoutRoutes;