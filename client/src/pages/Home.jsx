import AccountData from "../components/AccountData/AccountData";
import Footer from "../components/Footer";
import Menu from "../components/Menu/Menu";
import TasksSection from "../components/TasksSection/TasksSection";

const Home = () => {
    return (
        <div>
            <Menu />
            <TasksSection />
            <Footer />
            <AccountData />
        </div>
    )
}

export default Home;