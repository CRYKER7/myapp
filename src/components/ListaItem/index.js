import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch} from 'react-redux'
import { setCheck } from '../../features/todoSlice'
import './styles.css'


export const ListaItem = ({item, done, id}) => {
    const dispatch = useDispatch()

    const hanldeCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="listaItem">
            <Checkbox
                checked={done}
                onChange={hanldeCheck}
                value="checked8"
                color="primary"
            />
            <p className={done ? 'listaTtem--done' : ''}>{item}</p>
        </div>
    )
}
