import React from "react";
//import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";


class Cash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empname: "",
      emprelation: "",
      empnominee: "",
      emplandmark: "",
      emppincode: "",
      empcity: "",
      empmobile: "",
      empalternative: "",
      empdob: "",
      empage: "",
      empproof: "",
      empcustomerphoto: "",
      empproofphoto: "",
      empcreatedby:"",
      empupdatedby:"",
      empcurrentaddress: "",
    };
  }

  async postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data, // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value, "name ", name);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log("A form was submitted: " + JSON.stringify(this.state));
    const {
      empname,  
      emprelation,
      empnominee,
      emplandmark,
      emppincode,
      empcity,
      empmobile,
      empalternative,
      empdob,
      empage,
      empproof,
      empcustomerphoto,
      empproofphoto,
      empcreatedby,
      empupdatedby,
      empcurrentaddress,
      emppermenentaddress,

    } = this.state;
    const data = {
     name: empname,
     relation: emprelation,
     nominee: empnominee,
     landmark: emplandmark,
     pincode: emppincode,
     city: empcity,
     mobile_no: empmobile,
     alternative_no: empalternative,
     dob: empdob,
     age: empage,
     id_proof_type: empproof,
     customer_photo: empcustomerphoto,
     id_proof_photo: empproofphoto,
     created_by:empcreatedby,
     updated_by:  empupdatedby,
     current_address : empcurrentaddress,
     permanent_address: emppermenentaddress,
    };
    event.preventDefault();
    this.postData(
      "http://127.0.0.1:8000/authen_module/create-employee",
      JSON.stringify(data)
    ).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
    this.props.history.push("./login");
  };
 

  render() {
    return (
      <div>
        
        <h1 className="text-center font-bold text-3xl pt-10 pb-6">Application Form</h1>
        <hr className="border-2 "></hr>
        <div className="pt-10">
        <form onSubmit={this.handleSubmit}>
          {console.log(this.state)}
          <label className="form">
            Name
            <input type="text"  value={this.state.empname} onChange={this.handleChange}  name="empname" className="box1 border border-black px-2" />
          </label>
          <br />

          <label className="form">
            Relation
            <input type="text" value={this.state.emprelation} onChange={this.handleChange}  name="emprelation"  className="box2 border border-black px-11" />
          </label>
          <br />
          <label className="form">
            Nominee
            <input type="text" value={this.state.empnominee}  onChange={this.handleChange}  name="empnominee"  className="box7 border border-black px-2" />
          </label>
          <br />
          <label className="form">
           LandMark
            <input type="text" value={this.state.emplandmark} onChange={this.handleChange} name="emplandmark"  className="box3 border border-black px-2" />
          </label>
          <br />
          <label className="form">
            pincode
            <input type="number" value={this.state.emppincode} onChange={this.handleChange} name="emppincode" className="box6 border border-black px-2" />
          </label>
          <br />
          <label className="form">
           City
            <input type="text"  value={this.state.empcity} onChange={this.handleChange} name="empcity" className="box4 border border-black px-2"  />
          </label>
          <br />
          <label className="form">
            Mobile.No
            <input type="number" value={this.state.empmobile} onChange={this.handleChange} name="empmobile" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
        Alternative.No
            <input type="number" value={this.state.empalternative} onChange={this.handleChange} name="empalternative" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
        Date Of Birth
            <input type="date" value={this.state.empdob} onChange={this.handleChange} name="empdob" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
       Age
            <input type="number" value={this.state.empage} onChange={this.handleChange} name="empage" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
       id proof number
            <input type="number" value={this.state.empproof} onChange={this.handleChange} name="empproof" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
       Customer Photo
            <input type="file" value={this.state.empcustomerphoto} onChange={this.handleChange} name="empcustomerphoto" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
       ID proof Photo
            <input type="file" value={this.state.empproofphoto} onChange={this.handleChange} name="empproofphoto" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
       Created By
            <input type="text" value={this.state.empcreatedby} onChange={this.handleChange} name="empcreatedby" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className="form">
       Updated By
            <input type="text" value={this.state.empupdatedby} onChange={this.handleChange} name="empupdatedby" className="box5 border border-black px-2" />
          </label>
          <br />
          <label className=" flex ">Current Address : </label>
            <textarea
              placeholder="Message..."
              className="border-2 border-gray-600 lg:w-80 w-72 py-2 px-4 ml-12 mt-2 rounded-lg"
              rows="5"
              value={this.state.empcurrentaddress} onChange={this.handleChange} name="empcurrentaddress"
             
            ></textarea>{" "}
            <br />
            <label className=" flex ">Permenent Address : </label>
            <textarea
              placeholder="Message..."
              className="border-2 border-gray-600 lg:w-80 w-72 py-2 px-4 ml-12 mt-2 rounded-lg"
              rows="5"
              value={this.state.emppermenentaddress} onChange={this.handleChange} name="emppermenentaddress"
             
            ></textarea>{" "}
            <br />

          <div className="text-center">
          <button className="px-12 text-lg bold bg-yellow-300 text-black border-yellow-600 items-center">Submit</button></div>
          <p></p>
        </form>
        </div>
      </div>
    );
  }
}


export default withRouter(Cash);