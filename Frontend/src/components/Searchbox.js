import React from "react";
import "./SearchBox.css";
import disease from "./symptoms";
import { useState } from "react";
function SearchBox() {
  const [first, setfirst] = useState("Your Disease will appear here")
  const [prec, setprec] = useState([]);
  let val = "";
  const onclick = async (e) => {
    let d=document.getElementById("precaution");
    d.style.display="none";
    val = e.target.value;
    console.log(val);
    let data = await fetch("http://localhost:4000/getdisease", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ symptom: val }),
    });
    data = await data.json();
    setfirst(`You may have ${data.dis}`);
    setprec(data.precaution);
    let c=document.getElementById("seccontainer");
    c.style.display="flex";
    c.style.justifyContent="center";
  };
  const loadpre=()=>{
    let c=document.getElementById("seccontainer");
    c.style.display="none";
    let d=document.getElementById("precaution");
    d.style.display="block";
  }
  return (
    <>
      <div className="FirstBox">
        <div className="left">
          Have Access To Your Own Health Encyclopedia At Any Time.
          <select
            class="form-select searchbox"
            aria-label="Default select example"
            onClick={onclick}
          >
            {disease.map((dis) => {
              return (
                <option selected value={dis.symptom}>
                  {dis.symptom}
                </option>
              );
            })}
            <option selected>Select Your Symptoms</option>
          </select>
          <div className="main-output-container">
            <div className="sec-output-container" id="disease-output-container">{first}</div>
            <div id="seccontainer"><button className="btn" onClick={loadpre}>Load Precautions</button></div>
            <div className="sec-output-container" id="precaution">{prec.map((ele)=>{
              return(
                <>
                  <div className="prevention">
                    {ele}
                  </div>
                </>
              )
            })}</div>
          </div>
        </div>
        <div className="right">
          <img src="./images/cuteanimated.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default SearchBox;
