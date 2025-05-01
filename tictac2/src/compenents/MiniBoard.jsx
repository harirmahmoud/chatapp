import React from 'react'
import MiniSquare from './MiniSquare'

export default function MiniBoard({val,setVal,setIndex,setCheck,check,setVall,draw,setDraw,check1}) {
    const [val2,setVal2]=React.useState("")
    const [mboard,setMboard]=React.useState([
        "", "", "",
        "", "", "",
        "", "", ""
    ])
    const handleSquareClick = (index) => {
        if (mboard[index] === "") {
            const newBoard = [...mboard];
            newBoard[index] = val;
            setMboard(newBoard);
            setVal(val === "X" ? "O" : "X");
            setIndex(index);
            
        }
    }
    React.useEffect(() => {
        if (check1) {
            setMboard([
                "", "", "",
                "", "", "",
                "", "", ""
            ])
        setCheck(false)
        setDraw(false)
        }},[val]);
    React.useEffect(() => {
        if (checkWin()) {
           
            setCheck(true)
           
        }
    }, [mboard]);
   
    React.useEffect(() => {
        if (mboard.every((square) => square !== "")) {
            setDraw(true)
        }
    }, [mboard]);
    
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
            if (mboard[a] && mboard[a] === mboard[b] && mboard[a] === mboard[c]) {  setVal2(mboard[a]);setVall(mboard[a])
                return true;
              
            }
        }
        return false;
    }
    if(check){
        return(
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1 style={{color:"red"}}> {val2} </h1>
            </div>
        )
    }
    if(draw){
        return(
            <div style={{background:"gray"}}>
                
            </div>
        )
    }
  return (
   <div>
   <div style={{ display: 'flex', justifyContent: 'center' }} className="row">
             <MiniSquare val={mboard[0]} choose={()=>handleSquareClick(0)}  />
             <MiniSquare val={mboard[1]} choose={()=>handleSquareClick(1)}  />
             <MiniSquare val={mboard[2]} choose={()=>handleSquareClick(2)}  />
           </div>
           <div style={{ display: 'flex', justifyContent: 'center' }} className="row">
             <MiniSquare val={mboard[3]} choose={()=>handleSquareClick(3)}  />
             <MiniSquare val={mboard[4]} choose={()=>handleSquareClick(4)}  />
             <MiniSquare val={mboard[5]} choose={()=>handleSquareClick(5)}  />
           </div>
           <div style={{ display: 'flex', justifyContent: 'center' }} className="row">
             <MiniSquare  val={mboard[6]} choose={()=>handleSquareClick(6)} />
             <MiniSquare val={mboard[7]} choose={()=>handleSquareClick(7)}  />
             <MiniSquare val={mboard[8]} choose={()=>handleSquareClick(8)}  />
           </div>
   </div>
           
  )
}
