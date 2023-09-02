import HeaderTask from "./HeaderTask";
import LayoutRoutes from "./LayoutRoutes";

const TasksSection = () => {
    return (
        <div className="min-h-screen pt-5 pb-8 px-3 xl:w-8/12 m-auto">
            <HeaderTask />
            <LayoutRoutes />
        </div>
    )
}

export default TasksSection;