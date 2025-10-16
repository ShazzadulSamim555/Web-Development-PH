import './App.css'
import Learn from './Todo';
import Actor from './actor';

function App() {
  const actors=['rakib','shakib','mokib','nokib','lokib'];
  return (
    <>
      <h1>Vite + React</h1>

      {
        actors.map(actor=> <Actor actor={actor}></Actor> )
      }

      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Student></Student>
      <Developer name='Samim'></Developer>
      <Developer name='Shakil'></Developer>
      <Salami event='roja eid' amount='1500'></Salami>
      <Learn tasks='Learn React'></Learn>
    </>
  )
}


function Person(){
  const age=22;
  const id=102;
  return (
    <div>
      <h4>My name is Shazzadul Islam Samim</h4>
      <p>I'm {age} years old. {id} is my Id.</p>
    </div>
  )
}

function Student(){
  const name='Shazzadul Islam Samim';
  const dept='CSE';
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <h3>Department: {dept}</h3>
    </div>
  )
}

function Developer(props){
  console.log(props);
  const devstyle={border: '2px solid red'};
  return(
    <div style={devstyle}>
      <h5>Developer: {props.name}</h5>
      <h5>Technology:</h5>
    </div>
  )
}

function Salami({event,amount}){
  return(
    <div style={{border:'3px solid purple'}}>
      <h4>Salami for: {event}</h4>
      <p>Amount: {amount}</p>
    </div>
  )
}



export default App