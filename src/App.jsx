function Navbar() {
  return <h2>My Website</h2>;
}

function Student(props){
  return <p>Student Name:- {props.name}</p>
  
}
function Footer(){
  return <footer>Copy@right</footer>
} 

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to React</h1>
      <p>I am learning React step by step.</p>
      <Student name="Suraj Pandey"/>
      <Student name="Adarsh DN Pathak"/>
      <Footer/>
    </div>
  );
}

export default App;

