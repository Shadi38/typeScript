import {type ReactNode, createContext, useContext } from "react";

type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers:Timer[]
}

type TimersContextValue = TimersState & {
    addTimer:(timerData:Timer)=>void;
    startTimers:()=>void;
    stopTimers:()=>void;
}
//create contex object which we will need for managing that context across the application
 const TimersContext = createContext<TimersContextValue | null>(null)
//we create custom hook to use the context,we can just call hook function in component to get the context value
export function useTimersContext() {
   const TimerCtx = useContext(TimersContext)
   if (!TimerCtx) {
       throw new Error('TimersContext is null- that should not be the case')
   }
   return TimerCtx
}

type TimersContextProviderProps = {
    children: ReactNode;
}
export default function TimersContextProvider({children}:TimersContextProviderProps){
    const ctx : TimersContextValue = {
        isRunning: false,
        timers: [],
        addTimer: (timerData:Timer)=>{},
        startTimers: ()=>{},
        stopTimers: ()=>{}
    }
    return(
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
    )
 }