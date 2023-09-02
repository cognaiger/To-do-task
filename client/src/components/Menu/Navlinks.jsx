const Navlinks = () => {

    return (
        <nav>
            <ul className="grid gap-2">
                <li
                    className={`px-4 py-4 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 
                        `}>Today's Tasks</li>

                <li
                    className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 
                        `}>All Tasks</li>
                <li
                    className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 
                        `}>Completed tasks</li>
                <li
                    className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 
                        `}>Uncompleted tasks</li>

            </ul>
        </nav>
    )
}

export default Navlinks;
