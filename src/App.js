
import './App.css';
import Result from './Result';
import { useState } from 'react';
function App() {
  const [item1,setItem1] = useState('');
  const [item2,setItem2] = useState("");
  const [box1Items,setBox1] = useState([]);
  const [box2Items,setBox2] = useState([]);
  const [flag,setFlag] = useState(false);
  const [flag1,setFlag1] = useState(false);
  const [flag2,setFlag2] = useState(false);
  const submitHandler1 = (e)=>{
    e.preventDefault();
    if(item1&&(!box1Items.includes(item1))){
      setBox1([...box1Items,item1].sort());
      setItem1("");
      setFlag1(true);
    }
    else if (box1Items.includes(item1)){
      alert("Item already added")
      setItem1("")
    }
    else{
      alert("fields should not be empty")
    }
  }
  const submitHandler2 = (e)=>{
    e.preventDefault();
    if(item2&&(!box2Items.includes(item2))){
      setBox2([...box2Items,item2]);
      setItem2("");
      setFlag2(true);
    }
    else if(box2Items.includes(item2)){
      alert("Item already added")
      setItem2("")
    }
    else{
      alert("fields should not be empty")
    }
  }
  const compute = ()=>{
    setFlag(true);
    console.log("A items are"+box1Items.join(" "));
    console.log('B items are'+box2Items.join(" "))
  }
  
  return (
    <div class="main-container ">
        <div class="top-section d-flex mt-5">

                <div class="m-3 w-50 box shadow-lg">
            <form class="d-flex flex-column">
                <div class="m-3 w-50 align-self-center ">
                    <div className='text-center box-input-heading'><h5>Enter items in box A</h5></div>
                    <input type="text" id="box1"  class="form-control" value={item1} onChange={(e)=>setItem1(e.target.value)}/>
                </div>
                <div class="m-3 text-center">
                    <button class="btn btn-primary" onClick={submitHandler1}>Add Items</button>
                </div>
                
            </form>
            <div className='m-3 text-center'>
              <h6 className='box-input-heading'>{flag1?<h6>Items in box A are <span className='box-items '>{box1Items.join(" ")}</span></h6>:""}</h6>
                   
            </div>
        </div>
                <div class="m-3 w-50 box shadow-lg">
            <form class="d-flex flex-column">
                <div class="m-3 w-50 align-self-center">
                    <div className='text-center box-input-heading'><h5>Enter items in box B</h5></div>
                    <input type="text" id="box1"  class="form-control" value={item2} onChange={e=>setItem2(e.target.value)}/>
                </div>
                <div class="m-3 text-center">
                    <button class="btn btn-primary" onClick={submitHandler2}>Add Items</button>
                </div>
                
            </form>
            <div className='m-3 text-center'>
                <h6 className='box-input-heading'>{flag2?<h6>Items in box B are <span className='box-items'>{box2Items.join(" ")}</span></h6>:""}</h6>
            </div>
        </div>
        </div>
        <div class='bottom-section m-3'>
          <div class='m-3 text-center'>
            <button class='btn btn-primary' onClick={compute}>Compute</button>
          </div>
        </div>
        {flag&&<Result box1Items={box1Items} box2Items={box2Items} flag={flag}/>}
    </div>
    
  )
  
}

export default App;
