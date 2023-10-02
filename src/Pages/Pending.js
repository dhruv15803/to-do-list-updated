import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

const Pending = (props) => {


  return (
    <>
    <div className="pending-outer-container">
        <div className="pending-child-container">
            <h1>Your tasks</h1>
            {props.tasks.length===0 && <div className='no-tasks'>
                <p>There are no pending tasks</p>
                <Link to='/'><button className="error-btn">Go here to add tasks</button></Link>
                </div>}
            {props.tasks.length!==0 && props.tasks.map((item,index)=>{
                return <div className="pending-task-container">
                    <div className="pending-task-title">
                        <div className="pending-task-heading">
                            {item.task}
                        </div>
                        {item.description.trim()!== '' && <div className="show-description">
                            <button className="btn" onClick={()=>props.changeShow(index)}>{item.show ? 'Hide details' : 'Show details'}</button>
                        </div>}
                        {item.show && <div className="pending-task-description">
                            {item.description}
                        </div>}
                    </div>
                    <div className="pending-task-btns">
                        <button className="btn" onClick={()=>props.completeTask(index)}>Complete task</button>
                        <button className="btn" onClick={()=>props.deleteTask(index)}>Delete task</button>
                    </div>
                </div>
            })}
            {props.tasks.length!==0 && <button className="btn" style={{margin:'10px auto'}} onClick={props.clearTasks}>clear tasks</button>}
        </div>
    </div>
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

export default Pending