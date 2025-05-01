import React from 'react'
import { useState } from 'react'
import Square from './Square'
import { Toaster,toast  } from "mui-sonner";

export default function Board() {
    const [val, setVal] = React.useState("X")
    const [index, setIndex] = React.useState("")
    const [board, setboard] = React.useState([
        "", "", "",
        "", "", "",
        "", "", ""
    ])
    const [win, setWin] = React.useState(false)
    const [point, setPoint] = React.useState({
        X:0,
        O:0,
    })
    React.useEffect(() => {
        if (checkWin()) {
           toast.success(val==="X"?"O":"X" + " Win !!");
           console.log(val)
           
        }
    }
        , [board]);
    const [draw, setDraw] = React.useState(false)
    React.useEffect(() => {
        if (board.every((square) => square !== "")) {
            setDraw(true)
            toast.info('Draw !!');
            setIndex("")
                setboard([
                    "", "", "",
                    "", "", "",
                    "", "", ""
                ])
        }
    }
        , [board]);
    const checkWin=()=>{
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWin(true)
                setVal(board[a])
                setPoint((prevPoint) => {  setIndex("")
                setboard([
                    "", "", "",
                    "", "", "",
                    "", "", ""
                ])
                    if (board[a] === "X") {
                        return { ...prevPoint, X: prevPoint.X + 1 }
                    } else {
                        return { ...prevPoint, O: prevPoint.O + 1 }
                    }})
              
                return true;
            }
        }
        return false;
    }
   
  return (
    <div style={{}}>
          <Toaster position='top-center'/>
        <h1 style={{display:"flex",justifyContent:"center"}}>Tic Tac Toe</h1>
        <h1 style={{display:"flex",justifyContent:"center"}}>X  {point.X+" - "+point.O}  O</h1>
      
      
     <div>
      <div style={{display:"flex",justifyContent:"center"}} className="row">
         <Square id={0} val={val} setVal={setVal} setIndex={setIndex} stl={(index===0 || index==="" || board[index]!=="")  ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false}  />
         <Square id={1} val={val} setVal={setVal} setIndex={setIndex} stl={(index===1 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false} />
         <Square id={2} val={val} setVal={setVal} setIndex={setIndex} stl={(index===2 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false}   />
      </div>
     </div>
     <div style={{display:"flex",justifyContent:"center"}} className="row">
         <Square id={3} val={val} setVal={setVal} setIndex={setIndex} stl={(index===3 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false}  />
         <Square id={4} val={val} setVal={setVal} setIndex={setIndex} stl={(index===4 || index==="" || board[index]!=="")?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false}  />
         <Square id={5} val={val} setVal={setVal} setIndex={setIndex} stl={(index===5 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false}  />
      </div>
      <div style={{display:"flex",justifyContent:"center"}} className="row">
         <Square id={6} val={val} setVal={setVal} setIndex={setIndex} stl={(index===6 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false} />
         <Square id={7} val={val} setVal={setVal} setIndex={setIndex} stl={(index===7 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false} />
         <Square id={8} val={val} setVal={setVal} setIndex={setIndex} stl={(index===8 || index==="" || board[index]!=="") ?true:false } board={board} setboard={setboard} check1={(win||draw)?true:false}  />
      </div>
  
  </div>
  )
}
