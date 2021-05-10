import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export default function Notify (message){
    alert(message)
    return (
        toast(message)
    )
}

