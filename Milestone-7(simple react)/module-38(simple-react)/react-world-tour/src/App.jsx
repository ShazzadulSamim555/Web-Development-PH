import { Suspense } from 'react';
import './App.css'
import Countries from './Countries/Countries'

function App() {
  const countryPromise= fetch('https://openapi.programming-hero.com/api/all')
    .then(res=> res.json());
  
  return (
    <>
      <h1>React tour on the go</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
