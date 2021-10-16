import React, { useState } from "react";
import Bill from "../Bill";
import "./Customer.css";

const Customer = () => {
  const [address, setAddress] = useState();
  const [permenentaddress, setPermenentaddress] = useState();
  const [date, setDate] = useState();
  const [age, setAge] = useState();
  const [radio, setRadio] = useState();
  const [picture, setPicture] = useState(null);

  //  const datehandle = (e) =>{
  //     setDate(e.target.value);
  //     console.log(date);

  //   const  Xmas = new Date(date);
  //   const year = Xmas.getYear();
  //   const d = new Date();
  //   const n = d.getFullYear();
  //   const ageop = year - n;
  //   setAge(ageop);
  //  (e)=> setDate(e.target.value)
  //  }
  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setRadio(e.target.value);
    }
  };

  const onChangeHandler = e => {
    if (radio == "yes") {
      setPermenentaddress(address);
    } else if (radio == "no") {
      setPermenentaddress(e.target.value);
    } else {
    }
  };

  return (
    <>
      <form>
      <Bill />
        <div className="flex mx-24">
           


<div className="  mt-4 ">
        <div className="">  <label className="py-4" >Customer ID : </label>  </div>  <br /> 
        <div className="pt-2">  <label className="">Name : </label> </div>  <br />
          <div className="pt-2"> <label className=" ">Relation :  </label> </div>  <br />
          <div className="pt-2">  <label className=" ">Nominee : </label> </div>  <br />
          <div className="pt-2"> <label>Land Mark : </label> </div>  <br />
          <div className="pt-2">  <label className="">Pincode : </label> </div>  <br />
          <div className="pt-2"> <label >City : </label>  </div> <br />
          <div className="pt-2">  <label className="">Mobile No : </label> </div>  <br />
          <div className="pt-2"> <label>Alternative No : </label> </div>  <br />
          <div className="pt-2"> <label className="">Date Of Birth : </label>  </div> <br />
          <div className="pt-2"> <label>Age : </label> </div>  <br />
        </div>
        <div className=" mt-4">
          
        <div className="pt-1"> <input type="text" className="border-2 border-gray-600 " /> </div><br />
        <div className="pt-1"> <input  type="text"  className="border-2 border-gray-600 " />  </div><br />
        <div className="pt-1">   <select   placeholder="Select"   className="border-2 border-gray-600  "   >
              <option value="-1">--select--</option>
              <option value="13823">C/O</option>
              <option value="3205">D/O</option>
              <option value="3195">S/O</option>
              <option value="3204">W/O</option>
            </select>  </div><br />
        <div className="pt-1"> <input type="text" className="border-2 border-gray-600  " />  </div><br />
        <div className="pt-1">  <input  type="text"  className="border-2 border-gray-600 " />  </div><br />
        <div className="pt-1">  <input type="text" className="border-2 border-gray-600  " /> </div> <br />
        <div className="pt-1">  <input type="text" className="border-2 border-gray-600 " /> </div> <br />
        <div className="pt-1">  <input  type="number"  className="border-2 border-gray-600 " /> </div><br />
        <div className="pt-1">  <input type="number" className="border-2 border-gray-600 " /> </div><br />
        <div className="pt-1"><input  type="date"  className="border-2 border-gray-600 " value={date} onchange={e => setDate(e.target.value)} /> </div><br />
        <div className="pt-1"><input  type="text"  className="border-2 border-gray-600 " /> </div><br />
        </div>




          <div className="ml-24 mt-4">
            
            <label className=" flex ">Current Address : </label>
            <textarea
              placeholder="Message..."
              className="border-2 border-gray-600 lg:w-80 w-72 py-2 px-4 ml-12 mt-2 rounded-lg"
              rows="5"
              value={address}
              onChange={e => setAddress(e.target.value)}
            ></textarea>{" "}
            <br />
            {console.log(address)}
            <p className="mt-2 -mb-4">
              Permenent Address is Different From Current Address :
            </p>{" "}
            <br />
            {/* <div className="-mt-6">
          <label className="mr-4 ml-2">yes</label>
          <input type="radio" value={yes} name="age"  onChange={ handleChange }   />
          <label className="ml-2">No</label>
          <input type="radio" value={no} name="age"  onChange={ handleChange }   />
          </div> */}
            <div>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={radio == "yes"}
                  onClick={handleChange}
                />
                yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={radio == "no"}
                  onClick={handleChange}
                />
                no
              </label>
              {console.log(radio)}
            </div>
            <label className=" flex">Permenent Address : </label>
            <textarea
              placeholder="Message..."
              className="border-2 border-gray-600 lg:w-80 w-72 py-2 px-4 ml-12 mt-2 rounded-lg"
              rows="5"
              value={permenentaddress}
              onChange={onChangeHandler}
            ></textarea>{" "}
            <br />
            {console.log(permenentaddress)}
          </div>

          <div className="ml-24 mt-4">
            <input type="file" onChange={onChangePicture} />
            <img src={picture && picture} className="w-48 h-48" />
          </div>
        </div>

       

      </form>
      
    </>
  );
};

