import React, { useState } from 'react'
import Attendence from './Attendence';

function Login(props) {


  
  const handleClick = async () => {
    if (text != "") {
      var url = "http://192.168.0.100:5000/api/member?email="+text;
    }
    const data = await fetch(url, { method: 'GET' });
    let parseData = await data.json()
    setDataArr(parseData)
    // parseData.PromiseResult.map((element)=>{
      //   setDataArr(element)
      // })
      console.log(parseData)
      
    }
    const handleOnChange = (event) => {
      setText(event.target.value)
      
    }
    const [text, setText] = useState("")
    const [dataArr, setDataArr] = useState([]);
    
    return (
      <>
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>LOGIN</h2>
          <div className="underline-title"></div>
        </div>
        <textarea
          type="email"
          className="form-control"
          id="textBox"
          aria-describedby="emailHelp"
          placeholder="Enter Text Here"
          value={text}
          onChange={handleOnChange} //!Yai Jaruri hai varna type nai kar paoge!
          />
        <div className="form-border"></div>
        <button type="button" class="btn btn-info" onClick={handleClick}>Get Attendence</button>
      </div>
    </div>
    { dataArr?.map((element)=>{
      return(
        <Attendence email={element.email} date={element.date} time={element.time}></Attendence>
      )
    })}
  
          </>
  )
}

export default Login
