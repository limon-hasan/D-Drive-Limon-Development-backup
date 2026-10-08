// function Todo({task, time}) {
//     // console.log(props)
//     return <li>Do this work: {task} at {time} </li>
// }

interface TodoPropsType {
    task : string, 
    time? : string
}

// function Todo({task, time} : TodoPropsType) {
//     // console.log(props)
//     return <li>Do this work: {task} at {time} </li>
// }
function Todo({task, time} : {task : string, time ? : string}) {
    // console.log(props)
    return <li>Do this work: {task} at {time} </li>
}
export default Todo