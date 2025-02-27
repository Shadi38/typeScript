// type CourseGoalProps = {
//     title:string,
//     description:string
// }
// interface CourseGoalProps {
//     title:string,
//     description:string
// }

// export default function CourseGoal({title, description}:CourseGoalProps) {
//     return (
//         <article>
//             <div>
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//                 <button>Delete</button>
//             </div>
//         </article>
//     )
// }

//usecase of ReactNode type by haveing children prop
// import {type ReactNode } from "react"

// interface CourseGoalProps {
//     title:string,
//     children:ReactNode
// }

// export default function CourseGoal({title, children}:CourseGoalProps) {
//     return (
//         <article>
//             <div>
//                 <h1>{title}</h1>
//                 {children}
//                 <button>Delete</button>
//             </div>
//         </article>
//     )
// }

//usecase of PropsWithChildren by haveing children prop

import {type PropsWithChildren } from "react"

type CourseGoalProps = PropsWithChildren<{title:string}>

export default function CourseGoal({title, children}:CourseGoalProps) {
    return (
        <article>
            <div>
                <h1>{title}</h1>
                {children}
                <button>Delete</button>
            </div>
        </article>
    )
}

//another way of difining component as function

// import {FC, PropsWithChildren} from "react"
// type CourseGoalProps = PropsWithChildren<{title:string}>
// const CourseGoal:FC<CourseGoalProps> = ({title, children}) => {
//     return (
//                 <article>
//                     <div>
//                         <h1>{title}</h1>
//                         {children}
//                         <button>Delete</button>
//                     </div>
//                 </article>
//             )
// }
// export default CourseGoal