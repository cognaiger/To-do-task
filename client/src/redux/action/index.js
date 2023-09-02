import axios from 'axios'
import { ADDNEW_TODO,GET_ALLTASKS,DELETE_TASK } from './type'
const API_URL = 'http://localhost:8000'
export const addNewToDo = ({title,description,deadline}) => async (dispatch) => {
    try {
        console.log(title,description,deadline);
        
        const res = await axios.post(`${API_URL}/tasks`, { title,description,deadline })
        
        console.log(res.data)
        
        dispatch({ type: ADDNEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling addNewToDo API', error.message)
    }
}
export const GetAllTasks = () => async (dispatch) => {
    
    try{
        const res = await axios.get(`${API_URL}/tasks`)

        dispatch({type:GET_ALLTASKS,payload:res.data})
    }
    catch (error){
        console.log('Error while calling getALL API',error.message)
    }
}
export const DeleteTask = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/tasks/${id}`)
        
        console.log(res);
        // phong sang reducer
        dispatch({type:DELETE_TASK,payload:res.data});

    } catch (error) {
        console.log('Error while calling delete API',error.message)
        
    }

}