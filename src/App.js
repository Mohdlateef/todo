import logo from './logo.svg';
import './App.css';
import Input from './Input';
import React,{useState} from 'react';
import Todolist from './Todolists';
function App() {
  const [listTodo,setlistTodo]=useState([]);
  // console.log(listTodo)
  const deleteListitem=(i)=>{
    let newlist=[...listTodo];
    console.log(i)
    

    newlist.splice(i,1);
    // console.log(newlist)

    setlistTodo([...newlist]);
  }
  return (
<div>
<Input setlistTodo={setlistTodo} listTodo={listTodo}/>
<Todolist listTodo={listTodo} deleteListitem={deleteListitem}/>
</div>
    
  );
}

export default App;
