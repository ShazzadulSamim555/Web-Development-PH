
import './app.css'
import Counter from './counter';
import Batsman from './batsman';
import Users from './user';
import { Suspense } from 'react';


const fetchUser= fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())


export function App() {

  function handleClick(){
    alert('Alert');
  }

  const handleClick2=()=>alert('click 2');
  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUser={fetchUser}>
          
        </Users>
      </Suspense>

      <Counter></Counter>

      <button onClick={handleClick}>Click</button>

      <button onClick={handleClick2}>Click 2</button>

      <button onClick={()=> alert('Click 3')}>Click 3</button>

      <Batsman></Batsman>
    </>
  )
}
