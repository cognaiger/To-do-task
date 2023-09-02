import Notification from "./HeaderTaskComponent/Notification";
import SearchField from "./HeaderTaskComponent/SearchField";

const HeaderTask = () => {
    return (
        <div className="items-center grid grid-cols-[1fr_auto_1fr] gap-4">
            <SearchField />
            <Notification />
            </div>
    )
}

export default HeaderTask;