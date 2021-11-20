import React from 'react';
import {useEffect,useState} from 'react';
import Cart from '../cart/Cart';
import NavBar from '../navBar/NavBar'
import Display from '../display/Display';


import Peoples from '../peoples/Peoples';

const Main = () => {
    const [userData,setUserData] = useState([]);
    const [addedData,setAddedData]=useState([]);

    const handleAdd = (user)=>{
        const newData = [...addedData,user];
        setAddedData(newData);
        
    }

    useEffect(() => {
        fetch('./employeeDb.json')
        .then(response => response.json())
        .then(data => {
            setUserData(data);
        });
    }, [])


    return (
        <div className="bg-dark ">
          <NavBar></NavBar>
        <div className="text-center container">
            <div className="text-light" >
            <h2>Employee Selection for Navana Corporation </h2>
            <h3>Max Budget $350000</h3>
            </div>
            <div className="bg-warning">
            <Cart addedData={addedData}></Cart>
            </div>
            <div className="row">
        <div className="col-8 m-0 text-center border-end">
        <Peoples userData={userData} handleAdd={handleAdd}> </Peoples>
        </div>
        <div className="col-4 text-nowrap ">
            <div className="sticky-top">
            <h4 className="m-5 text-center text-light ">Employees Added </h4>
         {addedData.map((user)=>{
         return (
         <Display user={user} key={user.id}> </Display>
         );
         })}
         </div>
        </div>
        </div>

        </div>
        </div>
    );
};

export default Main;