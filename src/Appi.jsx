import React  from "react";

const SlotM = (props) => {
        //  let x = "😄";
        //  let y = "😄";
        //  let z = "😄";
        let x = props.x;
        let y =props.y;
        let z =props.z;
       
    if (x===y && y===z){
        return(
            <>
            <div className="slot_inner">
                <h1> 
                {"    "}
                     {x}  {y}  {z} 
                {"    "} 
                </h1>
                <h1> This is Matching</h1>
                <hr/>

            </div>
            </>
        );
    }else{
        
            return(
              <>
                <div className="slot_inner">
                    <h1> {x}  {y}  {z}  </h1>
                    <h1> This is not Matching</h1>
                    <hr/>
    
                </div>
              </>
            );
        }
    
    }


const Appi= ()  => {
    return(
    <>
    <h1 className="heading_style"> 
        🎰 welcome to 
        <span style={{fontWeight:"bold"}}> slott machine  game </span> 🎰 
    </h1>
    <div className="slot machin">
    <SlotM x="😄" y="😄" z="😄"/>
    <SlotM x="🌟" y="🌟" z="🫡"/>
    <SlotM x="🍎" y="🍎" z="🍊"/>
    </div>
    
    </>
    );
};

export default Appi;