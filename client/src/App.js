import AccountData from "./components/AccountData/AccountData";
import Footer from "./components/Footer";
import Menu from "./components/Menu/Menu";
import TasksSection from "./components/TasksSection/TasksSection";

function App() {
  const className = ''
  return (
    <div className="app min-h-screen">
      <Menu />
      <TasksSection />
      <Footer />
      <AccountData />
    </div>
  );
}

export default App;
