import React from 'react'
import { Link } from 'react-router-dom'

const Completed = (props) => {
  return (
    <>
    <div className="completed-outer-container">
        <div className="completed-child-container">
            <h1>Your tasks</h1>
            {props.completed.length===0 && <div className='no-tasks'>
                <p>There are no completed tasks</p>
                <Link to='/'><button className="error-btn">Go here to add tasks</button></Link>
                </div>}
            {props.completed.length!==0 && props.completed.map((item,index)=>{
                return <div className="completed-task-container">
                    <div className="completed-task-title">
                        {item}
                    </div>
                </div>
            })}
            {props.completed.length!==0 && <button className="btn" style={{margin:'10px auto'}} onClick={props.clearCompleted}>clear completed</button>}
        </div>
    </div>
    </>
  )
}

export default Completed