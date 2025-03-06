import Button from './UI/Button.tsx';
// import { useContext } from 'react';
import {  useTimersContext } from '../store/timers-contex.tsx';

export default function Header() {
  //we can have access to the context value(object) by using the useContext hook
  // const timersCtx = useContext(TimersContext);
  const timersCtx = useTimersContext();//with this approch we can avoid the above line and we TimerContext object never be null
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>{timersCtx.isRunning?'Stop':'Start'} Timers</Button>
    </header>
  );
}
