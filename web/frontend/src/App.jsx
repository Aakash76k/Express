import { useState,useEffect } from 'react'
import Form from "./components/Form";

import './App.css'


function App() {
  // const [students, setStudents] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:5000/api/students')
  //   .then((res)=>{
  //     res.json();
  //   })
  //   .then((data)=>{
  //     setStudents(data);
  //   }).catch((err)=>{
  //     console.log("server error : ", err);
  //   })
  // },[])

  return (
    <>
      {/* <div>
        <h2>My Students : </h2>
        <ul>{students.length > 0 ? (
          students.map((std,index)=>{
            <li key={index}> {index + 1}, {std}</li>
          })
        ):(
          <p>loading...</p>
        )}</ul>
      </div> */}

      <Form/>
    </>
  )
}

export default App
