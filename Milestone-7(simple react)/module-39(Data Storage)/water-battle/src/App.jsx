import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles'

function App() {

  const bottlePromise=fetch('../public/Bottle.json') 
  .then(res=> res.json());

  return (
    <>
      <h2>By awesome water bottle.</h2>

      <Suspense fallback={<h3>Bottles are loading...</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