export default Customer;




{/* <div className="ml-24 apple">
            <label>Customer ID : </label>
            <input
              type="text"
              className="border-2 border-gray-600  mt-8 ml-16 "
            />
            <br />

            <label>Name : </label>
            <input
              type="text"
              className="border-2 border-gray-600  mt-8 ml-28"
            />
            <br />

            <label>Relation : </label>
            <select
              placeholder="Select"
              className="border-2 border-gray-600  mt-8 ml-24"
            >
              <option value="-1">--select--</option>
              <option value="13823">C/O</option>
              <option value="3205">D/O</option>
              <option value="3195">S/O</option>
              <option value="3204">W/O</option>
            </select>
            <br />

            <label>Nominee : </label>
            <input
              type="text"
              className="border-2 border-gray-600  mt-8 ml-20"
            />
            <br />

            <label>Land Mark : </label>
            <input
              type="text"
              className="border-2 border-gray-600  mt-8 ml-16"
            />
            <br />

            <label>Pincode : </label>
            <input
              type="number"
              className="border-2 border-gray-600  mt-8 ml-20"
            />
            <br />

            <label>City : </label>
            <input
              type="text"
              className="border-2 border-gray-600  mt-8 ml-28"
            />
            <br />

            <label>Mobile No : </label>
            <input
              type="number"
              className="border-2 border-gray-600  mt-8 ml-16"
            />
            <br />

            <label>Alternative No : </label>
            <input
              type="number"
              className="border-2 border-gray-600  mt-8 ml-8"
            />
            <br />

            <label>Date Of Birth : </label>
            <input
              type="date"
              className="border-2 border-gray-600  mt-8 ml-10"
              value={date}
              onchange={e => setDate(e.target.value)}
            />
            <br />
            {console.log(date)}
          </div>  */}



           {/* <div className="flex  ">
        <div className="  apple ">
        <div className="pt-1">  <label className="py-4" >Customer ID : </label>  </div>  <br /> 
        <div className="pt-1">  <label className="">Name : </label> </div>  <br />
          <div className="pt-1"> <label className=" ">Relation :  </label> </div>  <br />
          <div className="pt-1">  <label className=" ">Nominee : </label> </div>  <br />
          <div className="pt-1"> <label>Land Mark : </label> </div>  <br />
          <div className="pt-1">  <label className="">Pincode : </label> </div>  <br />
          <div className="pt-1"> <label >City : </label>  </div> <br />
          <div className="pt-1">  <label className="">Mobile No : </label> </div>  <br />
          <div className="pt-1"> <label>Alternative No : </label> </div>  <br />
          <div className="pt-1"> <label className="">Date Of Birth : </label>  </div> <br />
          <div className="pt-1"> <label>Age : </label> </div>  <br />
        </div>
        <div className="apple ">
          
        <div className="pt-1"> <input type="text" className="border-2 border-gray-600 " /> </div><br />
        <div className="pt-1"> <input  type="number"  className="border-2 border-gray-600 " />  </div><br />
        <div className="pt-1">  <input type="text" className="border-2 border-gray-600  " />  </div><br />
        <div className="pt-1"> <input type="text" className="border-2 border-gray-600  " />  </div><br />
        <div className="pt-1">  <input  type="number"  className="border-2 border-gray-600 " />  </div><br />
        <div className="pt-1">  <input type="text" className="border-2 border-gray-600  " /> </div> <br />
        <div className="pt-1">  <input type="text" className="border-2 border-gray-600 " /> </div> <br />
        <div className="pt-1">  <input  type="number"  className="border-2 border-gray-600 " /> </div><br />
        <div className="pt-1">  <input type="text" className="border-2 border-gray-600 " /> </div><br />
        <div className="pt-1"><input  type="number"  className="border-2 border-gray-600 " /> </div><br />
        </div>
        </div> */}
