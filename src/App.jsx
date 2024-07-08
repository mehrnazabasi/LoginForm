import './App.css'
import { LoginForm } from './components/LoginForm/LoginForm'
import './bootstrap.min.css'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validateMessage, setValidateMessage] = useState('') 
  const submit = () =>{
    if(name || email || password === ''){ 
      setValidateMessage('لطفا مشخصات خود را کامل وارد نمایید')
    }
  }
  return (
    <>
      <LoginForm/>
    </>
  )
}

export default App
