import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Alert(props) {
  const Capitalize =(word)=>{
    const lower =word.toLowerCase();
    return word[0].toUpperCase() + lower.slice(1);
  }
  return (
    <>
      {props.alert && (<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong> {Capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
      )}
    </>
  );
}


// Challenge Accepted :-
// const changegreen = ()=>{
//   document.body.style.backgroundColor = '#35C649'
// }
// const changeyellow = ()=>{
//   document.body.style.backgroundColor = '#CAB911'
// }
// const changered = ()=>{
//   document.body.style.backgroundColor = '#C15031'
// }

// <Navbar title="Home" about="About" State={State} mode={mode} toggleswitch={toggleswitch} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>

// <div className="dropdown mx-4">
// <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Colored Background
// </button>
// <ul className="dropdown-menu">
//   <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
//   <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
//   <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
// </ul>
// </div>