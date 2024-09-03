import React, { useState,useEffect } from 'react'

const Demo = (props) => {

  const [input, setInput] = useState({
    age: "",
    name: "",
    textarea: "",
    select: "",
  })
  const [submit, setSubmit] = useState(false)
  const [inputs, setInputs] = useState("")
  const onSubmited = (e) => {
    setInputs(e.target.value)
  }
  const handleclick = () => {
    setSubmit(true)
  }

  const numbers = [1, 2, 3, 4, 5, 6];

  const [one, two, ...rest] = numbers;
  const item={
    fname:"rukku",
    color:"red",
  }
  const items={
    lname:"karthi",
    color:"white",
  }
  const  mynumbers={...item, ...items}

  console.log(mynumbers)
  const arr1=[1,2,3]
  let total=0;
  arr1.forEach((val) => {
    total+=val;
    console.log(total)
  })
 const [num1, setNum1] = useState(100)
 useEffect(() =>{
  setNum1(200)
 },[])
console.log("num1",num1)
 


  return (
    <>
      <h1 className='text-center'>
        Form {props.name}
      </h1>
      <div style={{ textAlign: "center" }}>
        <label>Enter Your Name:</label>
        <input type="text" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} /><br />
        <label>Enter Your Age</label>
        <input type="number" value={input.age} onChange={(e) => setInput({ ...input, age: e.target.value })} /><br />
        <label>Enter Your TextArea</label>
        <textarea value={input.textarea} onChange={(e) => setInput({ ...input, textarea: e.target.value })} /><br />
        <label>Enter Your select</label>

        <select value={input.select} onChange={(e) => setInput({ ...input, select: e.target.value })}>
          <option value="oppo">oppo</option>
          <option value="vivo">vivo</option>
          <option value="sumsong">sumsong</option>

        </select><br /><br />
        <button onClick={handleclick}>Submit </button><br />
        <input type="text" value={inputs} onChange={onSubmited} />

        {submit &&
          <>
            <p>{input.name}</p>
            <p>{input.age}</p>
            <p>{input.textarea}</p>
            <p>{input.select}</p>

          </>
        }
        <div>
          <h1>{num1}</h1>
        </div>




      </div>

    </>
  )
}

export default Demo