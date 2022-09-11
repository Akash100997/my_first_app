import './App.css';

const Person = (props) => {
  return (
  <>
    <h2>First Name : {props.fname}</h2>
    <h2>Last Name : {props.lname}</h2>
    <h2>Age : {props.age}</h2>
  </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person fname='Vaidun' lname='Akash' age={30} />
    </div>
  );
}

export default App;
