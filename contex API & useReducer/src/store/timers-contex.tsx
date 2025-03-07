import {type ReactNode, createContext, useContext, useReducer } from "react";
//we export the Timer type so that we can use it in other components such as Timer.tsx
export type Timer = {
    name: string;
    duration: number;
}

type TimersState = {
    isRunning: boolean;
    timers:Timer[]
}

const initialState:TimersState = {
    isRunning: false,
    timers: []
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
type StartTimersAction = {
    type: 'START_TIMERS';
}
type StopTimersAction = {
    type: 'STOP_TIMERS';
}
type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
}
type Action = StartTimersAction | StopTimersAction | AddTimerAction;
function timerReducer(state:TimersState, action:Action):TimersState{
  if(action.type === 'STOP_TIMERS'){
    return{
        ...state,
        isRunning: false
    }
}
if(action.type === 'START_TIMERS'){
    return{
        ...state,
        isRunning: true
    }
}
if(action.type === 'ADD_TIMER'){
    return{
        ...state,
        timers:[
            ...state.timers, 
            {
                name: action.payload.name,
                duration: action.payload.duration
            }
        ]
    }
}
    //return the unchanged state if no action type matches
    return state
}
export default function TimersContextProvider({children}:TimersContextProviderProps){
const[timersState, dispatch] = useReducer(timerReducer, initialState)

    const ctx : TimersContextValue = {
        isRunning: timersState.isRunning,
        timers: timersState.timers,
        addTimer: (timerData:Timer)=>{
            dispatch({type: 'ADD_TIMER', payload: timerData})
        },
        startTimers: ()=>{
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers: ()=>{
            dispatch({type: 'STOP_TIMERS'})
        }
    }
    return(
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
    )
 }