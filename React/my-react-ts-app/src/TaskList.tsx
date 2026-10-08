// interface TaskPropsType {
//     name : string,
//     isBoolean : boolean
// }

// // export default function Task({name, isBoolean} : TaskPropsType) {
// //     if(isBoolean === true) return <li> Completed: {name} </li>
// //     return <li> Pending Broooo: {name} </li>
// // }



// // export default function Task({name, isBoolean} : TaskPropsType) {
// //     return <li>
// //         {isBoolean ? "Completed: " : "Pending Broooo: "} {name}
// //     </li>

// // }



// // export default function Task({name, isBoolean} : TaskPropsType) {
// //     return isBoolean === false || <li> Completed : {name} </li>
// // }



// export default function Task({name, isBoolean} : TaskPropsType) {
//     let list;
//     // if (isBoolean) {
//     //     list = <li>Done: {name} </li>
//     // }
//      {
//         list = <li>Not done: {name} </li>
//     }
//     return list;
// }





// interface Task {
//   id: number;
//   name: string;
//   isDone: boolean;
// }

// export default function TaskList() {
  
//   const tasks : Task[] = [
//     {id : 1, name : "Limon", isDone : false},
//     {id : 2, name :"Shimon", isDone : true}
//   ]

//   return(
//     <li>
//       {/* {tasks.map((task : Task[]) => )} */}
//       {tasks.map({})}
//     </li>
//   )




  // const tasks: Task[] = [
  //   { id: 1, name: "Learn JS", isDone: true },
  //   { id: 2, name: "Learn React", isDone: false },
  // ];

  // return (
  //   <ul>
  //     {/* JSX-এর ভেতর ডট ম্যাপ দিয়ে <li> জেনারেট করা */}
  //     {tasks.map((task: Task) => (
  //       <li key={task.id}>
  //         {task.name} - {task.isDone ? "Done" : "Pending"}
  //       </li>
  //     ))}
  //   </ul>
  // );
// }