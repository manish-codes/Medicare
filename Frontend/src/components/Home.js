import React from "react";
import "./Home.css";
import SearchBox from "./Searchbox";

function Home() {
  return (
    <>
    <div className="main-page-container">
      <SearchBox />
      <section className="sec1">
        <div className="box-main">
          <div className="first-half">
            <div>
              <img className="img_hover" src="./images/doc.png" alt="image" />
            </div>
          </div>
          <div className="second-half">
            <h2 className="heading1">
                Welcome To
            </h2>
            <h1>MEDICARE</h1>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}

export default Home;
