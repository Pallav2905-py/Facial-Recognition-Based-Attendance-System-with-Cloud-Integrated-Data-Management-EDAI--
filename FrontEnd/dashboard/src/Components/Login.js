import React, { useState } from 'react'
import Attendence from './Attendence';
import Loader from './Loader';

function Login(props) {
  const handleClick = async () => {
    setLoader("visible")
    if (text != "") {
      var url = "http://localhost:5000/api/member?email=" + text;
    }
    const data = await fetch(url, { method: 'GET' });
    let parseData = await data.json()
    setDataArr(parseData)
    // parseData.PromiseResult.map((element)=>{
    //   setDataArr(element)
    // })
    console.log(parseData)
    setLoader("hidden")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)

  }
  const [text, setText] = useState("")
  const [dataArr, setDataArr] = useState([]);
  const [loader, setLoader] = useState('hidden')
  return (
    <>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>Fetch Attendence</h2>
            <div className="underline-title"></div>
          </div>
          <textarea
            type="email"
            className="form-control"
            id="textBox"
            aria-describedby="emailHelp"
            placeholder="Enter Email Here"
            value={text}
            style={{ textAlign: 'center' }}
            onChange={handleOnChange} //!Yai Jaruri hai varna type nai kar paoge!
          />
          <div className="form-border"></div>
          <button type="button" class="btn btn-info" onClick={handleClick} style={{ width: '100%' }}>Get Attendence</button>
        </div>
      </div>
      <div className="loader" style={{ visibility: loader }}>
        <Loader></Loader>
      </div>
      {dataArr?.map((element) => {
        return (
          <Attendence email={element.email} date={element.date} time={element.time}></Attendence>
        )
      })}

    </>
  )
}

export default Login
