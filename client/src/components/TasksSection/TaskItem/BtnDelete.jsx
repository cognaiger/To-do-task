import { ReactComponent as Trash } from "../../../assets/trash.svg";

const BtnDelete = ({ deleteTask }) => {
    return (
        <button onClick={deleteTask} className="ml-2 transition">
            <Trash className="w-5 h-5"/>
        </button>
    )
}

export default BtnDelete;