import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
const Home = () => {
    let [data,setData]=useState([])
    let [f,setF]=useState()
    useEffect(()=>{
        axios.get("http://localhost:5001/getdata").then((res)=>{
          setData(res.data)
          console.log(res.data)
          setF(true)
        })
    },[f])

    let del =(hno)=>{
        axios.delete(`http://localhost:5001/deldata/${hno}`).then((res)=>{
              if(res.data!=null){
                setF(false)
              }
        })
    
    }
  return (
    <div>
        <table border={1}>
            <tr>
                <th>Hno</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Phno</th>
                <th>sub1</th>
                <th>sub2</th>
                <th>sub3</th>
                <th>sub4</th>
                <th>Total</th>
            </tr>
            {
                data.map((item)=>{
                return (    <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.phno}</td>
                        <td>{item.sub1}</td>
                        <td>{item.sub2}</td>
                        <td>{item.sub3}</td>
                        <td>{item.sub4}</td>
                        <td>{item.sub1+item.sub2+item.sub3+item.sub4}</td>
                        <td><button onClick={()=>del(item._id)}>Delete</button></td>
                    </tr>
                )
                })
            }
        </table>
      
    </div>
  )
}

export default Home
