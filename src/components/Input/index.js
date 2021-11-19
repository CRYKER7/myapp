//import SelectInput from '@material-ui/core/Select/SelectInput'
import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../../features/todoSlice'
import './styles.css'
import { db } from '../../firebase/firebaseConfig'
import { doc, setDoc } from "firebase/firestore";

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const sendPost = async() => {
        const datos = await setDoc(doc(db, 'post'), {
            item: input,
            done: false,
            timestamp: Date.now()
          });
        console.log(Date.now(),datos)
        setInput('')
    }

    return (
        <div className="input">
            <input type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            />
            <button onClick={sendPost}>Enviar</button>
        </div>
    )
}

export default Input
