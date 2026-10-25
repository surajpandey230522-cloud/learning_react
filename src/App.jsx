import { useState } from "react";

function Navbar() {
  return <h2>My Website</h2>;
}

function Student(props){
  return <p>Student Name:- {props.name}</p>
  
}
function Footer(){
  return <footer>Copy@right</footer>
} 
//useState......................................................//

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

//useState...........................................................//

function Student1(){
  const[name,setName]=useState("suraj")
  return (
  <div>
    <h2>Hello:{name}</h2>

    <button onClick={()=>setName("adarsh")}>change name</button>
  </div>
  )
}
//useState....................................................................//
function Data() {
  const [students, setStudents] = useState([
    "Suraj",
    "Aman"
  ]);

  function addStudent() {
    setStudents([...students, "Adarsh"]);
  }

  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => (
        <p key={student}>{student}</p>
      ))}

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

//Event and form................................................................//


function Event(){
  function call(){
    alert("welcome to my website")
  }
  return (
    <div>
      <button onClick={call}>click here!</button>
    </div>
  )
}

//handle input with state.............................................//

function Form(){
  const [name,setName]=useState("")

  return(
    <div>
      <input value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter the name"/>
      <h2>Data:{name}</h2>
    </div>
  )
}


function App() {
  return (
    <div>
      <Navbar />
      {/* <h1>Welcome to React</h1>
      <p>I am learning React step by step.</p>
      <Student name="Suraj Pandey"/>
      <Student name="Adarsh DN Pathak"/>
      <Counter/>
      <Student1/>
      <Data/>
      <Footer/> */}
      <Event/>
      <Form/>
    </div>
  );
}

export default App;







