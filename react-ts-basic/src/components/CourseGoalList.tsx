import CourseGoal from "./CourseGoal";
import {type CourseGoal as CGoal} from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id:number)=>void;
    }


export default function CourseGoalList({goals, onDeleteGoal}:CourseGoalListProps) {

  if(goals.length === 0){
    return <InfoBox mode="hint">You have no course goals yet.Start adding some.</InfoBox>
  }

  let warnningBox = null

  if(goals.length > 2){
    warnningBox =  <InfoBox mode="warning" severity="high">You are collecting a lot of goals. Don't put too much on your plate</InfoBox>
  } 
  

    return(
      <>
       {warnningBox}
       <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
       </ul>
      </>
      )}
