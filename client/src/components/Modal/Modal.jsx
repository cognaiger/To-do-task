import { ReactComponent as Close } from "../../assets/x.svg";
import ReactDOM from "react-dom";

const ModalContent = ({title, children, onClose}) => {

    return (
        <div className="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] w-full h-full z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200">
            <div className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900">
                <button className="absolute right-3 sm:right-4" onClick={onClose}>
                    <Close className="w-8 h-8"/>
                </button>
                <h2 className="font-medium mb-5 text-lg md:text-2xl">{title}</h2>
                {children}
            </div>
        </div>
    )
}

const modalElement = document.getElementById("modal");

const Modal = ({children, title, onClose}) => {
    return ReactDOM.createPortal(<ModalContent children={children} title={title} onClose={onClose}/>,
    modalElement);
}

export default Modal;