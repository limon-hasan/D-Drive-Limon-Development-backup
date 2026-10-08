import './App.css'
// import Todo from "./ToDo"
// import TaskList from './TaskList'
import Book from './Book'
import Users from './Users'

function App() {
  const books = ["Physics", 'Chemistry', "Biology", "Math", "English", "Bangla"]
  return (
    <>
          <h1>Get started LIMON </h1>
          <Users></Users>

          {/* {
            books.map((book) => {
              return <li> <Book></Book></li>
            })
          } */}
          
          {/* {
            books.map(book => <li> <Book name = {book}></Book></li>
            )
          } */}

          {/* {
            books.map((book) =>
            <li>Book : {book}</li>
          )
          } */}

          {/* {books.map((book) =>{
            return <li>Book HAHAHa : {book} </li>
          })
          } */}

          {/* <Students name = "Hasan Hawladar"></Students>
          <Students name = "Shakil "></Students>
          <Students name = "Limon" 
            roll = {101} 
            gpa = {3.85} 
            isEnrolled = {true} 
            skills = {["C++ ", "Java ", "React"]}
            address = {{city :"dhaka", district : "Narshingdi"}}
          >
          </Students>
          <Developer Language = "JAVASCRIPT" experience = "3"></Developer>
          <Developer Language = "C++" experience = "10" qualification = "BSC" />
          <Developer Language = "Java" framework = "Kotlin" qualification = "MSC" /> */}
          {/* <Todo task = "Practice coding" time = "5.00"></Todo>
          <Todo task = "Take a shower" time = "10.00"></Todo>
          <Todo task = "Go to bed" ></Todo> */}

          {/* <TaskList name='finish module' isDone = {true}></TaskList>
          <TaskList name='Facebook time wasting' isDone = {true}></TaskList> */}

          
          {/* <TaskList></TaskList> */}
          {/* <TaskList ></TaskList> */}
    </>
  )
}
// function Person() {
//   return <p>I am here, Limon....</p>
// }

// function Gadgets() {
//   const money = 100
//     return(
//       <>
//       <p>SUM {4+7}</p>
//       <p>sum {money}....</p>
//       </>
//     )
// }

// function Students(props) {
//   console.log("Inside the component: ", props);
//   console.log(props.name, "HAHAHAHA")
//   console.log(props.gpa)
//   console.log(props.skills)
//   // console.log(props.address["city"])

//   const studentStyle = {
//     border : '2px solid yellow',
//     borderRadius : '10px',
//     margin : '10px'
//   }
  // return(
  //   <div style={studentStyle}> 
  //     <h1>
  //       Name: {props.name}
  //     </h1>
  //     <h2>GPA: {props.gpa}</h2>
  //     <h2>Skill: {props.skills}</h2>
  //     {/* <h2>Address: {props.address.city}, {props.address.district}</h2> */}
  //     <p>Roll : {props.roll} </p>
  //   </div>
  // );
// }

// function Developer(props1) {
//   console.log(props1);
//   return(
//     <div className = "student">
//       <h4>Programming language..</h4>
//       <h3> Language : {props1.Language}, Framework: {props1.framework} </h3>
//       <h3>Expereince: {props1.experience} </h3>
//       <h3>HHAHAHA</h3>
//       <h2>YYYYY</h2>
//     </div>
//   )
// }
export default App

// function Developer(props1) {
//   console.log(props1);
//   const {Language, framework, experience} = props1;
//   return(
//     <div className = "student">
//       <h4>Programming language..</h4>
//       <h3> Language : {Language}, Framework: {framework} </h3>
//       <h3>Expereince: {experience} </h3>
//       {/* <h3>HHAHAHA</h3> */}
//       <h2>YYYYY</h2>
//     </div>
//   )
// }