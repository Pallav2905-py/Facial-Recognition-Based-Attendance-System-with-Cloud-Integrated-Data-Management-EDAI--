import React from 'react'

function Attendence(props) {
  return (
    <>
      <div id="attendence-card">
        <div className="left">
        <p>{props.email || "pallav@vit.edu" }</p>
        </div>
        <div className="right">
          <h3 className='date'> {props.date || "29-10-2023"}</h3>
          <h4 className='time'>{props.time || "4.27" } </h4>

        </div>
      </div>
    </>
  )
}

export default Attendence
