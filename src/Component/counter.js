import React from 'react'
import './counter.css'

const CounterComponent = (props) =>{
  return <>
    {props.increamented>=0 && <h1 id='count'>{props.increamented}</h1>}
    <button className='button' onClick={props.countI}>increament</button>
    <button className='button' onClick={props.countD}>decreament</button>
    {props.increamented>=11 && <button className='button' onClick={props.zeroCount}>Go Back to Zero</button>}
  
  </>
  
}

export default CounterComponent;