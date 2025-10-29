import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import arr from "./utils/dummy";




function App(){

    return(
        <>
        <Header/>
      
     <div className="cards-container">
        {arr.map((value, index) => (
      <Card key={index} cloth={value.cloth} offer={value.offer} image={value.image} />
       ))}
    </div>

        <Footer/>

       </>
    )

}

const Root =ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);