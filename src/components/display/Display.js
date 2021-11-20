import React from 'react';
import "./Display.css";

const Display = (props) => {
    const {picture,name,salary} = props.user;
    return (
        <div className=" mt-3 bg-light shadow-lg rounded">
        <div className="d-flex justify-content-between align-items-center">
            <img className="img-thumbnail image-size" src={picture} alt="" />
            <br/>
            <div className="text-center me-5">
            <h5 className="">{name}</h5>
            <h5 className="">Salary : ${salary}</h5>
            </div>
        </div>
        </div>
    );
};

export default Display;