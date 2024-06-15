import React, { useState } from "react";

const Todolist=({listTodo,deleteListitem})=>{
    return(
     <div>
       {({listTodo})&&(
            <div>
                {listTodo.map((ele,i)=>(
                    
                   
                    <div key={i} index={i}>
                        {ele}
                        <button onClick={(e)=>{
                        deleteListitem(i);  
                       
                    
                      

                        }}>delete</button>
                        </div>
                   
                ))}
            </div>
        )}
     </div>
    )
}

export default Todolist