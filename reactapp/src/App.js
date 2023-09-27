import React,{useState,useEffect} from "react";
import Card from "./Card";
import axios from "axios"

function App() {
   
  const[details,setDetails] = useState([]);

  const getDetailsapi = async()=>{
    let response = await axios("http://127.0.0.1:3001/api/");
    console.log(response.data,"ghghs");
    setDetails(response.data)
  }

  useEffect(() => {
    getDetailsapi()
  
  }, [])
  
  return (
    <div className="App">
      {console.log(details)}
     {
      details.map((item) =>{
        return(
          <>
          <Card data={item}/>
          </>
        )
      })
     }
    </div>
  );
}

export default App;
