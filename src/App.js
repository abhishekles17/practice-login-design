import "./App.css";
import FormLogo from "./assets/formLogo.svg";
import { useState } from "react";
import Logo from "./assets/logo.svg"
import LeftRect from "./assets/leftRect.svg"
import RightRect from "./assets/rightRect.svg"

function App() {
  const [index, setIndex] = useState(2)
  const size = ["1-20","21-50","51-200","201-500","500+"]
  return (
    <div className="container">

      <img className="logo" src={Logo} alt="logo"/>
      <img className="leftLogo" src={LeftRect} alt="logo"/>
      <img className="rightLogo" src={RightRect} alt="logo"/>
      <div className="privacyPolicy">Terms of use  |  Privacy policy </div>
      <div className="form">
        <img className="formLogo" src={FormLogo} alt="logo" />
        <div className="header">It’s a delight to have you onboard</div>
        <div className="subHeader">
          Help us know you better.
          <br></br>
          (This is how we optimize Wobot as per your business needs)
        </div>
        <div className="formContainer">
          <div className="formHeader">Company name</div>
          <input
            type="text"
            className="nameInput"
            placeholder="e.g. Example Inc"
          />
        </div>
        <div className="formContainer">
          <div className="formHeader">Industry</div>
          <select className="industrySelect">
          <option value="select">Select</option>
          </select>
        </div>
        <div className="formContainer">
          <div className="formHeader">Company size</div>
          <div className="boxContainer">
            {size.map((item,i) => {
              return (
                <div onClick={() => { setIndex(i)}} className={index === i ? "box active" : "box"}>{item}</div>
              )
            })}
          </div>
        </div>
        <button className="buttonContainer">Get Started</button>
      </div>
    </div>
  );
}

export default App;
