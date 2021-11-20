import React from 'react';

const Cart = (props) => {
    let total = 0;
    props.addedData.map((data)=>{
    return ( total = total + data.salary)
    });

    return (
        <div className="text-center sticky-top ">
           <h3  > Total Amount on Selected Employees </h3> 
           <div >
           <h4 className="pt-3 pb-3" > Total Employee selected : <span>{props.addedData.length}</span> </h4>
           <h4 className="pt-1" > Total Amount : $<span>{total}</span> </h4>
           </div>
           
        </div>
    );
};

export default Cart;