import React,{useEffect,useState} from 'react'

function Result({box1Items,box2Items,flag}) {
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
           setCommon([...on1,...on2])
        }
        const getUnique = ()=>{
            setUnique([...only1,...only2])
        }
        getOnly1();
        getOnly2();
        getCommon();
        getUnique();
        console.log(only1,only2,common,unique)
    },[box1Items,box2Items])
    
    return( 
                <div className='m-3 mt-5 d-flex justify-content-center'>
                    <div >
                        
                            <ul>
                                <li>The Items present only in Box A  are <span>{only1.join(" ")}</span></li>
                                <li>The Items present only in Box B  are <span>{only2.join(" ")}</span></li>
                                <li>The Items present  in both Box A and Box B  are <span>{common.join(" ")}</span></li>
                                <li>The Items Combining both Boxs(Unique)  are <span>{unique.join(" ")}</span></li>
                            </ul>
                        
                        
                    </div>
                </div>)
              
        

    
   
 
  
}

export default Result