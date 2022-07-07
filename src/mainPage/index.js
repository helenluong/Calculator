import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const Index = () => {
   
  const [numA, setNumA] = useState(0) //number
  const [numB, setNumB] = useState(0)
  // const [numC, setNumC] = useState(0)
  // const [numD, setNumD] = useState(0)
  // const [numE, setNumE] = useState(0)
  // const [numF, setNumF] = useState(0)
  // const [numG, setNumG] = useState(0)
  // const [numH, setNumH] = useState(0)
  // const [numI, setNumI] = useState(0)
  // const [numJ, setNumJ] = useState(0)

  // const [result1, setResult1] = useState (0)
  // const [result2, setResult2] = useState (0)
  // const [result3, setResult3] = useState (0)
  // const [result4, setResult4] = useState (0)

  // const [final, setFinal] = useState (0)

}
 
  function getNumberA(e) {
    //e.targetValue()
    console.log(e.target.value)
    console.log('e.target.value', e.target.value);
    setNumA(e.target.value)
  }

  function getNumberB(e) {
    console.log(e.target.value)
    console.log('e.target.value', e.target.value);
    setNumB(e.target.value)
  }

  // function getNumberC(e) {
   
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumC(e.target.value)
  // }

  // function getNumberD(e) {
    
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumD(e.target.value)
  // }

  // function getNumberE(e) {
    
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumE(e.target.value)
  // }

  // function getNumberF(e) {
    
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumF(e.target.value)
  // }

  // function getNumberG(e) {
    
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumG(e.target.value)
  // }

  // function getNumberH(e) {
    
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumH(e.target.value)
  // }

  // function getNumberI(e) {
    
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumI(e.target.value)
  // }

  // function getNumberJ(e) {
  
  //   console.log(e.target.value)
  //   console.log('e.target.value', e.target.value);
  //   setNumJ(e.target.value)
  // }

  function ClickAdd(e) {
    console.log(e.target);
    console.log(numA+numB);
    setResult1(numA+numB);
 }

//  function ClickSub(e) {
//     console.log('e.target.value', e.target.value);
//     console.log(numA-numB);
//     setResult2(numA-numB);
//  }

//   function ClickMul(e) {
//     console.log(e.target);
//     console.log(numA*numB);
//     setResult3(numA*numB);
//   }

//  function ClickDiv(e) {
//     console.log('e.target.value', e.target.value);
//     console.log(numA/numB);
//     setResult4(numA/numB);
//  }

//  function ClickSubmit(e) {
//     console.log('e.target.value', e.target.value);
//     console.log('');
//     setFinal('');
//  }

 const [anyNum, setAnyNum] = useState('')

 const show = (e) => {
     console.log("string");
     // console.log(e);
     // console.log(e.target);
     console.log(e.target);
     setAnyNum(e.target)
 

  return (
    <div>
      Helen's page

      <hr />
      <div className="container">
        <h1 className='text-warning'>Counting</h1>
        <hr className='text-danger' />
        <h2>MULTIPLICATION</h2>
        <hr className='text-danger' />

        <input onClick={getNumberA} type="number" />
        <input onClick={getNumberB} type="number" />
        <div className="d-flex">
     
     <div>
        <h3>Your math:</h3>
        <input onChange={ClickAdd} type="string" />
        <h3>Your math is: {show}</h3>
        <button onClick={ClickAdd}>+</button>

        {/* <button onClick={ClickSub}>-</button>
        <button onClick={ClickMul}>x</button>
        <button onClick={ClickDiv}>:</button> 
        <button onClick={ClickSubmit}>=</button> <br/> */}

        <button onClick={getNumberA}>0</button>
        <button onClick={getNumberB}>1</button> <br/>

        {/* <button onClick={getNumberC}>2</button>
        <button onClick={getNumberD}>3</button> <br/>
        <button onClick={getNumberE}>4</button>
        <button onClick={getNumberF}>5</button> <br/>
        <button onClick={getNumberG}>6</button>
        <button onClick={getNumberH}>7</button> <br/>
        <button onClick={getNumberI}>8</button>
        <button onClick={getNumberJ}>9</button> */}
     </div>  

     <br/>

     <div>
        <h3>Number A is: {numA}</h3>   <br/>
        <h3>Number B is: {numB}</h3>   <br/>
        {/* <h3>Number C is: {numC}</h3>   <br/>
        <h3>Number D is: {numD}</h3>   <br/>
        <h3>Number E is: {numE}</h3>   <br/>
        <h3>Number F is: {numF}</h3>   <br/>
        <h3>Number G is: {numG}</h3>   <br/>
        <h3>Number H is: {numH}</h3>   <br/>
        <h3>Number I is: {numI}</h3>   <br/>
        <h3>Number J is: {numJ}</h3>   <br/> */}

        {/* <h3>Result is: {final}</h3> */}

        </div>
        </div>
      </div>
    </div>
  );
};

export default Index;