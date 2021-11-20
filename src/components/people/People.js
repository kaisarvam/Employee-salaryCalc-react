import React from 'react';
import "./People.css"

const People = (props) => {
    const {name,phone,picture,email,salary,address } = props.user;
   
    return (
   <div className="col-3 m-3 pt-4 pb-2 bg-light rounded shadow-lg">
       <div className="card border border-0 setup">
           <img src={picture} alt=""  className="img-fluid"/>
           <h5>Name : {name} </h5>
           <div className="card-body">
           <p className="text-center">Phone : {phone} </p>
           <p className="text-center">Email : {email} </p>
           <p className="text-center">Address : {address} </p>
           <p className="text-center"> Salary : ${salary}</p>
           </div>
           <div className="card-footer ">
           <button className=" btn btn-dark" onClick={()=>{props.handleAdd(props.user)}}> <i className="fas fa-cart-plus"></i>  ADD Eployee </button>
           </div>
       </div>
   </div>
    );
};

export default People;