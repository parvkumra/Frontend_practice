import React, { useRef, useState } from 'react'

function Employeebtn() {
    const[ename,setEname]=useState('');
    const [add,setAdd]=useState(false);
    const[eage,setEage]=useState('');
    const nameref=useRef(null);
    const ageref=useRef(null);
    const [empl, setEmpl] = useState([
        { name: 'John Doe', age: 65 },
        { name: 'Jane Smith', age: 52 },
        { name: 'Michael Johnson', age: 40 },
        { name: 'Emily Davis', age: 34 },
        { name: 'William Brown', age: 29 },
        { name: 'Olivia Wilson', age: 45 },{ name: 'John Doe', age: 65 },
        { name: 'Jane Smith', age: 52 },
        { name: 'Michael Johnson', age: 40 },
        { name: 'Emily Davis', age: 34 },
        { name: 'William Brown', age: 29 },
        { name: 'Olivia Wilson', age: 45 }
      ]);
      const handleClick=(em)=>{
         setEname(em.name);
         setEage((em.age).toString());
      }
      const addition=()=>{
         setEmpl([...empl,{name:nameref.current.value,age:parseInt(ageref.current.value)}])
      }
      const filtered=(yname)=>{
        const updatedEmpl = empl.filter(em => em.name !== yname);
        setEmpl(updatedEmpl);
       
        if (updatedEmpl.length === 0) {
          setEname('');
          setEage('');
        }
      };
        
      
  return (
    <>
    <center><button onClick={()=>setAdd(true)} className='text-white px-3 py-1 my-4 bg-green-400 font-semibold'>add</button></center>
    <div className='flex bg-yellow-200 justify-around h-[400px] py-4'>
        <div className=' overflow-y-scroll bg-slate-50 py-5 px-6 w-[300px]'>
        <h3 className='text-xl font-bold'>Employee list</h3>
        {empl.map(em=>{
            return(
                <div className=' flex justify-between p-2 cursor-pointer border-black border-solid border' >
                    <p onClick={()=>handleClick(em)}>{em.name}</p>
                    <button onClick={()=>filtered(em.name)}>R</button>
                </div>

            )
        })}
        </div>
        <div className=' bg-white p-6 flex flex-col justify-center items-center w-[200px]'>
                <div className='text-3xl font-bold mb-6'>{ename}</div>
                <div className='text-xl font-semibold'>{eage}</div>
        </div>
      

    </div>
    {add && <div className=' relative flex flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto w-[200px] h-[300px] bg-black z-10'>
       <button className=' bg-red-600 text-white absolute top-0 right-0' onClick={()=>setAdd(false)}> close</button>
       <input ref={nameref} type='text' placeholder='name'/>
       <input ref={ageref} type='number' placeholder='age'/>
       <button className='p-2 bg-green-300 text-white' onClick={addition}>addemp</button>
        </div>}
    </>
  )
}

export default Employeebtn
