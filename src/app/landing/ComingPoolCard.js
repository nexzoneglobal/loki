import React, { useState } from 'react';
import './index.css';

const ComingPoolCard = (props) => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  var time = new Date(props.preSaleStartDateAndTime)
  function timer() {
    var now = new Date()
    var diff = time.getTime() - now.getTime()
    if (diff <= 0) {
      return;
    }
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor(diff / (1000 * 60));
    var secs = Math.floor(diff / 1000);
    var d = days;
    var h = hours - days * 24;
    var m = mins - hours * 60;
    var s = secs - mins * 60;
    setDay(d);
    setHour(h);
    setMin(m);
    setSec(s)
  }
  setInterval(() => {
    timer()
  }, 1000);

  return (
    <div className=" card-main">
      <div className="main-image">
        <img src={props.logoURL} alt="" />
        <h1 style={{ marginLeft: 20 }}>{props.projectName}</h1>
        {/* <button>{props.tier}</button> */}
      </div>
      <div className="calender">
        <h1>Opens In</h1>
        <div className="main-calender">
          <h1>{day} <br></br><span>DAYS</span></h1>
          <h1>{hour} <br></br><span>HRS</span></h1>
          <h1>{min} <br></br><span>MIN</span></h1>
          <h1>{sec} <br></br><span>SEC</span></h1>
        </div>
        <p>{props.preSaleStartDateAndTime.toUTCString()}</p>
      </div>
      <div className="progress-baar">
        {/* <p className="coming-soon-feature">ALLOCATION: {props.allcation} OF TOTAL AVAILABLE</p> */}
        {/* <div className="min-max">
          <p className="one">Min: {props.min} BNB</p>
          <p>Max: {props.max} BNB</p>
        </div> */}
      </div>
    </div>
  );
}
export default ComingPoolCard
