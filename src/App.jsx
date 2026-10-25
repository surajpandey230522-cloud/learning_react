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

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to React</h1>
      <p>I am learning React step by step.</p>
      <Student name="Suraj Pandey"/>
      <Student name="Adarsh DN Pathak"/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;







