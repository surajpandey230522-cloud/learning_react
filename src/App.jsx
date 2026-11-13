
import './App.css';



// function Navbar() {
//   return <h2>My Website</h2>;
// }

// function Student(props){
//   return <p>Student Name:- {props.name}</p>
  
// }
// function Footer(){
//   return <footer>Copy@right</footer>
// } 
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
  const [result,setResult]=useState("")
  
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


function Form1(){
  const [updates,setUpdates]=useState([
    "suraj",
    "adarsh"
  ])

  function addItem(){
    setUpdates([...updates,"aman"])
  }

  return (
    <div>
    <h2>data</h2>
    {updates.map((update)=>(
    <p key={update}>{update}</p>
    ))}
    <button onClick={addItem}>click here!</button>
    </div> 
  )
}




// function App() {
//   return (
//     <div>
//       {/* <Navbar /> */}
//       {/* <h1>Welcome to React</h1>
//       <p>I am learning React step by step.</p>
//       <Student name="Suraj Pandey"/>
//       <Student name="Adarsh DN Pathak"/>
//       <Counter/>
//       <Student1/>
//       <Data/>
//       <Footer/> */}
//       {/* <Event/> */}
//       {/* <Form1/> */}
//       <Form/>
      

   
//     </div>
//   );
// }

//........................................class component..........................................................................

// class App extends Component{
//   render(){
//     let student={
//       name:"Suraj Pandey",
//       age:21,
//       rollno:108,
//       course:"React"
//     };
//     return (
//       <div className="container">
//         <h1>Student Data</h1>
//        <div className="card">
//          <h2>{student.name}</h2>
//          <p>Age:{student.age}</p>
//          <p>Rollno:{student.rollno}</p>
//          <p>Course:{student.course}</p>

//        </div>
//       </div>
//     );
//   };
// };

//............................................. useState  with class  component  .......//............................................................................

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       count:0
//     }
//   }
//   render(){
// return(
//   <div>
    
//     <h2>Counter:{this.state.count}</h2>

//     <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase</button>
//     <br></br>
//     <button onClick={()=>{this.setState({count:this.state.count-1})}}>Decrease</button>
//   </div>
// )
//   }
  
// }

//.................................................................................................................................




// class App extends Component{
//   constructor(props){
//    super(props)
//    this.state={
//     name:""
//    }
//   }
//   render(){
//    return (
    
//     <div>
//     <input 
//     value={this.state.name}
//     onChange={(event)=>{this.setState({name:event.target.value})}}
//     placeholder="Enter the name"/>
  
//   <p>Name:{this.state.name}</p>
//     </div>
//    )    
//    }
// }



//...........................useEffect..........Api fetching......................................................................

// import { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//       loading: true,
//       error: ""
//     };
//   }

//   componentDidMount() {
//     this.getPosts();
//   }

//   getPosts = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch posts");
//       }

//       const data = await response.json();

//       this.setState({
//         posts: data.slice(0, 5)
//       });

//     } catch (err) {
//       this.setState({
//         error: err.message
//       });

//     } finally {
//       this.setState({
//         loading: false
//       });
//     }
//   };

//   render() {
//     const { posts, loading, error } = this.state;

//     if (loading) {
//       return <p>Loading posts...</p>;
//     }

//     if (error) {
//       return <p>Error: {error}</p>;
//     }

//     return (
//       <div>
//         <h1>Posts</h1>

//         {posts.map((post) => (
//           <article key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </article>
//         ))}
//       </div>
//     );
//   }
// }

//..........................................................................................................................

//  import { Component } from "react";
//   class App extends Component{
//     constructor(props){
//     super(props)
//     this.state={
//       name:"",
//       age:"",
//       result:null
//     }
//     }
//    submit =(event)=>{
//    event.preventDefault();
//    const {name,age}=this.state
//    if(!name.trim()||!age){
//     alert("please enter the data")
//     return ;
//    }
//    this.setState({result:{name:name,age:age}})
//    }
//   render(){
//     const{name,age,result}=this.state

//     return (
//       <div>
//         <form onSubmit={this.submit}>
//         <input type="text" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}} placeholder='Enetr the name'/>
//         <input type='number' value={this.state.age} onChange={(event)=>{this.setState({age:event.target.value})}} placeholder='Enter the Age' />
//         <button type='submit'>click here!</button>
//         </form>{result&&(
//           <div>
//             <h2>Student Data</h2>
//             <p> Name:{name}</p>
//             <p>Age:{age}</p>
//             </div>
//         )}
//       </div>
//     )
//   }
//   }


//.........................................................api......................................................................
  
// import {Component } from 'react';

// class App extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             users: []
//         };
//     }

//     componentDidMount() {

//         fetch("https://jsonplaceholder.typicode.com/users")

//             .then(response => response.json())

//             .then(data => {
//                 this.setState({
//                     users: data
//                 });
//             })

//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     render() {
//         return (
//             <div>

//                 <h1>User Management</h1>

//                 {this.state.users.map(user => (
                           
//                     <div key={user.id}><br></br>
//                           <p>{user.id}</p>
//                         <h2>{user.name}</h2>
                       
//                         <p>{user.email}</p>

//                     </div>

//                 ))}

//             </div>
//         );
//     }
// }


import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Contact from './pages/Contact';

class App extends Component {

    render() {

        return (
            <div>

                <Navbar />

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/students" element={<Students />} />

                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </div>
        );
    }
}


export default App;







