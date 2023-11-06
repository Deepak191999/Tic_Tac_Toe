import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';   //ye ek libraray  install kri hai fontawesome ke icons ke liye

function Icon({name}){

    if(name == "circle"){
        return<FaRegCircle />
    }
    else if(name == "cross"){
        return <FaTimes />
    }
    else{
        return <FaPen />
    }
}
export default Icon;