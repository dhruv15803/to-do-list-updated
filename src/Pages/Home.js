import React from 'react'
import HeadingText from '../Components/HeadingText'
// import { Link } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = (props) => {
  return (
    <>
    <HeadingText/>
    {/* <div className="heading-btns-container">
        <Link to='/list'><button className="btn">Pending tasks</button></Link>
        <Link to='/completed'><button className="btn">Completed tasks</button></Link>
    </div> */}
    <form className='home-form' onSubmit={props.addTask}>
        <input value={props.formData.task} onChange={props.handleChange} type="text" name="task" id="task" placeholder='Enter task' className='inputBox' />
        <button className="btn">Add task</button>
    </form>
    <ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default Home