import React from 'react'

export default function MiniSquare({val,choose}) {
  return (
    <div onClick={choose} style={{
        width:"70px",
        height:"70px",
        border:"1px solid black",
        borderRadius:"5px",
        hover:{
            backgroundColor:"lightblue"
        },
        margin:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        }}>
        <h1 style={{fontSize:"30px"}}>{val}</h1>
        </div>
  )
}
