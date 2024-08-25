import React from 'react'
import {useState} from 'react'
import axios from 'axios'
const Result = () => {
    let [data,setData] = useState({})
    let [hno,setHno] = useState()
    let [st,setSt]=useState()
    let fun = (e)=>{
         setHno(e.target.value)
    }

    let getdata = ()=>{
        axios.get(`http://localhost:5001/getbyid/${hno}`).then((res)=>{
            if(res.data!==null){
                setData(res.data)
                setSt("")
            }
            else{
             setData({})
            setSt("Check Hno")

            }
        })
    }
    
  return (
    <div>
        {/* {st!="" && <div>{st}</div>} */}
        <div>{st}</div>
 
        Hno: <input type="text" name="hno" onChange={fun} value={hno}></input>
        <button onClick={getdata} >GetData</button>
        {data._id!==undefined &&<table>
            <tr>
                <th>Hno</th>
                <td>{data._id}</td>
            </tr>
            <tr>
                <th>Name</th>
                <td>{data.name}</td>
            </tr>
            <tr>
                <th>Phno</th>
                <td>{data.phno}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{data.gender}</td>
            </tr>
            <tr>
                <th>Sub1</th>
                <td>{data.sub1}</td>
            </tr>
            <tr>
                <th>Sub2</th>
                <td>{data.sub2}</td>
            </tr>
            <tr>
                <th>Sub3</th>
                <td>{data.sub3}</td>
            </tr>
            <tr>
                <th>Sub4</th>
                <td>{data.sub4}</td>
            </tr>
            <tr>
                <th>Total</th>
                <td>{data.sub1+data.sub2+data.sub3+data.sub4}</td>
            </tr>
        </table>
}
    </div>
  )
}

export default Result