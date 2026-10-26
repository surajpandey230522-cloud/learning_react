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

//useState..................with string.........................................//

function Student1(){
  const[name,setName]=useState("suraj")
  return (
  <div>
    <h2>Hello:{name}</h2>

    <button onClick={()=>setName("adarsh")}>change name</button>
  </div>
  )
}
//useState..............with array......................................................//
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

//handle input with state...............form..............................//

function Form(){
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [result,setResult]=useState(null)
  
  function submit(event){
    event.preventDefault();

    if(!name.trim()||!age){
      alert("please enter the name and age")
      return;
    }
    
    setResult({name:name,age:age})
    
  }
  return(
    <div>
      <h1>Student Data</h1>
    <form onSubmit={submit}>
      <input type="text" value={name} onChange={(event)=>{   const value = event.target.value;

         if (/^[a-zA-Z ]*$/.test(value)) {
         setName(value);
           }}} placeholder="Enter the name"/>
      <br></br>
      <input type="number" min="1" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter age"/>
      <br></br>
      <button type="submit">submit</button>
    </form>
    {result&&(
      <div>
       <h2>student data</h2>
      <p>Name:{result.name}</p>
      <p>Age:{result.age}</p>
        </div>
    )}
    </div>
  )
}




function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <h1>Welcome to React</h1>
      <p>I am learning React step by step.</p>
      <Student name="Suraj Pandey"/>
      <Student name="Adarsh DN Pathak"/>
      <Counter/>
      <Student1/>
      <Data/>
      <Footer/> */}
      {/* <Event/> */}
      <Form/>
    </div>
  );
}

export default App;







