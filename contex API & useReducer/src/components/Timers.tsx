import { useTimersContext } from "../store/timers-contex";
import  Timer from "./Timer.tsx"

export default function Timers() {
  const {timers} = useTimersContext()//we want to know how many timers we have
  return <ul>
    {timers.map(timer=><li key={timer.name}>
      <Timer {...timer}/>
    </li>)}
  </ul>;
}
