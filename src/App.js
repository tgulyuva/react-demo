import React,{useState} from 'react'
import Title from './components/Title'
import Form from './components/Form'
import List from './components/List'
import axios from 'axios'
import './App.css'


export const App = () => {
  const [list,setList] = useState ([]);
  const [name,setName] = useState ("");
  const [responseData,setResponseData] = useState ({});


  const baseURL = "http://localhost:9000/task/add"
  function setData(data){
    setList(data)
  }
  
  function createTask() {
    axios
      .post('/task/add', {
        name: name,
        IsDone: false
      })
      .then((response) => {
        setResponseData(response)
      });
  
  }


  const  addTask = (e) =>{
      e.preventDefault();
      const todo ={
          "IsDone":false,
          "Name":name,
          
      }
      createTask()
      console.log(responseData.status)
      list.push(todo)
      setList(list)
      setName("")
  }
  const handleChange = (e)=>{
      setName(e.target.value);
  }
      return (
        <div className="main">
          <Title/>
          <Form todoList={list} todoSet={setData} addTask={addTask} handleChange={handleChange} value={name}/>
          <List todoList={list}/>
        </div>
      );
    }

export default App;