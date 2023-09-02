import { useState } from "react";

const BtnComplete = ({status}) => {
    const [isCompleted, setIsCompleted] = useState(status);

    const handleClick = () => {
        setIsCompleted(!isCompleted);
    }

    return (
        <button className={`${isCompleted ? "bg-amber-200 text-amber-800" : "bg-emerald-200 text-emerald-800"} 
        mr-4 rounded-full font-medium focus:outline-none`}
        onClick={handleClick}>
            <span className="block px-3 py-1">
                {isCompleted ? "Complete" : "Incomplete"}
            </span>
        </button>
    )
}

export default BtnComplete;