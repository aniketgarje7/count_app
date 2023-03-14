s
import { useState ,useEffect} from 'react';
import './App.css';
import CounterComponent from './Component/counter';

function App() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    if(count<0){
      alert("error");
      setCount(0);
    }
    if(count>=0){console.log(count)}
  },[count])

   const countD = ()=>{
    setCount((count)=>count-1);
    return count;
   }
   const countIncreament = ()=>{
    setCount((count)=>count+1)
    return count
   }
  return (
    <>
    <div className='div-1'>
    <h1 id='h1'>Creatinng count </h1>
    <div>changes has been mmade</div>
     <CounterComponent countI = {countIncreament} increamented={count} countD={countD} zeroCount={()=>setCount(0)}/>
     </div>
     </>
  )
}

export default App;
