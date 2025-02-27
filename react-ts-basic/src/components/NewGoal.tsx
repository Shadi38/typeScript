import { useRef } from "react"
type NewGoalProps = {
onAddGoal:(goal:string, summary:string)=>void
}
export default function NewGoal({onAddGoal}:NewGoalProps) {

 const goal = useRef<HTMLInputElement>(null)//useRef returns an object with a current property that contains the current value of the reference
 const summary = useRef<HTMLInputElement>(null)

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
 event.preventDefault()
 const enteredGoal = goal.current!.value // "!" means that we are sure that the value is not null
 const enteredSummary = summary.current!.value
 event.currentTarget.reset()//reseting the input fields
  onAddGoal(enteredGoal, enteredSummary)
}

    return(
     <form onSubmit={handleSubmit}>
       <p>
            <label htmlFor="goal">your goal</label>
            <input id="goal" type="text" ref={goal}/>
       </p>
       <p>
            <label htmlFor="summary">short summary</label>
            <input id="summary" type="text" ref={summary}/>
       </p>
       <button>Add Goal</button>
     </form>
    )}