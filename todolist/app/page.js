'use client'
import React, {useState} from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [main, setmain] = useState([])
  const submitHandler = (e) => {
     e.preventDefault()
     setmain([...main, {task, desc}])
     settask("")
     setdesc("")
     console.log(main)
  }

  const deleteHandler = (i) => {
      let copyTask = [...main]
      copyTask.splice(i, 1)
      setmain(copyTask)
  }

  let renderTask = <h2>No Task Available</h2>

  if( main.length > 0){
    renderTask = main.map((t, i) => {
      return ( 
      <li key={i} className='flex justify-between items-center mb-5'>
        <div className='flex justify-between items-center w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.task}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button onClick={() => {deleteHandler(i)}} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
      )
    })
  }
  return (
    <>
    <h1 className='bg-black text-white h-24 text-5xl font-bold p-6 text-center'>
      My ToDo List
    </h1>

    <form onSubmit={submitHandler}>
      <input
      type='text'
      className='text-xl border-zinc-700 border-4 m-8 px-4 py-2'
      placeholder='Enter your task here'
      value={task}
      onChange={(e) => {
      settask(e.target.value)
      }}
      />

      <input
      type='text'
      className='text-xl border-zinc-700 border-4 m-8 px-4 py-2'
      placeholder='Description'
      value={desc}
      onChange={(e) => {
      setdesc(e.target.value)
      }}
      />

      <button className='bg-black text-white px-4 py-3 text-xl font-bold rounded-md m-5'>
        Add Task</button>

    </form>

    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page