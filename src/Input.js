import React , {useState}from "react";


const Input=(props)=>{
    const [input ,setinput]=useState("");
    // console.log(input)
function updateinput(e){
    setinput(e.target.value);
}
    return(
        <div>
            <form>
                <input type="text" placeholder="Enter Todo" onChange={updateinput}  value={input}>
                {/* value={input} */}
              
                </input>
                <button onClick={(e)=>{
                        setinput('');
                        e.preventDefault();
                        props.setlistTodo([...props.listTodo,input]);
                        
                    }
                }>Submit</button>
            </form>
        </div>
    )
}


export default Input;