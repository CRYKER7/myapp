import React,{ useState, useEffect } from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Input from './components/Input/index';
import { ListaItem } from './components/ListaItem';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectTodoLista, saveTodo } from './features/todoSlice'
import { Login } from './components/Login';
import { collection, getDocs, onSnapshot, doc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

function App() {
  const todoLista = useSelector(selectTodoLista)
  const [user, setUser] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const obtenerDatos = async()=>{
      const datos = await getDocs(collection(db,'post'),{
        dispatch(saveTodo(datos.map(doc)=>{
          id: doc.id,
          item: doc.data().item,
          done: doc.data().done
        }))
      })}
      console.log(datos)
    }

    obtenerDatos();
  },[])

  return (
    <div className="App">
      <div className="container">
        {
          user ? <>
          <div className="lista">
            {
              todoLista.map(item => (
                <ListaItem item={item.item} done={item.done} id={item.id} />
              ))
            } 
          </div>
          <Input/>
          </> : <Login/>
        }
        
      </div>
    </div>
  );
}

export default App;
