import React from 'react'
import Modal from "./Modal";
 const ModalConfirm = ({handleDeleteItem,onClose,title,text}) => {
  return (
    <div> <Modal onClose={onClose} title="Are you sure?">
    <p className="text-slate-500">{text}</p>
    <div className="mt-7 ml-auto">
      <button className="btn ml-6" onClick={onClose} >Cancel</button>
      <button onClick={handleDeleteItem}  className="btn ml-6" style={{backgroundColor:'#dc3545'}}>
        Delete
      </button>
    </div>
  </Modal>
  </div>
  )
}
export default React.memo(ModalConfirm)