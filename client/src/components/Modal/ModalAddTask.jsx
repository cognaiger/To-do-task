import { useState } from "react";
import Modal from "./Modal";
import {addNewToDo} from "../../redux/action/index"
import { useDispatch } from "react-redux"; 
const Checkbox = ({label}) => {

    const [isChecked, setIsChecked] = useState(false);

    const check = () => {
        setIsChecked(!isChecked);
    }

    return (
        <label className="mb-0 flex items-center cursor-pointer">
            <div className="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700">
                {isChecked && <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>}
            </div>
            <span className="order-1 flex-1">{label}</span>
            <input className="sr-only" type="checkbox" onClick={check} />
        </label>
    )
}

const ModalAddTask = ({onClose}) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const[deadline,setDeadline] = useState('');
    const dispatch = useDispatch();
    
    const onAddFormSubmit = (e) => {
    
        dispatch(addNewToDo({title,description,deadline}))

    }
    return (
        <Modal onClose={onClose}>
            <form className="flex flex-col space-y-4" onSubmit={(e)=> onAddFormSubmit(e)}>
                <label>
                    Title
                    <input
                    type="text"
                    placeholder="e.g study for test"
                    className="w-full inputStyles"
                    required
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Description
                    <input
                    type="text"
                    placeholder="e.g study for test"
                    className="w-full inputStyles"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    />
                </label>
                <label>
                    Deadline
                    <input
                    type="date"
                    placeholder="e.g study for test"
                    className="w-full inputStyles"
                    required
                    value={deadline}
                    onChange={e=>{
                        setDeadline(e.target.value)
                        
                    }}

                    />
                </label>
                <Checkbox label={"Mark as completed"} />
                <button className="mt-5 btn">
                    Add new todo
                </button>
            </form>
        </Modal>
    )
}

export default ModalAddTask;