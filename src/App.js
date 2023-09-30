import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Completed from './Pages/Completed';
import Pending from './Pages/Pending';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  let pendingTasks = JSON.parse(localStorage.getItem('pendingTasks'));
  let completedTasks = JSON.parse(localStorage.getItem('completedTasks'));
  if(pendingTasks===null){
    pendingTasks=[];
  }
  if(completedTasks===null){
    completedTasks=[];
  }
  const [tasks,setTasks] = useState(pendingTasks);
  const [completed,setCompleted] = useState(completedTasks);
  const [formData,setFormData] = useState({
    'task':'',
  });

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [name]:value,
      }
    })
  }

  const addTask = (event)=>{
    event.preventDefault();
    if(formData.task.trim()===''){
      toast.error('Please enter a task');
      return;
    }
    setTasks(prevTasks=>[...prevTasks,formData.task]);
    setFormData({
      'task':'',
    })
    toast.success('Added task to list');
  }

  const deleteTask = (index)=>{
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const completeTask = (index)=>{
    setCompleted(prevCompleted=>[...prevCompleted,tasks[index]]);
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
    toast.success('Completed task!');
  }

  const clearCompleted = ()=>{
    setCompleted([]);
  }

  const clearTasks = ()=>{
    setTasks([]);
  }

  useEffect(()=>{
    localStorage.setItem('pendingTasks',JSON.stringify(tasks));
    localStorage.setItem('completedTasks',JSON.stringify(completed));
  },[tasks,completed])


  return (
    <>
    <Router>
      <Navbar completed={completed} tasks={tasks}/>
      <Routes>
        <Route path='/' element={<Home 
        formData={formData} 
        addTask={addTask} 
        handleChange={handleChange}
        />}/>
        <Route path='/list' element={<Pending 
        tasks={tasks}
         clearTasks={clearTasks}
         deleteTask={deleteTask}
         completed={completed}
         completeTask={completeTask}
        />}/>
        <Route path='/completed' element={<Completed 
        completed={completed}
         clearCompleted={clearCompleted}
        />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
