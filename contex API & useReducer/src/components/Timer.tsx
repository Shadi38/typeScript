import Container from './UI/Container.tsx';
import {useTimersContext, type Timer as TimerProps} from '../store/timers-contex.tsx';
import { useEffect, useRef, useState } from 'react';

// type TimerProps = {
//   name:string,
//   duration:number
// }

export default function Timer({name, duration}:TimerProps) {
  const interval = useRef<number | null>(null)//for having interval variable to stop the setInterval function ,we used useRef because unlike variables,useRef won't get recreated whenever this component function runs again 
  const [remainingTime, setRemainingTime ]= useState(duration*1000)
  const {isRunning} = useTimersContext()
  
if(remainingTime <=0 && interval.current){
  clearInterval(interval.current)
}

useEffect(()=>{
  let timer:number
  if(isRunning){
     timer = setInterval(() => {
      setRemainingTime(prevTime=>prevTime-50)
    }, 50)
    interval.current = timer
  }else if(interval.current){
    clearInterval(interval.current)
  }
 
  
  return()=>clearInterval(timer)
},[isRunning])

const formattedRemainingTime = (remainingTime/1000).toFixed(2)

  return (
    <Container as="article">
      <h2>{name}</h2>
      {/* <p>{duration}</p> */}
      <p>
        <progress max={duration*1000} value={remainingTime}/>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
