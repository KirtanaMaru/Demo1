import React, { useState} from 'react'
import axios from "axios"
const Add = () => {

  let   [data,setData]= useState({"_id":"","name":"","phno":"","gender":"","sub1":"","sub2":"","sub3":"","sub4":""})
    let [st,setSt]=useState("")

    let fun=(e)=>{
       setData({...data,[e.target.name]:e.target.value})
    }

    let add= ()=>{
        axios.post("http://localhost:5001/add",data).then((res)=>{
            setSt(res.data.msg)
            if(st==="data saved"){
                setData({"_id":"","name":"","phno":"","gender":"","sub1":"","sub2":"","sub3":"","sub4":""})
            }
        })
    }

  return (
    <div>
      {st.length===0&&<div>{st}</div>}
      Hno:<input type="text" name="_id" onChange={fun} value={data._id}></input>
      Name : <input type="text" name="name" onChange={fun} value={data.name}></input>
      Phno : <input type="text"  name="phno" onChange={fun} value={data.phno}></input>
      Gender : <input type="radio" name="gender" value="male" onChange={fun} checked={data.gender==="male"}/>Male
      <input type="radio" name="gender" value="female" onChange={fun} checked={data.gender==="female"}/>Female
      Sub1 : <input type="text" name="sub1" onChange={fun} value={data.sub1}></input>
      Sub2 : <input type="text" name="sub2" onChange={fun} value={data.sub2}></input>
      Sub3 : <input type="text" name="sub3" onChange={fun} value={data.sub3}></input>
      Sub4 : <input type="text" name="sub4" onChange={fun} value={data.sub4}></input>
      <button onClick={add}>Add</button>
      </div>
  )
}

export default Add
