
import { useEffect, useState } from 'react';
import './App.css';

function App(props) {
  
    // first bulb
    const [firstbulbState,setbulbfirst]=useState(false);
  
    
  //second bulb
    const [secondbulbState,setbulbsecond]=useState(false);
    

    const bulbOne =()=>{

     setbulbfirst(!firstbulbState);
      
    };


    const bulbSecond =()=>{
      setbulbsecond(!secondbulbState)

    }
    
    
  

 
  
  
  return (
    <div className="App">
      {firstbulbState === false?<span className='dot dott'  style={{backgroundColor:"grey"}} ></span>:<span className='dot dott'  style={{backgroundColor:"orange"}} ></span>}
      {secondbulbState === false?<span className='dot '  style={{backgroundColor:"grey"}} ></span>:<span className='dot '  style={{backgroundColor:"orange"}} ></span>}
     
     
      <button className='button-design  dott' onClick={bulbOne} >{firstbulbState === false ?"OFF":"ON"}</button>
      <button className='button-design'onClick={bulbSecond}>{secondbulbState === false ?"OFF":"ON"}</button>
    
    </div>
  );
}

export default App;
