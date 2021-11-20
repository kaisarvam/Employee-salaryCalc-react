import React from 'react';
import People from '../people/People';

const Peoples = (props) => {
    const {userData} =props;
    
   
    return (
        <div className="row m-0 ps-3">
            
            {userData.map((user)=>{
return( <People user={user} key={user.id} handleAdd={props.handleAdd}> </People> ) ;
            })}
            

        </div>
        
    );
};

export default Peoples;