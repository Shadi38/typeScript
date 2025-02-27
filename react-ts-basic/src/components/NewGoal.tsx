export default function NewGoal() {

function handleSubmit(event: React.FormEvent) {
event.preventDefault()
}

    return(
     <form onSubmit={handleSubmit}>
       <p>
            <label htmlFor="goal">your goal</label>
            <input id="goal" type="text"/>
       </p>
       <p>
            <label htmlFor="summary">short summary</label>
            <input id="summary" type="text"/>
       </p>
     </form>
    )}