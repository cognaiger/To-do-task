import BtnComplete from "./BtnComplete";
import BtnDelete from "./BtnDelete";
import BtnEdit from "./BtnEdit";
import '../../../style/SingleTask.css'
import { ReactComponent as Calendar } from "../../../assets/date.svg";


const Task = ({deleteTask, handleShowDeleteModal,title, description, deadline, done }) => {

    return (
        <>
            <div className="bg-slate-200 rounded-lg p-3 flex text-left flex-col h-52 single-task">
                <div className="flex flex-col flex-1" >
                    <div className="text-slate-800 items-center justify-between mb-2 block font-medium">
                        {title}
                    </div>
                    <div className="mb-2 text-slate-500 line-clamp-3">
                        {description}
                    </div>
                    <div className="text-slate-800 flex mt-auto w-full">
                        <Calendar className="mr-2 w-4" />
                        {deadline}
                    </div>
                </div>
                <div className="flex border-dashed border-slate-200 border-t-2 w-full pt-4 mt-4">
                    <BtnComplete status={done} />
                    <BtnDelete deleteTask={deleteTask} />
                    <BtnEdit />
                </div>
            </div>
            

            
         
        </>
    )
}

export default Task;