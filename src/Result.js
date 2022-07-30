import React,{useEffect,useState} from 'react'
import './App.css';
function Result({box1Items,box2Items}) {
    const [only1,setOnly1] = useState([]);
    const [only2,setOnly2] = useState([]);
    const [common,setCommon] = useState([]);
    const [unique,setUnique] = useState([]);
    
    
    useEffect(()=>{
        const getOnly1 = ()=>{
            const o1 = box1Items.filter((item)=>{
                return !box2Items.includes(item)||!box2Items
            });
            setOnly1(o1);
            console.log("getOnly1 called");
        }
        const getOnly2 = ()=>{
            const o2 = box2Items.filter((item)=>{
                return !box1Items.includes(item)||!box1Items
            });
            setOnly2(o2);
            console.log("getOnly2 called")
        }
        const getCommon = ()=>{
           
           const on1 = box1Items.filter((item)=>{
            return box2Items.includes(item)
           })
           console.log(on1)
           const on2 = box2Items.filter((item)=>{
            return box1Items.includes(item)
           })
           console.log(on1,on2)
           const all = new Set([...on1,...on2]);
    
           setCommon([...all].sort())
           console.log("getCommon called")
        }
        const getUnique = ()=>{
            const o1 = box1Items.filter((item)=>{
                return !box2Items.includes(item)||!box2Items
            });
            const o2 = box2Items.filter((item)=>{
                return !box1Items.includes(item)||!box1Items
            });

            setUnique([...o1,...o2].sort())
            console.log("getUnique called")
            console.log("only in unique",o1,"only in unique",o2)
        }
        const callAll = ()=>{
            getOnly1();
            getOnly2();
            getCommon();
            getUnique();
            console.log(only1,only2,common,unique)
            console.log("all called")
        }
            callAll();
        
        
        
    },[box1Items,box2Items])
    
    return( 
                <div className='m-3 mt-5 d-flex justify-content-center'>
                    <div className='result-list'>
                        
                            <ul className='list'>
                                <li>The Items present only in Box A  are < span className='list-span '>{only1.length>=1?only1.join(" "):"none"}</ span></li>
                                <li>The Items present only in Box B  are < span className='list-span'>{only2.length>0?only2.join(" "):"none"}</ span></li>
                                <li>The Items present  in both Box A and Box B  are < span className='list-span'>{common.length>0?common.join(" "):"none"}</ span></li>
                                <li>The Items Combining both Boxs(Unique)  are < span className='list-span'>{unique.length>0?unique.join(" "):"none"}</ span></li>
                            </ul>
                        
                        
                    </div>
                </div>)
              
        

    
   
 
  
}

export default Result