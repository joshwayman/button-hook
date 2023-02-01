import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)
  let params = new URLSearchParams(window.location.search)

  const [hookUrl, setHookUrl] = useState(params.get('hook'))


  return (
    <div className="App">
      {hookUrl ? <Button action={hookUrl} /> : '' }
      {hookUrl ? <span>`We got a hook! ${hookUrl}`</span> : 'Hook required' }
    </div>
  )
}

export default App
