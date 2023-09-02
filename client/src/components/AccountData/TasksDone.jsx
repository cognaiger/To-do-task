import '../../style/TaskDone.css'
const TasksDone = () => {
    return (
        <>
        <div className="mt-6">
          <span className="flex justify-between mb-2">
            <span>All tasks </span> 3/5
          </span>
          <div className="barProgress bg-slate-200 w-full h-2 rounded-full overflow-hidden dark:bg-slate-700/[.3]">
            <div className="barPercent"></div>
          </div>
        </div>
        <div className="mt-8 mb-8">
          <span className="flex justify-between mb-2">
            <span>Tasks today</span> 0/
            1
          </span>
          <div className="barProgress bg-slate-200 w-full h-2 rounded-full overflow-hidden" >
            <div style={{ width: "0%" }}></div>
          </div>
        </div>
        <hr/>  
        </>
    )
}

export default TasksDone;