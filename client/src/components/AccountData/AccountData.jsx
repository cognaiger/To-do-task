import LayoutMenu from "../Menu/LayoutMenu"
import DarkMode from "./DarkMode";
import DeleteTasks from "./DeleteTasks";
import TasksDone from "./TasksDone";
import avatar1 from "../../assets/avatar-1.jpg";

const AccountData = () => {
    return (
        <LayoutMenu className={"top-0 right-0"}  >
            <div className="account-box" style={{borderLeft:"1px solid #33333324",height:'100vh'}}>

            <section className="flex flex-col p-5">
                <span className="flex items-center mx-auto">
                    <span className="font-medium">Hi, user</span>
                    <img src={avatar1} alt="User img" className="w-10 rounded-full ml-4"/>
                </span>
                <DarkMode />
                <TasksDone />
                <DeleteTasks />
            </section>
            </div>
        </LayoutMenu>
    )
}

export default AccountData;