// import CourseGoal from "./components/CourseGoal.tsx";
// export default function App() {
//   return <main>
//     <CourseGoal title="Learn react+Ts" description="Learn it from ground up"/>
//   </main>
// }


import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};


export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handelAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: "Learn React + TS",
        description: "Learn it from ground up",
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
setGoals(PrevGoals=> PrevGoals.filter(goal=> goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handelAddGoal}>Add Goal</button> */}
      <NewGoal/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
