import React from "react"
import { useState } from "react"
function App() {

  const [fPlayer, setfPlayer] = useState("");
  const [sPlayer, setsPlayer] = useState("");
  const [fpCode, setfpCode] = useState("X");
  const [spCode, setspCode] = useState("O");
  const [one, setone] = useState("")
  const [two, settwo] = useState("")
  const [three, setthree] = useState("")
  const [four, setfour] = useState("")
  const [five, setfive] = useState("")
  const [six, setsix] = useState("")
  const [seven, setseven] = useState("")
  const [eight, seteight] = useState("")
  const [nine, setnine] = useState("")
  const [p1Arr, setplayer1Arr] = useState([])
  const [p2Arr, setplayer2Arr] = useState([])
  const [allPlayer, setallPlayer] = useState([]);
  const [kk, setkk] = useState(false)
  const [myG, setmyG] = useState("")
  const [dis2, setdis2] = useState(false)
  const enterPlayer = () => {
    let firstPlayer = { fPlayer, fpCode }
    let secondPlayer = { sPlayer, spCode }

    let bothPlayer = [...allPlayer, firstPlayer, secondPlayer]
    setallPlayer(bothPlayer)
  }
  let myInd;
  if(p1Arr.length < 1){
    myInd = 0
  }
  else if (p1Arr.length >=1){
    myInd = p1Arr.length-1
  }

  const num1 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] != "X") {
      setplayer1Arr(arr1)
    }
    else {
      setplayer1Arr(arr2)
    }
    setone(p1Arr[myInd])
  }
  const num2 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   

    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    settwo(p1Arr[myInd])
    // setdis2(true)

  }
  const num3 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }

    setthree(p1Arr[myInd])

  }
  const num4 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    setfour(p1Arr[myInd])
  }
  const num5 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    setfive(p1Arr[myInd])

  }
  const num6 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    setsix(p1Arr[myInd])

  }
  const num7 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    setseven(p1Arr[myInd])

  }
  const num8 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    seteight(p1Arr[myInd])

  }
  const num9 = () => {
    let arr1 = [...p1Arr, fpCode]
    let arr2 = [...p1Arr, spCode]
   
    if (p1Arr[myInd] == fpCode) {
      setplayer1Arr(arr2)
    }
    else {
      setplayer1Arr(arr1)
    }
    setnine(p1Arr[myInd])
  }

  if((one== fpCode && two == fpCode && three == fpCode ) || (one== fpCode && four == fpCode && seven == fpCode) || (three == fpCode && six == fpCode && nine == fpCode) || (seven == fpCode && eight == fpCode && nine == fpCode) || (two == fpCode && five == fpCode && eight == fpCode) || (one== fpCode && five == fpCode && nine == fpCode) || (three == fpCode && five == fpCode && seven == fpCode ) || (four == fpCode && five == fpCode && six == fpCode)){
   console.log("You won John Fixit");
  //  setkk(true)
  }
  else if((one==spCode && two == spCode && three == spCode ) || (one==spCode && four == spCode && seven == spCode) || (three == spCode && six == spCode && nine == spCode) || (seven == spCode && eight == spCode && nine == spCode) || (two == spCode && five == spCode && eight == spCode) || (one==spCode && five == spCode && nine == spCode) || (three == spCode && five == spCode && seven == spCode ) || (four == spCode && five == spCode && six == spCode)){
    console.log("You Won Adesewa");
  //  setkk(true)

  }
  // else{
  //   console.log("You draw");
  // }

  const cont=()=>{
      setone("")
      settwo("")
      setthree("")
      setfour("")
      setfive("")
      setsix("")
      setseven("")
      seteight("")
      setnine("")
  }
  const restart=()=>{
    // location.reload();
  }

  return (
    <body>
      <div className="container-fluid bg-danger">
        <h2 className="text-center mt-2 text-warning">TIC TAC TOE</h2>
        {/* { */}
        {/* // allPlayer.length < 1 ? */}
        <div className="mt-4 p-4">
          <div className="form-floating mx-auto">
            <input type="text" className="form-control w-50" placeholder="Enter player 1 here" name="fPlayer" onChange={(event) => setfPlayer(event.target.value)} value={fPlayer} />
            <label for="">Enter player 1 here</label>
          </div>
          <div className="form-floating mx-auto">
            <input type="text" className="form-control w-50 mt-2" placeholder="Enter player 2 here" name="sPlayer" onChange={(event) => setsPlayer(event.target.value)} value={sPlayer} />
            <label for="" >Enter player 2 here</label>
          </div>
          <button className="btn btn-warning w-50 mt-3" onClick={enterPlayer}>Enter</button>
        </div>
        {/*  :  */}
        <div className="text-center">
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space1" disabled={kk} onClick={num1}>{one}</button>
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space2" disabled={kk} onClick={num2}>{two}</button>
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space3" disabled={kk} onClick={num3}>{three}</button><br></br>

          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space4" disabled={kk} onClick={num4}>{four}</button>
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space5" disabled={kk} onClick={num5}>{five}</button>
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space6" disabled={kk} onClick={num6}>{six}</button><br></br>

          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space7" disabled={kk} onClick={num7}>{seven}</button>
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space8" disabled={kk} onClick={num8}>{eight}</button>
          <button className="btn btn-warning text-light border border-dark rounded-0 ms-2 mt-2 p-5 fs-1" id="space9" disabled={kk} onClick={num9}>{nine}</button>
        </div>
        <div className="btn-group mx-auto py-3 d-flex">
          <button className="btn btn-outline-light text-light" onClick={cont}>Continue</button>
          <button className="btn btn-warning ms-2" onClick={restart}>Restart</button>
        </div>
        {/* } */}
      </div>
    </body>

  )
}

export default App