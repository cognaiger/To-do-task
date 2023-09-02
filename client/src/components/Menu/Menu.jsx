import BtnAddTask from "./BtnAddTask";
import LayoutMenu from "./LayoutMenu";
import Navlinks from "./Navlinks";
import "./Menu.css";
const Menu = () => {
    return (
        <LayoutMenu className={"left-0"}>
            <header className="h-full flex flex-col left-box">
                <h1 className="title font-bold uppercase text-center mt-8 text-lg tracking-wide">
                    To-do list
                </h1>
                <BtnAddTask />
                <div className="link-box">
                <Navlinks />
                </div>
            </header>
        </LayoutMenu>
        
    )
}

export default Menu;